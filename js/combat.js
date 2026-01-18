import { Assassin } from './assassin.js'
import { Fighter } from './fighter.js'
import { Paladin } from './paladin.js'
import { Monk } from './monk.js'
import { Berzerker } from './berzerker.js'
import { Wizard } from './wizard.js'
import { Ranger } from './ranger.js'
import { Game } from './game.js'

const classes = { Assassin, Fighter, Paladin, Monk, Berzerker, Wizard, Ranger }

const startBtn = document.getElementById("startBtn")
const select = document.getElementById("characterSelect")

startBtn.addEventListener("click", () => {
  const choice = select.value
  const playerChar = new classes[choice]()

  // Generate 4 other random characters
  const classNames = Object.keys(classes)
  const others = []
  while (others.length < 4) {
    const randClass = classNames[Math.floor(Math.random() * classNames.length)]
    const char = new classes[randClass]()
    if (char.constructor.name !== playerChar.constructor.name || others.length > 0) {
      others.push(char)
    }
  }

  const allChars = [playerChar, ...others]
  const game = new Game(allChars)

  console.clear()
  console.log(`🎮 You are playing as: ${playerChar.constructor.name}`)
  game.startGame(playerChar)
})
