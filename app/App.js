import { router } from './router-config.js';
import { CoinsController } from './controllers/CoinsController.js';
import { GachamonsController } from './controllers/GachamonsController.js';
const USE_ROUTER = false

class App {
  CoinsController = new CoinsController()
  GachamonsController = new GachamonsController()
}

const app = new App()
// @ts-ignore
window.app = app
