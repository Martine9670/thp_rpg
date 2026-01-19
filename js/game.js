// Main Game class: controls turns, actions, and game flow
class Game {
  constructor(characters) {
    // List of all characters in the game
    this.characters = characters

    // Number of turns remaining
    this.turnLeft = 10

    // Current turn number
    this.currentTurn = 1
  }

  // Decrease remaining turns and end the game if none are left
  skipTurn() {
    this.turnLeft -= 1
    if (this.turnLeft <= 0) this.endGame()
  }

  // Display current stats of all characters
  watchStats() {
    console.log("\n📊 Game stats:")
    this.characters.forEach(c => {
      console.log(
        `${c.constructor.name}: 💀 ${c.hp} | 🔮 ${c.mana} | ⚔️ ${c.dmg} | Status: ${c.status}`
      )
    })
  }

  // Play one full turn for all alive characters
  startTurn(playerChar = null) {
    console.log(`\n➡️ Turn ${this.currentTurn}`)

    // Get only characters still playing
    const alive = this.characters.filter(c => c.status === "playing")

    // Randomize turn order
    const order = alive.sort(() => Math.random() - 0.5)

    // Each character plays once during the turn
    for (let char of order) {
      // Skip dead or inactive characters
      if (char.status !== "playing") continue

      console.log(`⏱️ ${char.constructor.name}'s turn`)

      // Get all possible enemies
      let enemies = alive.filter(c => c !== char)
      if (enemies.length === 0) break

      // Player-controlled character
      if (playerChar && char === playerChar) {
        // For now, automatically attack the first enemy
        char.dealDamage(enemies[0])
      } else {
        // AI behavior:
        // Attack a killable enemy if possible, otherwise attack a random one
        let fatal = enemies.find(e => e.hp <= char.dmg)
        if (fatal) char.dealDamage(fatal)
        else {
          const randomEnemy =
            enemies[Math.floor(Math.random() * enemies.length)]
          char.dealDamage(randomEnemy)
        }
      }
    }

    // Show stats after the turn
    this.watchStats()

    // End the turn and update counters
    this.skipTurn()
    this.currentTurn += 1
  }

  // End the game and declare winners
  endGame() {
    // All remaining alive characters become winners
    const alive = this.characters.filter(c => c.status === "playing")
    alive.forEach(c => (c.status = "winner"))

    console.log("\n🏆 Game Over! Winners:")
    alive.forEach(c =>
      console.log(`🎉 ${c.constructor.name} wins!`)
    )
  }

  // Start the game loop
  startGame(playerChar = null) {
    while (this.turnLeft > 0) {
      // Check how many characters are still alive
      const alive = this.characters.filter(c => c.status === "playing")

      // Stop the game if only one (or none) is left
      if (alive.length <= 1) {
        if (alive.length === 1) alive[0].status = "winner"
        this.endGame()
        break
      }

      // Play one full turn
      this.startTurn(playerChar)
    }
  }
}

// Export the Game class
export { Game }
