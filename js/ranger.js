import { Personnage } from './personnage.js'

class Ranger extends Personnage {
  constructor() {
    super(9, 3, 50)
  }

  arrowStorm(enemies) {
    if (this.mana < 20) {
      console.log("Not enough mana for Arrow Storm")
      return
    }
    this.mana -= 20
    enemies.forEach(e => e.takeDamage(5))
    console.log("🏹 Ranger uses Arrow Storm: 5 dmg to all enemies")
  }
}

export { Ranger }
