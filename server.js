const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Post {
    title: String
    author: String
  }
  type Query {
    posts: [Post]
  }
`;

const posts = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    posts: () => posts,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
