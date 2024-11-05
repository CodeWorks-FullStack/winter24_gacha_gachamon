import { AppState } from "../AppState.js";

class GachamonsService {
  setActiveGachamon(name) {
    const foundGachamon = AppState.gachamons.find(gachamon => gachamon.name == name)
    AppState.activeGachamon = foundGachamon
    console.log('setting active gachamon', AppState.activeGachamon);
  }

  getRandomGachamon() {
    if (AppState.coins < 1) {
      // NOTE hard stop
      return
    }
    AppState.coins--
    const randomIndex = Math.floor(Math.random() * AppState.gachamons.length)
    const randomGachamon = AppState.gachamons[randomIndex]
    console.log('random gachamon!', randomGachamon);
    AppState.activeGachamon = randomGachamon
  }
}

export const gachamonsService = new GachamonsService()