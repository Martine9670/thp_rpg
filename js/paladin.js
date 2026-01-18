import { Personnage } from './personnage.js'

class Paladin extends Personnage {
  constructor() {
    super(16, 3, 160)
  }

  healingLight(enemy) {
    if (this.mana < 40) {
      console.log("Not enough mana for Healing Light")
      return
    }
    this.mana -= 40
    enemy.takeDamage(4)
    this.hp += 5
    if (this.hp > 16) this.hp = 16
    console.log("⚡ Healing Light deals 4 dmg and heals 5 HP")
  }
}

export { Paladin }
