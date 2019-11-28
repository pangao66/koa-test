// import {KoaMiddlewareInterface, Middleware} from "routing-controllers"
//
// @Middleware({type: "before"})
// export class MyMiddleware implements KoaMiddlewareInterface {
//
//   // use(request: any, response: any, next: (err?: any) => Promise<any>): Promise<any> {
//   //   console.log("do something before execution...")
//   //   return next().then(() => {
//   //     console.log("do something after execution")
//   //   }).catch(error => {
//   //     console.log("error handling is also here")
//   //   })
//   // }
//   use(request: any, response: any, next?: Function): any {
//     console.log("logging request ...")
//     console.log(next)
//     if (next) {
//       next()
//     }
//   }
//
// }
