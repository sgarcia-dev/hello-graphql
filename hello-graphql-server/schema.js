// Imports: GraphQL
const { ApolloServer, gql } = require("apollo-server-express");
// Imports: GraphQL TypeDefs & Resolvers
const TYPEDEFS = gql`
  type Query {
    greeting: String
  }
`;

const RESOLVERS = {
  Query: {
    greeting: () => "Hello world from GraphQL!"
  }
};

// GraphQL: Schema
const SERVER = new ApolloServer({
  typeDefs: TYPEDEFS,
  resolvers: RESOLVERS,
  playground: {
    endpoint: `http://localhost:4000/graphql`,
    settings: {
      "editor.theme": "light"
    }
  }
});
// Exports
module.exports = SERVER;
