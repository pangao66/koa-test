import {db} from "../core/db"
import {Sequelize, Model, Table, Column, PrimaryKey, AutoIncrement, DataType} from "sequelize-typescript"
import {Col} from "sequelize/types/lib/utils"

@Table({
  tableName: 'user'
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @Column({type: DataType.STRING(64)})
  nickname: string

  @Column
  email: string

  @Column
  password: string

  @Column
  openid: {
    type: string,
    unique: true
  }
}