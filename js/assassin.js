import { Personnage } from './personnage.js'

class Assassin extends Personnage {
  constructor() {
    super(6, 6, 20)
    this.isInvincible = false
  }

  shadowhit(enemy) {
    if (this.mana < 20) {
      console.log("Not enough mana for Shadow Hit")
      return
    }
    this.isInvincible = true
    this.mana -= 20
    enemy.takeDamage(7)
    console.log("🗡️ Shadow Hit deals 7 dmg")

    if (enemy.hp > 0) {
      this.takeDamage(7)
      console.log("🩸 Enemy survived, Assassin loses 7 HP")
    }
  }

  takeDamage(amount) {
    if (this.isInvincible) {
      console.log("🛡️ Assassin dodges all damage")
      this.isInvincible = false
      return
    }
    super.takeDamage(amount)
  }
}

export { Assassin }
