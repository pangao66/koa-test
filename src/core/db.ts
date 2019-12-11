import {Sequelize} from 'sequelize-typescript'

import config from '../config/config'

const {dbName, host, port, user, password} = config.database
export const db = new Sequelize(dbName, user, password, {
  dialect: "mysql",
  host,
  port,
  logging: true,
  timezone: '+08:00',
  define: {}
})
