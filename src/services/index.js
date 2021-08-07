import app from './appInstance'
import constants from './constants'
import router from './router'
import request from './request'
import backend from './backend'

const services = {
  backendService: new backend(request, constants),
}

const appInstance = app(services).use(router)

export { appInstance }