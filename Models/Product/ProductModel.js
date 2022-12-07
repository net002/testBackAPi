
module.exports = (sequelize,Sequelize)=>{
    const productModel = sequelize.define('productModel',
    {
        id: {
            type: Sequelize.INTEGER,
            field: "id",
            primaryKey: true,
            autoIncrement:true
        }, 
        message: {
            type: Sequelize.INTEGER,
            field: "message_main_attachment_id"
        },
        defaultCode: {
            type: Sequelize.STRING,
            field: "default_code"
        },
        volume: {
            type: Sequelize.INTEGER,
            field: "volume",
            defaultValue: true
        }
    },{tableName:'product_product'});
    return productModel;
}