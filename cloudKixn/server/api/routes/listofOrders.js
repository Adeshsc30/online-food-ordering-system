const express = require("express");
const router = express.Router();

const orderController =require('../controllers/orderControllers')

// get all menu items 

router.get('/', orderController.getAllOrdersItems);

// post a menu item
router.get('/accept-order/:id', orderController.acceptOrder);

// delete a menu item
// router.delete('/:id', menuController.deleteMenuItem);

// get single menu item
// router.get('/:id', menuController.singleMenuItem);

// update single menu item
// router.patch('/:id', menuController.updateMenuItem)

module.exports= router;