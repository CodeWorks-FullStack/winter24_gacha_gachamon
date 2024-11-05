import { AppState } from "../AppState.js";

export class GachamonsController {
  constructor() {
    console.log('Gachamons controller is loaded!');

  }

  drawGachamons() {
    const gachamons = AppState.gachamons
    console.log('drawing!', gachamons);
    let littleGachamonCards = ''
    gachamons.forEach(gachamon => littleGachamonCards += gachamon.littleCard())
    console.log('emojis!', littleGachamonCards);
    const gachamonsCatalogElem = document.getElementById('gachamon-catalog')
    gachamonsCatalogElem.innerHTML = littleGachamonCards
  }
}