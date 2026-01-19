// Import all character classes
import { Assassin } from './assassin.js'
import { Fighter } from './fighter.js'
import { Paladin } from './paladin.js'
import { Monk } from './monk.js'
import { Berzerker } from './berzerker.js'
import { Wizard } from './wizard.js'
import { Ranger } from './ranger.js'

// Import the Game class
import { Game } from './game.js'

// Object that maps class names to their constructors
const classes = { Assassin, Fighter, Paladin, Monk, Berzerker, Wizard, Ranger }

// Get DOM elements
const startBtn = document.getElementById("startBtn")
const select = document.getElementById("characterSelect")

// Start the game when the button is clicked
startBtn.addEventListener("click", () => {
  // Get the selected character name
  const choice = select.value

  // Create the player's character
  const playerChar = new classes[choice]()

  // Generate 4 other random characters
  const classNames = Object.keys(classes)
  const others = []

  // Keep generating characters until we have 4 opponents
  while (others.length < 4) {
    // Pick a random class name
    const randClass = classNames[Math.floor(Math.random() * classNames.length)]

    // Create a new character from that class
    const char = new classes[randClass]()

    // Avoid having only the same class as the player
    if (char.constructor.name !== playerChar.constructor.name || others.length > 0) {
      others.push(char)
    }
  }

  // Group all characters together
  const allChars = [playerChar, ...others]

  // Create a new game instance
  const game = new Game(allChars)

  // Clear the console for a clean start
  console.clear()

  // Display the chosen character
  console.log(`🎮 You are playing as: ${playerChar.constructor.name}`)

  // Start the game
  game.startGame(playerChar)
})
