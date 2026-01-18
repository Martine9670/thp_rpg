class Game {
  constructor(characters) {
    this.characters = characters
    this.turnLeft = 10
    this.currentTurn = 1
  }

  skipTurn() {
    this.turnLeft -= 1
    if (this.turnLeft <= 0) this.endGame()
  }

  watchStats() {
    console.log("\n📊 Game stats:")
    this.characters.forEach(c => {
      console.log(`${c.constructor.name}: 💀 ${c.hp} | 🔮 ${c.mana} | ⚔️ ${c.dmg} | Status: ${c.status}`)
    })
  }

  startTurn(playerChar = null) {
    console.log(`\n➡️ Turn ${this.currentTurn}`)

    const alive = this.characters.filter(c => c.status === "playing")
    const order = alive.sort(() => Math.random() - 0.5)

    for (let char of order) {
      if (char.status !== "playing") continue
      console.log(`⏱️ ${char.constructor.name}'s turn`)

      let enemies = alive.filter(c => c !== char)
      if (enemies.length === 0) break

      // Player control
      if (playerChar && char === playerChar) {
        // For demo, we auto-attack first enemy
        char.dealDamage(enemies[0])
      } else {
        // AI: fatal attack first, else random
        let fatal = enemies.find(e => e.hp <= char.dmg)
        if (fatal) char.dealDamage(fatal)
        else char.dealDamage(enemies[Math.floor(Math.random() * enemies.length)])
      }
    }

    this.watchStats()
    this.skipTurn()
    this.currentTurn += 1
  }

  endGame() {
    const alive = this.characters.filter(c => c.status === "playing")
    alive.forEach(c => c.status = "winner")
    console.log("\n🏆 Game Over! Winners:")
    alive.forEach(c => console.log(`🎉 ${c.constructor.name} wins!`))
  }

  startGame(playerChar = null) {
    while (this.turnLeft > 0) {
      const alive = this.characters.filter(c => c.status === "playing")
      if (alive.length <= 1) {
        if (alive.length === 1) alive[0].status = "winner"
        this.endGame()
        break
      }
      this.startTurn(playerChar)
    }
  }
}

export { Game }
