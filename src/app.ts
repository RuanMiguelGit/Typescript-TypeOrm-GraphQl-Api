import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { PingResolver } from './resolvers/ping'
import  { buildSchema }  from 'type-graphql'


export async function startServer() {
    const app = express()

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PingResolver]
        }),
        context:({req, res}) => ({req, res})
    }) 
    
    server.applyMiddleware({app, path: '/graphql'})

    return app
}
