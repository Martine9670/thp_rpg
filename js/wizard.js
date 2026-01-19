// Import the parent class Personnage
import { Personnage } from './personnage.js'

// Wizard class inherits from Personnage
class Wizard extends Personnage {
  constructor() {
    // Call the constructor of Personnage with:
    // attack = 10, defense = 2, mana = 200
    super(10, 2, 200)
  }

  // Special ability: Fireball
  fireball(enemy) {
    // Check if the Wizard has enough mana
    if (this.mana < 25) {
      console.log("Not enough mana for Fireball")
      return
    }

    // Consume 25 mana
    this.mana -= 25

    // Deal 7 damage to the enemy
    enemy.takeDamage(7)

    // Display ability result
    console.log("🔥 Wizard casts Fireball: 7 dmg")
  }
}

// Export the Wizard class
export { Wizard }
