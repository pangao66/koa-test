import "reflect-metadata"
import Koa from 'koa'

const app = new Koa()
import {useKoaServer} from "routing-controllers"

useKoaServer(app, {
  routePrefix: "/api",
  controllers: [`${__dirname}/controllers/**/*{.js,.ts}`],
  middlewares: [`${__dirname}/middlewares/**/*{.js,.ts}`],
  classTransformer: true,
  validation: {
    validationError: {
      target: false,
      value: false
    },
  }
})
app.listen(3000)
