// Import the parent class Personnage
import { Personnage } from './personnage.js'

// Monk class inherits from Personnage
class Monk extends Personnage {
  constructor() {
    // Call the constructor of Personnage with:
    // attack = 8, defense = 2, mana = 200
    super(8, 2, 200)
  }

  // Special ability: Heal
  heal() {
    // Check if the Monk has enough mana
    if (this.mana < 25) {
      console.log("Not enough mana to heal")
      return
    }

    // Consume 25 mana
    this.mana -= 25

    // Restore 8 HP
    this.hp += 8

    // Prevent HP from exceeding the maximum (8)
    if (this.hp > 8) this.hp = 8

    // Display healing result
    console.log("🧘 Monk heals for 8 HP")
  }
}

// Export the Monk class
export { Monk }
