const jbuilder = require('jbuilder');

module.exports = (pokes) => {

  const output = jbuilder.encode(json => {
    json.set('pokes', json => {
      pokes.forEach(poke => {
        json.set(poke.id, () => {
          json.extract(poke, 'id', 'date', 'dose', 'bleed', 'double');
        })
      });
    });
  });
  return output;
};
