import Character from './character';
import Bowerman from './bowerman';
import Swordsman from './swordsman';
import Magician from './magician';
import Undead from './undead';
import Zombie from './zombie';
import Daemon from './daemon';

const hero = new Character('SWORDSMAN', 'Swordsman', 100, 1, 25, 25);

const heroBowerman = new Bowerman('BOWERMAN');

const heroSwordsman = new Swordsman('SWORDSMAN');

const heroMagician = new Magician('MAGICIAN');

const heroUndead = new Undead('UNDEAD');

const heroZombie = new Zombie('ZOMBIE');

const heroDaemon = new Daemon('DAEMON');

const divHeroes = document.querySelector('#heroes');

function showHeroes(_hero) {
  divHeroes.insertAdjacentHTML(
    'beforeend',
    `<div> ${JSON.stringify(_hero)} </div>`
  );
}

showHeroes(hero);
showHeroes(heroBowerman);
showHeroes(heroSwordsman);
showHeroes(heroMagician);
showHeroes(heroUndead);
showHeroes(heroZombie);
showHeroes(heroDaemon);
