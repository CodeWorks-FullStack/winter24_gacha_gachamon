import { coinsService } from "../services/CoinsService.js";

export class CoinsController {
  constructor() {
    console.log('Coins Controller is loaded!');
  }

  addCoin() {
    console.log('Adding coin!');
    coinsService.addCoin()
  }
}