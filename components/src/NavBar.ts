import { Vue, Component } from 'nuxt-property-decorator'

import OasisLogo from '~/assets/logo.svg'
import BurgerIcon from '~/assets/burger.svg'

@Component({
  components: {
    OasisLogo,
    BurgerIcon
  }
})
export default class NavBarComponent extends Vue {
}
