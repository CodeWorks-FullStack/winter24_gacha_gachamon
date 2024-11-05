import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';
import { CoinsController } from './controllers/CoinsController.js';
const USE_ROUTER = false

class App {
  CoinsController = new CoinsController()
}

const app = new App()
// @ts-ignore
window.app = app
