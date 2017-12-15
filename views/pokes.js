const jbuilder = require('jbuilder');
const _poke = require('./poke');

module.exports = (pokes) => {

  const output = jbuilder.encode(json => {
    json.set('pokes', json => {
      pokes.forEach(poke => {
        json.set(poke.id, _poke(poke));
      });
    });
  });
  return output;
};
