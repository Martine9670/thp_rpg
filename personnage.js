class Personnage {
  constructor(hp, dmg, mana) {
    this.hp = hp
    this.dmg = dmg
    this.mana = mana
    this.status = "playing"
  }

  // Subit des dégâts et gère la mort
  takeDamage(amount) {
    if (this.status === "loser") return

    this.hp -= amount
    if (this.hp <= 0) {
      this.hp = 0
      this.status = "loser"
      console.log(`${this.constructor.name} has been eliminated!`)
    }
  }

  // Inflige des dégâts à une cible vivante
  dealDamage(victim) {
    if (this.status !== "playing") {
      console.log(`${this.constructor.name} cannot attack, eliminated.`)
      return
    }

    if (victim.status !== "playing") {
      console.log(`${victim.constructor.name} is already dead.`)
      return
    }

    victim.takeDamage(this.dmg)
    console.log(`${this.constructor.name} deals ${this.dmg} dmg to ${victim.constructor.name}.`)
    
    // Si la victime meurt, regagner 20 mana
    if (victim.status === "loser") {
      this.mana += 20
      console.log(`${this.constructor.name} gains 20 mana for the kill.`)
    }
  }
}

export { Personnage }
