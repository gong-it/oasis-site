import { Vue, Component } from 'nuxt-property-decorator'

import { gsap } from 'gsap'
import { chunk } from 'lodash-es'
import lottie from 'lottie-web'
import NavBar from '~/components/NavBar.vue'
import HeroLogo from '~/assets/hero-logo.svg'
import Particle1 from '~/assets/first-screen/particle-1.svg'
import Particle2 from '~/assets/first-screen/particle-2.svg'
import Particle3 from '~/assets/first-screen/particle-3.svg'
import Particle4 from '~/assets/first-screen/particle-4.svg'
import BigLogo from '~/assets/first-screen/big-logo.svg'
import BigLogoMobile from '~/assets/first-screen/big-logo-mobile.svg'
import ProjectsSchema from '~/assets/second-screen/projects-schema.svg'
import AddressIcon from '~/assets/third-screen/address.svg'
import CoinIcon from '~/assets/third-screen/coin.svg'
import ComputerIcon from '~/assets/third-screen/computer.svg'
import OasisIcon from '~/assets/third-screen/oasis.svg'
import PancakeIcon from '~/assets/third-screen/pancake.svg'
import PhoneIcon from '~/assets/third-screen/phone.svg'
import SettingsIcon from '~/assets/third-screen/settings.svg'
import WalletIcon from '~/assets/third-screen/wallet.svg'
import BurnIcon from '~/assets/fourth-screen/burn.svg'
import Node from '~/assets/fourth-screen/node.svg'
import Oasis from '~/assets/fourth-screen/oasis.svg'
import FooterBg from '~/assets/footer-bg.svg'

@Component({
  components: {
    NavBar,
    HeroLogo,
    Particle1,
    Particle2,
    Particle3,
    Particle4,
    BigLogo,
    BigLogoMobile,
    ProjectsSchema,
    AddressIcon,
    CoinIcon,
    ComputerIcon,
    OasisIcon,
    PancakeIcon,
    PhoneIcon,
    SettingsIcon,
    WalletIcon,
    BurnIcon,
    Node,
    Oasis,
    FooterBg
  }
})
export default class IndexPage extends Vue {
  options = {
    licenseKey: process.env.FULLPAGE_LICENSE_KEY,
    showNavBar: true,
    anchors: ['landing', 'projects', 'htb', 'tokenomics'],
    controlArrows: false,
    scrollBar: true,
    autoScrolling: false,
    fitToSection: false,
    easing: 'easeInOutCubic'
  }

  notableMembers = [
    'Greasy',
    'martsk',
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
    'Madoka',
    'Toobah',
    'Bordan',
    'GONG',
    'Guap',
    'Nines',
    'Franz',
    'Dave',
    'Nitro',
    'lilsnus',
    'Andy',
    'Savemeharry',
    'MarsJones',
    'Supah',
    'Crisp'
  ]

  get notableMembersChunks (): string[][] {
    return chunk(this.notableMembers, 4)
  }

  mounted () {
    this.startAnimation()

    lottie.loadAnimation({
      container: document.getElementById('schema-animation')!, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'schema.json' // the path to the animation json
    })
  }

  startAnimation () {
    gsap.fromTo('#menu', { y: -20, opacity: 0 }, {
      opacity: 1,
      delay: 2,
      duration: 1.2,
      y: 0
    })
    gsap.fromTo('#header', { y: 20, opacity: 0 }, {
      opacity: 1,
      delay: 1,
      duration: 1.2,
      y: 0
    })
    gsap.fromTo('#description', { y: -20, opacity: 0 }, {
      opacity: 1,
      delay: 1,
      duration: 1.2,
      y: 0
    })
    gsap.fromTo('#big', { x: 0, opacity: 0 }, {
      opacity: 1,
      delay: 2,
      duration: 2,
      x: 0
    })
  }

  harry (member) {
    if (member !== 'savemeharry') {
      return
    }

    gsap.fromTo('#harry', { opacity: 1 }, {
      opacity: 0,
      duration: 1.5,
      onComplete () {
        const harryEl = document.getElementById('harry')
        const innerText = '404'

        if (harryEl && harryEl.innerText !== innerText) {
          harryEl.innerText = innerText
        }
      }
    })
  }
}
