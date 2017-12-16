const bleeds = (pokes) => {
  const output = {};
  pokes.forEach(poke => {
    const bleed = poke.bleed;
    if (bleed in output) {
      output[bleed] += 1;
    } else {
      output[bleed] = 1;
    }
  });
  return output;
};

module.exports = bleeds;
