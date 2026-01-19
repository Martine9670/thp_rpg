// Import the parent class Personnage
import { Personnage } from './personnage.js'

// Assassin class inherits from Personnage
class Assassin extends Personnage {
  constructor() {
    // Call the constructor of Personnage with:
    // attack = 6, defense = 6, mana = 20
    super(6, 6, 20)

    // Indicates if the Assassin is invincible for one turn
    this.isInvincible = false
  }

  // Special attack: Shadow Hit
  shadowhit(enemy) {
    // Check if the Assassin has enough mana
    if (this.mana < 20) {
      console.log("Not enough mana for Shadow Hit")
      return
    }

    // Assassin becomes invincible for the next hit
    this.isInvincible = true

    // Consume 20 mana
    this.mana -= 20

    // Deal 7 damage to the enemy
    enemy.takeDamage(7)
    console.log("🗡️ Shadow Hit deals 7 dmg")

    // If the enemy is still alive, Assassin takes counter damage
    if (enemy.hp > 0) {
      this.takeDamage(7)
      console.log("🩸 Enemy survived, Assassin loses 7 HP")
    }
  }

  // Override takeDamage to handle invincibility
  takeDamage(amount) {
    // If Assassin is invincible, ignore damage
    if (this.isInvincible) {
      console.log("🛡️ Assassin dodges all damage")
      this.isInvincible = false // Invincibility lasts only one hit
      return
    }

    // Otherwise, use the normal damage logic from Personnage
    super.takeDamage(amount)
  }
}

// Export the Assassin class
export { Assassin }

