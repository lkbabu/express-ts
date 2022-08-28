import { Sequelize } from 'sequelize-typescript'

const sequelize = new Sequelize({
  database: process.env.Db_Name,
  dialect: 'postgres',
  username: process.env.Db_Name,
  password: process.env.Db_pass,
  models: [__dirname + '/models']
})


export default sequelize