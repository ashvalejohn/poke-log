const jbuilder = require('jbuilder');
const _poke = require('./poke');

module.exports = (pokes) => {

  const output = jbuilder.encode(json => {
    pokes.forEach(poke => {
      json.set(poke.id, (json) => {
        json.set('id', poke.id);
        json.set('double', poke.double);
        json.set('bleed', poke.bleed);
        json.set('date', poke.date);
        json.set('dose', poke.dose);
      });
    });
  });
  return output;
};
