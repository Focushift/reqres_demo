import app from './appInstance'
import constants from './constants'
import router from './router'
import request from './request'
import backend from './backend'
import auth from './auth'

const backendService = new backend(request, constants)
const authService = new auth(backendService, router)

const services = {
  authService,
  backendService,
}

const appInstance = app(services).use(router)

export { appInstance }