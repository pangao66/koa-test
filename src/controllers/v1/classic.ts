import {
  JsonController,
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  QueryParam,
  HttpError,
  OnUndefined,
  Req,
  Res,
  Ctx
} from "routing-controllers"
import {IsEmail, IsNotEmpty, MinLength, validate} from 'routing-controllers/node_modules/class-validator'
import Koa from 'koa'

export class UserNotFoundError extends HttpError {
  constructor() {
    super(500, "User not found!")
  }
}

export class User {
  @IsNotEmpty({message: '邮箱不能为空'})
  @IsEmail({}, {message: '请输入正确的邮箱'})
  email!: string
  @MinLength(6, {message: '密码长度大于6字符'})
  password!: string
}

@JsonController('/v1/classic')
export class UserController {

  @Get("/latest")
  getAll(@Ctx() ctx: Koa.Context) {
    return "This action returns all users"
  }

  @Get("/users/")
  getOne(@QueryParam("limit") limit: number) {
    return "This action returns user #" + limit
  }

  @Post("/users")
  post(@Body() user: any) {
    return "Saving user..."
  }

  @Post("/users/:id")
  @OnUndefined(UserNotFoundError)
  post1(@Param("id") id: number, @Body({validate: true}) user: User) {
    // console.log(body)
    // console.log(user)
    return user
  }

  @Delete("/users/:id")
  remove(@Param("id") id: number) {
    return "Removing user..."
  }

}
