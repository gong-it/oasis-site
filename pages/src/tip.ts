import { Vue, Component } from 'nuxt-property-decorator'
import Web3 from 'web3'
import WalletConnectProvider from '@walletconnect/web3-provider'
import BigNumber from 'bignumber.js'
import LogoBlack from '~/assets/logo-black.svg'
import SmallLogo from '~/assets/small-logo.svg'
import Figure1 from '~/assets/tip/figure-1.svg'
import Figure2 from '~/assets/tip/figure-2.svg'
import Figure3 from '~/assets/tip/figure-3.svg'
import Figure4 from '~/assets/tip/figure-4.svg'
import Figure5 from '~/assets/tip/figure-5.svg'
import Figure6 from '~/assets/tip/figure-6.svg'
import { AbiItem } from '~/node_modules/web3-utils'

interface ExtendedWindow extends Window {
  ethereum?: any
}

declare let window: ExtendedWindow

interface ITip {
  address: string
  tag: string
  avatar: string
  amount: string
}

@Component({
  components: {
    LogoBlack,
    SmallLogo,
    Figure1,
    Figure2,
    Figure3,
    Figure4,
    Figure5,
    Figure6
  }
})
export default class TipPage extends Vue {
  head () {
    return {
      title: 'Oasis tip platform'
    }
  }

  id: string | null = null
  tip: ITip | null = null
  txid: string | null = null
  web3: Web3 | null = null
  fromAddress: string | null = null
  chainId: string | null = null
  abi!: AbiItem[] | AbiItem

  get isBsc () {
    return this.chainId === '0x38'
  }

  get metaMaskLink () {
    const port = window.location.port !== '' ? `:${window.location.port}` : ''

    return `https://metamask.app.link/dapp/${window.location.hostname}${port}${this.$route.fullPath}`
  }

  async beforeMount () {
    const { id } = this.$route.query

    const res = await fetch(`${process.env.TIPPING_URL}/tips/${id}`)

    this.id = id as string
    this.tip = await res.json()

    if (!window.ethereum) {
      alert('Please install metamask to use this application')

      return
    }

    this.abi = await (await fetch('/oasis-abi.json')).json()

    const provider = new WalletConnectProvider({
      rpc: {
        56: 'https://bsc-dataseed.binance.org/'
      }
    })

    // @ts-ignore
    this.web3 = new Web3(provider)

    this.chainId = window.ethereum.chainId
    try {
      await this.requestAccount()
    } catch (error) {
      console.log('Connect the account you bastard')
    }

    window.ethereum.on('accountsChanged', () => {
      this.fromAddress = null
    })

    window.ethereum.on('chainChanged', (chainId: string) => {
      this.chainId = chainId
    })
  }

  createTx (from, to, amount) {
    if (this.web3 === null) { return }

    const contractAddress = '0xd9c99510a5e3145359d91fe9caf92dd5d68b603a'

    const contract = new this.web3.eth.Contract(this.abi, contractAddress)
    const bnAmount = new BigNumber(amount)
    const exponential = (new BigNumber(10)).exponentiatedBy(9)
    const actualAmount = bnAmount.times(exponential)
    const data = contract.methods.transfer(to, actualAmount.toFixed()).encodeABI()

    const tx = {
      from, // Required
      to: contractAddress, // Required (for non contract deployments)
      data, // Required
      gas: 90000,
      networkId: 56,
      value: '0x00', // MetaMask hack
      chainId: this.chainId
    }

    return tx
  }

  async sendTransaction () {
    if (this.tip === null) { return }

    const tx = this.createTx(
      this.fromAddress,
      this.tip.address,
      this.tip.amount
    )

    try {
      const txid = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [tx]
      })
      this.txid = txid

      await fetch(`${process.env.TIPPING_URL}/tips/${this.id}`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          txid: this.txid
        })
      })
    } catch (error) {
      console.log('Why did you reject the transaction?')
    }
  }

  async requestAccount () {
    this.fromAddress = (
      await window.ethereum.request({ method: 'eth_requestAccounts' })
    )[0]
  }

  formatTag (tag: string) {
    return tag.split('#')[0]
  }
}
