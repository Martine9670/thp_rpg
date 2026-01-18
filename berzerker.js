import { Personnage } from './personnage.js'

class Berzerker extends Personnage {
  constructor() {
    super(8, 4, 0)
  }

  rage() {
    this.dmg += 1
    this.hp -= 1
    if (this.hp < 0) this.hp = 0
    console.log("Berzerker uses Rage: +1 dmg, -1 hp")
  }
}

export { Berzerker }
