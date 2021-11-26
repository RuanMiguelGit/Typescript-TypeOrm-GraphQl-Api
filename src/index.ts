import 'reflect-metadata'
import { startServer } from "./app";

async function Main () {
   const app =await startServer()
   app.listen(3000)
    console.log('Server on port 3000')
}

Main()