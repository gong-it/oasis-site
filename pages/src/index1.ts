import { Vue, Component } from 'nuxt-property-decorator'

import { gsap } from 'gsap'
import NavBar from '~/components/NavBar.vue'
import BnbIcon from '~/assets/icons/crypto/bnb.svg'
import BtcIcon from '~/assets/icons/crypto/btc.svg'
import EthIcon from '~/assets/icons/crypto/eth.svg'
import NanoIcon from '~/assets/icons/crypto/nano.svg'
import ZilIcon from '~/assets/icons/crypto/zil.svg'

@Component({
  components: {
    NavBar,
    BnbIcon,
    BtcIcon,
    EthIcon,
    NanoIcon,
    ZilIcon
  }
})
export default class IndexPage extends Vue {
  boggedLink: string = 'https://charts.bogged.finance/?token=0xd9c99510a5E3145359d91fE9CaF92dd5d68b603A'
  projects: string[] = ['Oasis', 'Duck', 'Lambo', 'MoonSocks', 'SafeBud', 'Bucko', 'Camel', 'GodZilliqa', 'ASB']

  members: string [] = [
    'Madoka',
    'Greasy',
    'Vik',
    'Dandus',
    'Buckaroo',
    'neeko',
    'Stabby',
    'ZLM',
    'TMB',
    'Miner',
    'Mose',
    'Aeolus',
    'GreenWeeny',
    'marsk',
    'Toobah',
    'Bordan',
    'GONG',
    'Guap',
    'Nines',
    'PGP',
    'Franz',
    'Dave',
    'Nitro',
    'Tether',
    'Andy',
    'Mr. Minister'
  ]

  options = {
    licenseKey: process.env.FULLPAGE_LICENSE_KEY,
    menu: '#menu',
    anchors: ['landing', 'about'],
    controlArrows: false,
    scrollBar: true,
    autoScrolling: false,
    fitToSection: false,
    easing: 'easeInOutCubic'
  }

  get projectsWithQuestionMarks () {
    return this.projects.map(m => m + '?')
  }

  get membersWithQuestionMarks () {
    return this.members.map(m => m + '?')
  }

  mounted () {
    this.startAnimation()
  }

  startAnimation () {
    gsap.fromTo('#about', { y: 20, opacity: 0 }, {
      opacity: 1,
      delay: 0,
      duration: 1.2,
      y: 0
    })
    gsap.fromTo('#logo', { y: -20, opacity: 0 }, {
      opacity: 1,
      delay: 0,
      duration: 1.2,
      y: 0
    })
  }
}
