import { AppState } from "../AppState.js";
import { coinsService } from "../services/CoinsService.js";

export class CoinsController {
  constructor() {
    // 💂‍♀️ ------------> AppState.coins
    // 💂‍♀️!!! ------------> AppState.coins++
    // 💂‍♀️!!! ------------> AppState.coins--
    // 💂‍♀️!!! ------------> AppState.coins = 10000000000
    // 💂‍♀️!!! drawCoins()
    // NOTE AppState.on is method that allows  us to 'listen' to a property in that AppState for changes, and run code whenever that property is changed
    // NOTE first argument must be a key in the AppState (today we could use coins, gachamons, activeGachamon, or myGachamons)
    // NOTE second argument is the function that we want to execute whenever that value changes.
    // NOTE whenever AppState.coins is modified by the service, drawCoins will be invoked
    AppState.on('coins', this.drawCoins)
  }

  addCoin() {
    coinsService.addCoin()
  }

  drawCoins() {
    const coinElem = document.getElementById('coin-count')
    let coinEmojis = ''
    for (let i = 0; i < AppState.coins; i++) {
      coinEmojis += '🪙'
    }
    coinElem.innerText = coinEmojis
  }
}