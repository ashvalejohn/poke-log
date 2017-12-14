const jbuilder = require('jbuilder');
module.exports = (user) => {
  const output = jbuilder.encode(json => {
    json.extract(user, 'id', 'email', 'name', 'dosage');
  });
  return output;
};
