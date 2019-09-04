import {Middleware, KoaMiddlewareInterface} from "routing-controllers"

@Middleware({type: "after"})
export class CustomErrorHandler implements KoaMiddlewareInterface {

  error(error: any, request: any, response: any, next: (err: any) => any) {
    console.log("do something...")
    next(() => {
    })
  }

}