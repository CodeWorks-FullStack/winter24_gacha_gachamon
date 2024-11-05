class CoinsService {
  addCoin() {
    console.log('Adding coin!');
  }

}

// NOTE singleton design pattern (one coinsService will ever exist)
export const coinsService = new CoinsService()