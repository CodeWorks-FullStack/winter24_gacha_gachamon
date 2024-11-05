import { AppState } from "../AppState.js";

class GachamonsService {
  setActiveGachamon(name) {
    const foundGachamon = AppState.gachamons.find(gachamon => gachamon.name == name)
    AppState.activeGachamon = foundGachamon // triggers activeGachamon listener 💂‍♀️!!!
  }

  getRandomGachamon() {
    if (AppState.coins < 1) {
      // NOTE hard stop
      return
    }
    AppState.coins-- // triggers coins listener 💂‍♀️!!!

    const randomIndex = Math.floor(Math.random() * AppState.gachamons.length)
    const randomGachamon = AppState.gachamons[randomIndex]

    AppState.activeGachamon = randomGachamon // triggers activeGachamon listener 💂‍♀️!!!
    AppState.myGachamons.push(randomGachamon) // triggers myGachamons listener 💂‍♀️!!!
  }
}

export const gachamonsService = new GachamonsService()