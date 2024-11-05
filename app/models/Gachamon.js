
export class Gachamon {
  constructor(data) {
    this.name = data.name
    this.rarity = data.rarity
    this.emoji = data.emoji
  }

  littleCard() {
    return `
    <div class="col-md-2">
      <div class="border border-1 border-dark p-2 bg-warning">
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

// new Gachamon({ name: 'herbert', rarity: 'common', emoji: '🦍' })