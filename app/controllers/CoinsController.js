import { AppState } from "../AppState.js";
import { coinsService } from "../services/CoinsService.js";

export class CoinsController {
  constructor() {
    console.log('Coins Controller is loaded!');
    // 💂‍♀️ ------------> AppState.coins
    // 💂‍♀️!!! ------------> AppState.coins++
    // 💂‍♀️!!! ------------> AppState.coins--
    // 💂‍♀️!!! ------------> AppState.coins = 10000000000
    // 💂‍♀️!!! drawCoins()
    AppState.on('coins', this.drawCoins)
  }

  addCoin() {
    coinsService.addCoin()
  }

  drawCoins() {
    console.log('drawing!');

    const coinElem = document.getElementById('coin-count')
    let coinEmojis = ''
    for (let i = 0; i < AppState.coins; i++) {
      coinEmojis += '🪙'
    }
    coinElem.innerText = coinEmojis
  }
}