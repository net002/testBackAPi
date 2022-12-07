const express = require('express');
const ProductService = require("../Services/ProductService");

const router = express.Router();
const productService = new ProductService();


router.get('/',  async (req, res) => {
    productService.getProductList().then(snap => {
        res.statusCode = 200;
        res.json(snap)
    }).catch(ex => {
        res.statusCode = 500;
        res.json(ex.message)
    })
})

router.post('/',  async (req, res) => {
    productService.createProduct(req.body).then(snap => {
        res.statusCode = 200;
        res.json(snap)
    }).catch(ex => {
        res.statusCode = 500;
        res.json(ex.message)
    })
})

router.get('/:Id',  async (req, res) => {
    productService.ProductListById(req.params.Id).then(snap => {
        res.statusCode = 200;
        res.json(snap)
    }).catch(ex => {
        res.statusCode = 500;
        res.json(ex.message)
    })
})
router.put('/',  async (req, res) => {
    productService.editProduct(req.body).then(snap => {
        res.statusCode = 200;
        res.json(snap)
    }).catch(exception => {
        res.statusCode = 500;
        res.json(exception.message);
    })
})

router.patch('/',  async (req, res) => {
    productService.toggleStatusProduct(req.body).then(snap => {
        res.json(snap);
    }).catch(exception => {
        res.statusCode = 500;
        res.json(exception)
    })
});

module.exports = router;