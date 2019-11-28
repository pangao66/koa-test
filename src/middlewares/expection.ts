import {KoaMiddlewareInterface, Middleware, HttpError, Ctx} from "routing-controllers"
import {Context} from "koa";

@Middleware({type: "before"})
export class ErrorHandlerMiddleware implements KoaMiddlewareInterface {

  public async use(@Ctx() ctx: Context, next: (err?: any) => Promise<any>): Promise<any> {
    try {
      await next();
    } catch (error) {
      console.log(error.errors)
      console.log(JSON.stringify(error))
      // console.log()
      // console.log(typeof (error.errors))
      ctx.body = error
      return (ctx.body)
    }
  }
}
