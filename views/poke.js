const jbuilder = require('jbuilder');

module.exports = (poke) => {
  const output = jbuilder.encode(json => {
    json.extract(poke, 'date', 'dose', 'bleed');
  });
  return output;
};



// json.set('poke', (json) => {
//   json.extract(poke, 'date', 'dose', 'bleed');
// });
//
// json.set('bleed', (json) => {
//   json.extract(poke, 'date', 'bleed');
// });
