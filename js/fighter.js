import { Personnage } from './personnage.js'

class Fighter extends Personnage {
  constructor() {
    super(12, 4, 40)
    this.reduction = 0
  }

  darkvision(enemy) {
    if (this.mana < 20) {
      console.log("Not enough mana for Dark Vision")
      return
    }
    this.mana -= 20
    enemy.takeDamage(5)
    console.log("🛡️ Dark Vision deals 5 dmg")
    this.reduction = 2
  }

  takeDamage(amount) {
    let finalDamage = amount - this.reduction
    if (finalDamage < 0) finalDamage = 0
    super.takeDamage(finalDamage)
    this.reduction = 0
  }
}

export { Fighter }
