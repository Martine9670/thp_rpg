class Game {
  constructor(characters) {
    this.characters = characters
    this.turnLeft = 10
    this.currentTurn = 1
  }

  skipTurn() {
    this.turnLeft -= 1
    if (this.turnLeft <= 0) {
      console.log("No turns left. Game over!")
      this.endGame()
    }
  }

  watchStats() {
    console.log("\n--- Game stats ---")
    this.characters.forEach(c =>
      console.log(`${c.constructor.name}: ${c.hp} hp, ${c.mana} mana, status: ${c.status}`)
    )
  }

  startTurn() {
    console.log(`\nIt's turn ${this.currentTurn}`)

    const playingOrder = this.characters
      .filter(c => c.status === "playing")
      .sort(() => Math.random() - 0.5)

    for (let char of playingOrder) {
      console.log(`It's time for ${char.constructor.name} to play`)

      const enemies = this.characters.filter(c => c !== char && c.status === "playing")
      if (enemies.length === 0) break

      const target = enemies[0]

      // Exemple : chaque classe spéciale peut décider ici
      if (char.constructor.name === "Assassin") char.shadowhit(target)
      else if (char.constructor.name === "Fighter") char.darkvision(target)
      else if (char.constructor.name === "Paladin") char.healingLight(target)
      else if (char.constructor.name === "Monk") char.heal()
      else if (char.constructor.name === "Berzerker") char.rage()
      else char.dealDamage(target)

      // Log après action normale si ce n’était pas spécial
      if (["Monk", "Berzerker"].includes(char.constructor.name)) {
        if (char.constructor.name !== "Monk") {
          char.dealDamage(target)
          console.log(`${char.constructor.name} attacks ${target.constructor.name}, ${target.hp} HP left`)
        }
      }
    }

    console.log("\nSurvivors:")
    this.characters
      .filter(c => c.status === "playing")
      .forEach(c => console.log(`${c.constructor.name}: ${c.hp} hp, ${c.mana} mana`))

    this.skipTurn()
    this.currentTurn += 1
  }

  endGame() {
    const survivors = this.characters.filter(c => c.status === "playing")
    survivors.forEach(c => c.status = "winner")
    console.log("\n🎉 Game Over! Winners:")
    survivors.forEach(c => console.log(`${c.constructor.name} wins!`))
  }

  startGame() {
    while (this.turnLeft > 0) {
      const alive = this.characters.filter(c => c.status === "playing")
      if (alive.length <= 1) {
        if (alive.length === 1) alive[0].status = "winner"
        this.endGame()
        break
      }
      this.startTurn()
    }
  }
}

export { Game }
