class Personnage {
  constructor(hp, dmg, mana) {
    this.hp = hp
    this.dmg = dmg
    this.mana = mana
    this.status = "playing"
  }

  takeDamage(amount) {
    if (this.status === "loser") return

    this.hp -= amount
    if (this.hp <= 0) {
      this.hp = 0
      this.status = "loser"
      console.log(`💀 ${this.constructor.name} has been eliminated!`)
    }
  }

  dealDamage(victim) {
    if (this.status !== "playing") return
    if (victim.status !== "playing") return

    victim.takeDamage(this.dmg)
    console.log(`⚔️ ${this.constructor.name} deals ${this.dmg} dmg to ${victim.constructor.name}`)

    if (victim.status === "loser") {
      this.mana += 20
      console.log(`✨ ${this.constructor.name} gains 20 mana for the kill`)
    }
  }
}

export { Personnage }