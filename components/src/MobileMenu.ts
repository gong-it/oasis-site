import { Vue, Component, Emit } from 'nuxt-property-decorator'

import BscIcon from '~/assets/icons/bsc.svg'
import DiscordIcon from '~/assets/icons/discord.svg'
import TelegramIcon from '~/assets/icons/telegram.svg'
import TwitterIcon from '~/assets/icons/twitter.svg'

@Component({
  components: {
    BscIcon,
    DiscordIcon,
    TelegramIcon,
    TwitterIcon
  }
})
export default class MobileMenuComponent extends Vue {
  @Emit('close')
  closeMenu () {
    return true
  }
}
