import { Vue, Component } from 'nuxt-property-decorator'

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
    TwitterIcon
  }
})
export default class NavBarComponent extends Vue {
}
