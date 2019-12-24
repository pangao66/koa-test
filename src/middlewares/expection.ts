import {KoaMiddlewareInterface, Middleware, HttpError, Ctx} from "routing-controllers"
import {Context} from "koa"

@Middleware({type: "before"})
export class ErrorHandlerMiddleware implements KoaMiddlewareInterface {

  public async use(@Ctx() ctx: Context, next: (err?: any) => Promise<any>): Promise<any> {
    try {
      await next()
    } catch (error) {
      if (error.errors && error.errors.length) {
        // const errors = error.errors
        // const error = errors.shift()
      }
      // console.log(error)
      // const {contexts, constraints} = error.errors
      // // 将未通过验证的字段的错误信息和状态码，以ApiException的形式抛给我们的全局异常过滤器
      // for (const key of Object.keys(constraints)) {
      //   // throw new ApiException(constraints[key], contexts[key].errorCode, HttpStatus.BAD_REQUEST);
      // }
      ctx.body = error
      return (ctx.body)
    }
  }
}
