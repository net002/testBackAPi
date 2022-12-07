const db = require("../Models/SequelizeDB");

const { productModel, Op, Sequelize } = db;
module.exports = class ProductService {
    async getProductList() {
        try {
            const result = await productModel.findAll({
            });
            return result;
        } catch (exception) {
            
            throw new Error(exception);
        }

    }
    async createProduct(data) {
        try {
            const result = await productModel.create({
                productName: data.productName,
                productPrice: data.productPrice,
            });
            
            return result

        }
        catch (exception) {
           
            throw new Error(exception)
        }
    }
    async editProduct(data) {

        try {

            const Product = await productModel.findByPk(data.productId);
            Product.productName = data.productName;
            Product.productPrice = data.productPrice
            return Product.save();
        } catch (exception) {
            
            throw new Error(exception)
        }
    }
    async toggleStatusProduct(data) {
        try {
            const Product = await productModel.findByPk(data.productId);
            Product.visible = false;

            return Product.save();
        } catch (exception) {
            
            throw new Error(exception)
        }
    }


    async ProductListById(id) {
        try {
            const result = await productModel.findOne({
                where: {
                    productId: id
                }
            });
            return result;
        } catch (exception) {
           
            throw new Error(exception);
        }
    }
}