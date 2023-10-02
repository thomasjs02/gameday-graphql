// schema.js
const { gql } = require('apollo-server');

const typeDefs = gql`
  type Thomas {
    icon: String
    title: String
    description: String
  }

  type Query {
    thomas: [Thomas]
  }
`;
module.exports = typeDefs;
