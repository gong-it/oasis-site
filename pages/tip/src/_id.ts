import { Vue, Component } from 'nuxt-property-decorator'
import Web3 from 'web3'
import abiArray from '~/src/utils/abiArray'

interface ExtendedWindow extends Window {
  ethereum?: any
}

declare let window: ExtendedWindow

interface ITip {
  address: string
  tag: string
  avatar: string
  amount: number
}

@Component
export default class TipIdPage extends Vue {
  head () {
    return {
      title: 'Oasis tip platform'
    }
  }

  id!: string
  tip!: ITip
  txid: string | null = null
  web3: Web3 | null = null
  fromAddress: string | null = null

  async asyncData ({ params }) {
    const res = await fetch(`${process.env.TIPPING_URL}/tips/${params.id}`)
    return { id: params.id, tip: await res.json() }
  }

  async beforeMount () {
    if (!window.ethereum) {
      alert('Please install metamask to use this application')

      return
    }

    this.web3 = new Web3(window.ethereum)
    try {
      await this.requestAccount()
    } catch (error) {
      console.log('Connect the account you bastard')
    }

    window.ethereum.on('accountsChanged', () => {
      this.fromAddress = null
    })
  }

  createTx (from, to, amount) {
    if (this.web3 === null) { return }

    const contractAddress = '0xd9c99510a5e3145359d91fe9caf92dd5d68b603a'
    // @ts-ignore
    const contract = new this.web3.eth.Contract(abiArray, contractAddress)
    const actualAmount = Math.round(amount) * 10 ** 9
    const data = contract.methods.transfer(to, actualAmount).encodeABI()
    const tx = {
      from, // Required
      to: contractAddress, // Required (for non contract deployments)
      data, // Required
      gasLimit: this.web3.utils.toHex(100000),
      gasPrice: this.web3.utils.toHex(this.web3.utils.toWei('5', 'gwei')), // Optional
      value: '0x00',
      networkId: 56,
      chainId: 56 // Optional
    }
    return tx
  }

  async sendTransaction () {
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
}
