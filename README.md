This is an exercise from **The Hacking Project**

⚔️ Console RPG Game 🛡️
🎮 Overview

A turn-based RPG in your console!
Five unique characters fight until only one remains or the turn limit ends. Each character has HP, Mana, Damage, and a special ability.

🧙 Characters
Character	HP	DMG	Mana	Special Ability
🗡️ Assassin	6	6	20	Shadow Hit: Deal 7 dmg + invincible next turn. Lose 7 HP if enemy survives
🛡️ Fighter	12	4	40	Dark Vision: Deal 5 dmg, reduce next incoming damage by 2
⚡ Paladin	16	3	160	Healing Light: Deal 4 dmg + heal 5 HP
🧘 Monk	8	2	200	Heal: Restore 8 HP
🩸 Berzerker	8	4	0	Rage: +1 damage permanently, lose 1 HP
🕹️ How to Play

Install Node.js (v14+).

Clone or download the project.

Run in terminal:

node combat.js


The console logs turns, attacks, damage, HP, mana, and status.

Use watchStats() anytime to see who’s alive, HP, mana, status.

⚙️ Rules

Characters start as playing.

If HP = 0 → status = loser, cannot attack or be attacked.

Killing an enemy → gain +20 mana.

Default game length: 10 turns.

Characters act in random order each turn.

Last alive characters → status = winner.

📂 Project Structure
rpg/
├─ personnage.js     # Base class
├─ assassin.js       # Assassin class
├─ fighter.js        # Fighter class
├─ paladin.js        # Paladin class
├─ monk.js           # Monk class
├─ berzerker.js      # Berzerker class
├─ game.js           # Game engine
└─ combat.js         # Start the game

🎉 Example Output
⚔️ Game Start ⚔️
Turn 1
🗡️ Assassin attacks 🛡️ Fighter: 7 dmg
🛡️ Fighter attacks 🗡️ Assassin: 5 dmg
...
🎊 Game Over! Winners:
⚡ Paladin wins!


💡 Fun fact: all actions, damage, healing, and special abilities are logged, so you can follow every move like a mini RPG story!

-----

**Author : Martine PINNA**
**Github : Martine9670**
**Discord : Martine PINNA**