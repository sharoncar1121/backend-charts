const {Sequelize} = require ('sequelize')

const sequelize = new Sequelize (
    'DWII',
    'root',
    'paramore1.',
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
    }
)

sequelize.authenticate()
.then(() => console.log('Conectado a la base de dados'))
.catch((err) => console.log('Error al conectar a la base de dados:'+ err))

module.exports= sequelize