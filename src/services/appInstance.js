import { createApp } from 'vue'
import App from '../App.vue'

export default function(services) {
  return createApp(App(services))
}
