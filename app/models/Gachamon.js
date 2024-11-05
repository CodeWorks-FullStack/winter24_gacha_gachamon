
export class Gachamon {
  constructor(data) {
    this.name = data.name
    this.rarity = data.rarity
    this.emoji = data.emoji
  }

  // NOTE getters are accessed as if they are regular properties of the class, instead of invoking a method
  // NOTE getters MUST return a value AND they can take in no arguments
  get littleCard() {
    return `
    <div class="col-md-2">
      <div onclick="app.GachamonsController.setActiveGachamon('${this.name}')" class="border border-1 border-dark p-2 ${this.rarity}" role="button">
        <div class="text-end">
          <span class="fw-bold">${this.name}</span>
        </div>
        <hr>
        <div class="text-center">
          <span class="display-1">${this.emoji}</span>
        </div>
      </div>
    </div>
    `
  }

  get bigCard() {
    return `
    <div class="col-md-6">
      <div class="border border-3 border-dark">
        <div class="text-end">
          <h1>Justin</h1>
        </div>
        <hr>
        <div class="text-center">
          <span class="active-emoji">🦃</span>
        </div>
        <div class="p-3">
          <span class="bg-success rounded-pill px-4 py-1">common</span>
          <p class="fs-1 text-center">⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </div>
    `
  }
}
