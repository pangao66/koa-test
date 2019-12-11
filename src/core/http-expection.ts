import {HttpError} from 'routing-controllers'

export class HttpException extends HttpError {
  public errorCode: number
  public code: number
  public msg: string

  constructor(msg: string = '服务器异常', errorCode = 10000, code = 100) {
    super(400)
    this.errorCode = errorCode
    this.code = code
    this.msg = msg
  }

}
