// const { database } = require('faker/lib/locales/en');
const { Sequelize, Op } = require('sequelize');
//root datacenter sa DataCenterMssql
const sequelize = new Sequelize(
  'odoo15_demo',
  'odoo15',
  'password', //
  {
    host: '172.17.8.16',//'10.0.0.193', 
    dialect: 'postgres',//'mysql' 'mssql' 'sqlite'
    port: 5432,//3306 1433
    define: {
      timestamps: false,
      // schema: "dbo",
    },

    logging: false,
    // dialectOptions: {
    //   options: {
    //     enableArithAbort: false,
    //     cryptoCredentialsDetails: {
    //       minVersion: 'TLSv1'
    //     }
    //   }
    // }
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Op;
//  Import Model 

db.productModel = require("./Product/ProductModel")(sequelize, Sequelize);

module.exports = db;
