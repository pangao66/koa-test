import "reflect-metadata"
import {createKoaServer} from "routing-controllers"
import {UserController} from "./api/v1/classic"

const app = createKoaServer({
  controllers: [UserController] // we specify controllers we want to use
})
app.listen(3000)