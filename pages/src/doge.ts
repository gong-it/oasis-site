import { Vue, Component } from 'vue-property-decorator'

@Component
export default class DogePage extends Vue {
  head () {
    return {
      bodyAttrs: {
        class: 'doge'
      }
    }
  }
}
