import { Assassin } from './assassin.js'
import { Fighter } from './fighter.js'
import { Paladin } from './paladin.js'
import { Monk } from './monk.js'
import { Berzerker } from './berzerker.js'
import { Game } from './game.js'

// Instantiate characters
const Carl = new Assassin()
const Grace = new Fighter()
const Ulder = new Paladin()
const Moana = new Monk()
const Draven = new Berzerker()

const game = new Game([Carl, Grace, Ulder, Moana, Draven])

// Start the game
game.startGame()

// Optionally, watch stats anytime
game.watchStats()
