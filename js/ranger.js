// Import the parent class Personnage
import { Personnage } from './personnage.js'

// Ranger class inherits from Personnage
class Ranger extends Personnage {
  constructor() {
    // Call the constructor of Personnage with:
    // attack = 9, defense = 3, mana = 50
    super(9, 3, 50)
  }

  // Special ability: Arrow Storm
  arrowStorm(enemies) {
    // Check if the Ranger has enough mana
    if (this.mana < 20) {
      console.log("Not enough mana for Arrow Storm")
      return
    }

    // Consume 20 mana
    this.mana -= 20

    // Deal 5 damage to all enemies
    enemies.forEach(e => e.takeDamage(5))

    // Display ability result
    console.log("🏹 Ranger uses Arrow Storm: 5 dmg to all enemies")
  }
}

// Export the Ranger class
export { Ranger }
