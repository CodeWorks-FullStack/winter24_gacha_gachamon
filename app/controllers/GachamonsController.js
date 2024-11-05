import { AppState } from "../AppState.js";
import { gachamonsService } from "../services/GachamonsService.js";

export class GachamonsController {
  constructor() {
    // NOTE when the page loads!
    AppState.on('activeGachamon', this.drawActiveGachamon)
    AppState.on('myGachamons', this.drawMyGachamons)
    this.drawGachamons()
  }

  drawGachamons() {
    const gachamons = AppState.gachamons
    let littleGachamonCards = ''
    // NOTE forEach is similar to a for loop, it is an array method that will execute a callback function for every item in an array
    //                  ⬇️ this represents a single object in the array
    //                  ⬇️            ⬇️ this is what we do with each object in the array
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

  // NOTE name is a parameter that is assigned when the function is called by the onclick in the model's littleCard HTML
  setActiveGachamon(name) {
    gachamonsService.setActiveGachamon(name)
  }

  rollForGachamon() {
    gachamonsService.getRandomGachamon()
  }
}