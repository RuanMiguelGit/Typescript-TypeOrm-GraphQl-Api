import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { PingResolver } from './resolvers/ping'
import  { buildSchema }  from 'type-graphql'
import helmet from 'helmet';

export async function startServer() {
    const app = express()

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PingResolver]
        }),
        context:({req, res}) => ({req, res})
    }) 
    app.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false }));

    server.applyMiddleware({app, path: "/graphql"})

    return app
}
