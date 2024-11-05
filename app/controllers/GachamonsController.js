import { AppState } from "../AppState.js";

export class GachamonsController {
  constructor() {
    console.log('Gachamons controller is loaded!');

  }

  drawGachamons() {
    const gachamons = AppState.gachamons
    console.log('drawing!', gachamons);
    let gachamonEmojis = ''
    gachamons.forEach(gachamon => gachamonEmojis += gachamon.emoji)
    console.log('emojis!', gachamonEmojis);
    const gachamonsCatalogElem = document.getElementById('gachamon-catalog')
    gachamonsCatalogElem.innerText = gachamonEmojis
  }
}