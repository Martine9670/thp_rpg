// Base class for all characters in the game
class Personnage {
  constructor(hp, dmg, mana) {
    // Character's health points
    this.hp = hp

    // Character's base damage
    this.dmg = dmg

    // Character's mana points
    this.mana = mana

    // Current status: playing, loser, or winner
    this.status = "playing"
  }

  // Apply damage to the character
  takeDamage(amount) {
    // Do nothing if the character is already defeated
    if (this.status === "loser") return

    // Reduce HP by the damage amount
    this.hp -= amount

    // Check if the character is eliminated
    if (this.hp <= 0) {
      this.hp = 0
      this.status = "loser"
      console.log(`💀 ${this.constructor.name} has been eliminated!`)
    }
  }

  // Deal damage to another character
  dealDamage(victim) {
    // Only active characters can attack
    if (this.status !== "playing") return

    // Cannot attack a defeated character
    if (victim.status !== "playing") return

    // Apply damage to the victim
    victim.takeDamage(this.dmg)
    console.log(
      `⚔️ ${this.constructor.name} deals ${this.dmg} dmg to ${victim.constructor.name}`
    )

    // Gain mana if the victim is defeated
    if (victim.status === "loser") {
      this.mana += 20
      console.log(`✨ ${this.constructor.name} gains 20 mana for the kill`)
    }
  }
}

// Export the Personnage class
export { Personnage }
