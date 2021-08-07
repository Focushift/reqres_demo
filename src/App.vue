<script>
import { h, resolveComponent } from 'vue'

export default function(services) {
  return {
    name: 'AppRoot',
    provide: {
      ...services,
    },
    render() {
      return h(resolveComponent('router-view'))
    }
  }
}
</script>