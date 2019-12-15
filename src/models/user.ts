import {db} from "../core/db"
import {Sequelize, Model, Table, Column, PrimaryKey, AutoIncrement, DataType} from "sequelize-typescript"

@Table({
  tableName: "user",
  timestamps: false,
  freezeTableName: true
})
export default class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number
  //
  // @Column({type: DataType.STRING(64)})
  // nickname: string

  @Column
  email: string

  @Column
  password: string

  // @Column
  // openid: {
  //   type: string,
  //   unique: true
  // }
  static async getList<T extends User>() {
    const results = await this.findAll({
      raw: true,
    })
    return results as T[]
  }
}

console.log('success')