const _poke = require('./poke');

module.exports = (pokes) => {
  const output = {};
  pokes.forEach(poke => {
    output[poke.id] = _poke(poke);
  });
  return output;
};
