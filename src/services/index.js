import appInstance from './appInstance'
import router from './router'

appInstance.use(router)

export { appInstance, router }
