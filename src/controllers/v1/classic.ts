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
  OnUndefined
} from "routing-controllers"
import {IsEmail, IsNotEmpty, MinLength} from 'routing-controllers/node_modules/class-validator'

export class UserNotFoundError extends HttpError {
  constructor() {
    super(500, "User not found!")
  }
}

export class User {
  @IsNotEmpty({message: '邮箱不能为空'})
  @IsEmail({}, {message: '请输入正确的邮箱'})
  email: string | undefined
  @MinLength(6, {message: '密码长度大于6字符'})
  password: string | undefined
}

@JsonController('/v1/classic')
export class UserController {

  @Get("/latest")
  getAll() {
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
  post1(@Param("id") id: number, @Body({validate: true, required: true}) user: User) {
    // console.log(body)
    // return user
  }

  @Delete("/users/:id")
  remove(@Param("id") id: number) {
    return "Removing user..."
  }

}