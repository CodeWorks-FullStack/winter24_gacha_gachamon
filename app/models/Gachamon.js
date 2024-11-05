
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
      <div class="border border-1 border-dark p-2 ${this.rarity}">
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
}
