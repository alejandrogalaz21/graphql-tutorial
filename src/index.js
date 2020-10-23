import { ApolloServer } from 'apollo-server'
import connection from './db/connection'

import { typeDefs } from './graphql/shcema'
import { resolvers } from './graphql/resolvers'

// mongoDB connection
connection()

// Server
const server = new ApolloServer({ typeDefs, resolvers })
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
