import { Personnage } from './personnage.js'

class Wizard extends Personnage {
  constructor() {
    super(10, 2, 200)
  }

  fireball(enemy) {
    if (this.mana < 25) {
      console.log("Not enough mana for Fireball")
      return
    }
    this.mana -= 25
    enemy.takeDamage(7)
    console.log("🔥 Wizard casts Fireball: 7 dmg")
  }
}

export { Wizard }
