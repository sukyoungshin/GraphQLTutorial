const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    TracksForHome: [Track!]
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
    id: Int
    name: String
    photo: String
  }
`;

module.exports = typeDefs;
