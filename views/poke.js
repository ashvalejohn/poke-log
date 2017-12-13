const jbuilder = require('jbuilder');

module.exports = (poke) => {
  const output = jbuilder.encode(json => {
    json.extract(poke, 'id', 'date', 'dose', 'bleed');
  });
  return output;
};
