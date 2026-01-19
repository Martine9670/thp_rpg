// Import the parent class Personnage
import { Personnage } from './personnage.js'

// Paladin class inherits from Personnage
class Paladin extends Personnage {
  constructor() {
    // Call the constructor of Personnage with:
    // attack = 16, defense = 3, mana = 160
    super(16, 3, 160)
  }

  // Special ability: Healing Light
  healingLight(enemy) {
    // Check if the Paladin has enough mana
    if (this.mana < 40) {
      console.log("Not enough mana for Healing Light")
      return
    }

    // Consume 40 mana
    this.mana -= 40

    // Deal 4 damage to the enemy
    enemy.takeDamage(4)

    // Heal the Paladin for 5 HP
    this.hp += 5

    // Prevent HP from exceeding the maximum (16)
    if (this.hp > 16) this.hp = 16

    // Display ability result
    console.log("⚡ Healing Light deals 4 dmg and heals 5 HP")
  }
}

// Export the Paladin class
export { Paladin }
