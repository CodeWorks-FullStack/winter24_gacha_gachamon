import { AppState } from "../AppState.js";

class CoinsService {
  addCoin() {
    AppState.coins++ // triggers coins listener 💂‍♀️!!!
  }

}

// NOTE singleton design pattern (one coinsService will ever exist)
export const coinsService = new CoinsService()