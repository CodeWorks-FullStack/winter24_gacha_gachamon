import { AppState } from "../AppState.js";
import { coinsService } from "../services/CoinsService.js";

export class CoinsController {
  constructor() {
    console.log('Coins Controller is loaded!');
  }

  addCoin() {
    coinsService.addCoin()
    this.drawCoins()
  }

  drawCoins() {
    const coinElem = document.getElementById('coin-count')
    coinElem.innerText = AppState.coins.toString()
  }
}