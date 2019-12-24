import "reflect-metadata"
import Koa from 'koa'
// import './core/db'
import {useKoaServer} from "routing-controllers"

import './core/init'
const app = new Koa()
useKoaServer(app, {
  routePrefix: "/api",
  controllers: [`${__dirname}/controllers/**/*{.js,.ts}`],
  middlewares: [`${__dirname}/middlewares/**/*{.js,.ts}`],
  classTransformer: true,
  defaultErrorHandler: false,
  validation: {
    validationError: {
      target: false,
      value: false
    },
  }
})
app.listen(3000)
