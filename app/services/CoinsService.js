import { AppState } from "../AppState.js";

class CoinsService {
  addCoin() {
    console.log('Adding coin!');
    AppState.coins++
    console.log('Coins is ' + AppState.coins);
  }

}

// NOTE singleton design pattern (one coinsService will ever exist)
export const coinsService = new CoinsService()