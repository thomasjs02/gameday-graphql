// resolvers.js
const { thomas } = require('./data');

const resolvers = {
  Query: {
    thomas: () => thomas,
  },
};

module.exports = resolvers;