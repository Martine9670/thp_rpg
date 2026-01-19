// Import the parent class Personnage
import { Personnage } from './personnage.js'

// Fighter class inherits from Personnage
class Fighter extends Personnage {
  constructor() {
    // Call the constructor of Personnage with:
    // attack = 12, defense = 4, mana = 40
    super(12, 4, 40)

    // Damage reduction applied on the next hit only
    this.reduction = 0
  }

  // Special ability: Dark Vision
  darkvision(enemy) {
    // Check if the Fighter has enough mana
    if (this.mana < 20) {
      console.log("Not enough mana for Dark Vision")
      return
    }

    // Consume 20 mana
    this.mana -= 20

    // Deal 5 damage to the enemy
    enemy.takeDamage(5)
    console.log("🛡️ Dark Vision deals 5 dmg")

    // Reduce the next incoming damage by 2
    this.reduction = 2
  }

  // Override takeDamage to apply damage reduction
  takeDamage(amount) {
    // Calculate damage after reduction
    let finalDamage = amount - this.reduction

    // Prevent negative damage
    if (finalDamage < 0) finalDamage = 0

    // Apply damage using the parent class logic
    super.takeDamage(finalDamage)

    // Reset reduction after being hit
    this.reduction = 0
  }
}

// Export the Fighter class
export { Fighter }
