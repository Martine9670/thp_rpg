// Import the parent class Personnage
import { Personnage } from './personnage.js'

// Berzerker class inherits from Personnage
class Berzerker extends Personnage {
  constructor() {
    // Call the constructor of Personnage with:
    // attack = 8, defense = 4, mana = 0
    super(8, 4, 0)
  }

  // Special ability: Rage
  rage() {
    // Increase damage by 1
    this.dmg += 1

    // Lose 1 HP when using Rage
    this.hp -= 1

    // Prevent HP from going below 0
    if (this.hp < 0) this.hp = 0

    // Display action result in the console
    console.log("🩸 Berzerker uses Rage: +1 dmg, -1 hp")
  }
}

// Export the Berzerker class
export { Berzerker }
