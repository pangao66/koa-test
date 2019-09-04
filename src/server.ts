import "reflect-metadata"
import {createKoaServer} from "routing-controllers"

console.log(__dirname)
const app = createKoaServer({
  routePrefix: "/api",
  controllers: [`${__dirname}/controllers/**/*{.js,.ts}`],
  middlewares: [`${__dirname}/middlewares/**/*{.js,.ts}`],
  classTransformer: true,
  // validation: true,
})
app.listen(3000)