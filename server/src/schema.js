const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    tracks: [Track!]
  }

  type Track {
    id: String
    title: String
    author: [Author]
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  type Author {
    name: String
    photo: String
  }
`;

module.exports = typeDefs;
