import { AppState } from "../AppState.js";
import { gachamonsService } from "../services/GachamonsService.js";

export class GachamonsController {
  constructor() {
    // NOTE when the page loads!
    console.log('Gachamons controller is loaded!');
    AppState.on('activeGachamon', this.drawActiveGachamon)
    AppState.on('myGachamons', this.drawMyGachamons)
    this.drawGachamons()
  }

  drawGachamons() {
    const gachamons = AppState.gachamons
    let littleGachamonCards = ''
    gachamons.forEach(gachamon => littleGachamonCards += gachamon.littleCard)
    const gachamonsCatalogElem = document.getElementById('gachamon-catalog')
    gachamonsCatalogElem.innerHTML = littleGachamonCards
  }

  drawActiveGachamon() {
    const gachamon = AppState.activeGachamon
    const activeGachamonElem = document.getElementById('active-gachamon')
    activeGachamonElem.innerHTML = gachamon.bigCard
  }

  drawMyGachamons() {
    const gachamons = AppState.myGachamons
    let littleGachamonCards = ''
    gachamons.forEach(gachamon => littleGachamonCards += gachamon.littleCard)
    const gachamonsCatalogElem = document.getElementById('my-gachamons')
    gachamonsCatalogElem.innerHTML = littleGachamonCards
  }

  setActiveGachamon(name) {
    console.log('clicked on gachamon with the name of ' + name);
    gachamonsService.setActiveGachamon(name)
  }

  rollForGachamon() {
    console.log('rolling!');
    gachamonsService.getRandomGachamon()
  }
}