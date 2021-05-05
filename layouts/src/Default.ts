import { Vue, Component } from 'nuxt-property-decorator'

import Loading from '~/components/Loading.vue'

@Component({
  components: {
    Loading
  }
})
export default class DefaultLayout extends Vue {
  loading: boolean = true
  async mounted () {
    const WebFont = require('webfontloader')
    await WebFont.load({
      google: {
        families: ['Red Hat Display:400,700,800', 'Saira:400,700,800']
      },
      active: () => {
        this.loading = false
      }
    })
  }
}
