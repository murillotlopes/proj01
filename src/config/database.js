require('dotenv/config')

module.exports = {
    host: process.env.HOST,
    dialect: 'mysql',
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: 'test01',
    define: {
        timestamps: true,
        underscored: true
    }
}