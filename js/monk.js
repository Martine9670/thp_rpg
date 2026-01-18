import { Personnage } from './personnage.js'

class Monk extends Personnage {
  constructor() {
    super(8, 2, 200)
  }

  heal() {
    if (this.mana < 25) {
      console.log("Not enough mana to heal")
      return
    }
    this.mana -= 25
    this.hp += 8
    if (this.hp > 8) this.hp = 8
    console.log("🧘 Monk heals for 8 HP")
  }
}

export { Monk }
