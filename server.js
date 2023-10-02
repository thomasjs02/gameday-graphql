// server.js
// const { ApolloServer } = require('apollo-server');
// const typeDefs = require('./schema');
// const resolvers = require('./resolvers');
//
// const server = new ApolloServer({ typeDefs, resolvers });
//
// server.listen().then(({ url }) => {
//   console.log(`Server ready at ${url}`);
// });

const { ApolloServer } = require('apollo-server-express'); // Use apollo-server-express
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const express = require('express');
const cors = require('cors'); // Import the CORS middleware

const app = express();

// Define the CORS options to allow requests from your Heroku frontend
const corsOptions = {
  origin: 'https://gameday-view-e09d358eb46a.herokuapp.com',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies and credentials to be sent cross-origin
};

app.use(cors(corsOptions));

const server = new ApolloServer({ typeDefs, resolvers });

// Apply the Apollo Server middleware to your Express app
server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || 4000 }, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});
