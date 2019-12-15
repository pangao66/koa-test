import {Sequelize} from 'sequelize-typescript'
import path from 'path'
import config from '../config/config'
import User from "../models/user"
const {dbName, host, port, user, password} = config.database
export const db = new Sequelize(dbName, user, password, {
  dialect: "mysql",
  host,
  port,
  logging: true,
  timezone: '+08:00',
  define: {}
})
db.addModels([path.resolve(__dirname, '../models')])
console.log('aaa')
User.create<User>({
  nickname: 'Niko',
  email: 'pg243911007@sina.cn',
  password:'fjaofjao'
})
// Animal.create<Animal>({
//   name: 'Niko',
//   weight: 19,
// })