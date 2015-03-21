/*
 * This is the mod for the LC Creationism Project. 
 * http://www.smogon.com/forums/threads/little-cup-creationism.3531563/
 *
 * ATTENTION CODERS: In addition to modifying each Pokemon's stats, abilities, and whatnot here, 
 *                   the Pokemon must also be whitelisted in data/rulesets.js under the
 *                   'littlecupcreationism' ruleset, or players won't be able to start LC
 *                   Creationism battles with them. Moveset reductions are handled in
 *                   config/formats.js by simply banning the combination of Pokemon + moves.
 */
 
exports.BattleScripts = {
gen: 6,
init: function () {
   
    // Qwilfish --> Qwilfry
    this.modData('Pokedex', 'qwilfish').baseStats = {hp:50,atk:70,def:65,spa:40,spd:40,spe:75};
   
    // Sawk --> Stryke
    this.modData('Pokedex', 'sawk').baseStats = {hp:40,atk:85,def:30,spa:10,spd:30,spe:70};
    
    // Cryogonal --> Hexaflake
    this.modData('Pokedex', 'cryogonal').baseStats = {hp:60,atk:25,def:30,spa:70,spd:90,spe:90};
    
    // Bouffalant --> Buffalad
    this.modData('Pokedex', 'bouffalant').baseStats = {hp:80,atk:85,def:65,spa:20,spd:65,spe:25};
    
    // Stunfisk --> Funfisk
    this.modData('Pokedex', 'stunfisk').baseStats = {hp:75,atk:45,def:65,spa:65,spd:70,spe:30};
   
    
    }
};
