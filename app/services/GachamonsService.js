import { AppState } from "../AppState.js";

class GachamonsService {
  setActiveGachamon(name) {
    const foundGachamon = AppState.gachamons.find(gachamon => gachamon.name == name)
    AppState.activeGachamon = foundGachamon
    console.log('setting active gachamon', AppState.activeGachamon);
  }
}

export const gachamonsService = new GachamonsService()