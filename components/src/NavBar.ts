import { Vue, Component } from 'nuxt-property-decorator'

import { gsap } from 'gsap'
import MobileMenu from '../MobileMenu.vue'
import OasisLogo from '~/assets/logo.svg'
import BurgerIcon from '~/assets/burger.svg'

import BscIcon from '~/assets/icons/bsc.svg'
import DiscordIcon from '~/assets/icons/discord.svg'
import TelegramIcon from '~/assets/icons/telegram.svg'
import TwitterIcon from '~/assets/icons/twitter.svg'

@Component({
  components: {
    OasisLogo,
    BurgerIcon,
    BscIcon,
    DiscordIcon,
    TelegramIcon,
    TwitterIcon,
    MobileMenu
  }
})
export default class NavBarComponent extends Vue {
  menu: boolean = false
  enterTimeline: gsap.core.Timeline | null = null
  callback = () => {}

  head () {
    return {
      bodyAttrs: {
        class: this.menu ? 'overflow-hidden' : ''
      }
    }
  }

  toggleMobileMenu () {
    this.menu = !this.menu
  }

  enterAnimation () {
    const duration = 0.5

    this.enterTimeline = gsap.timeline({ onReverseComplete: this.onReverseComplete })

    this.enterTimeline
      .fromTo('#mobile-menu', { height: 0 }, { height: '100%', duration })
      .fromTo('#mobileAbout', { y: -30 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.12 }, '<')
      .fromTo('#mobileHtb', { y: -30 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.12 }, '<')
      .fromTo('#mobileTokenomics', { y: -30 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.12 }, '<')
      .fromTo('#mobileSocials', { y: -30 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.12 }, '<')
  }

  leaveAnimation (_, done) {
    this.callback = done

    if (this.enterTimeline) {
      this.enterTimeline.reverse()
    }
  }

  onReverseComplete () {
    this.callback()
  }
}
