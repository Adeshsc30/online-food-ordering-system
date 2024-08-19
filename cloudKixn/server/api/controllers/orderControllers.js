const Payments = require("../models/Payments");

const getAllOrdersItems = async(req, res) => {
    try {
        const orders = await Payments.find({}).sort({createdAt: -1});
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// // post a new menu item
const acceptOrder = async(req, res) => {
    const orderId = req.params.id;
    // console.log(orderId)
    try {
        const updatedOrder = await Payments.findByIdAndUpdate(orderId, 
            { status:"Order Placed"},);

        if(!updatedOrder) {
            return res.status(404).json({ message:"Menu not found"})
        }

        res.status(200).json(updatedOrder)
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// // delete a menu item
// const deleteMenuItem = async(req, res) => {
//     const menuId = req.params.id;
//     // console.log(menuId)
//     try {
//         const deletedItem = await Menu.findByIdAndDelete(menuId);

//         // console.log(deletedItem);

//         if(!deletedItem){
//             return res.status(404).json({ message:"Menu not found"})
//         }
//         res.status(200).json({message: "Menu Item deleted successfully!"})
        
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // get single menu item
// const singleMenuItem = async (req, res) => {
//     const menuId = req.params.id;
//     try {
//         const menu = await Menu.findById(menuId);
//         res.status(200).json(menu)
        
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // update single menu item
// const updateMenuItem = async (req, res) => {
//     const menuId = req.params.id;
//     const { name, recipe, image, category, price} = req.body;
//     try {
//         const updatedMenu = await Menu.findByIdAndUpdate(menuId, 
//             { name, recipe, image, category, price}, 
//             {new: true, runValidator: true}
//             );

//         if(!updatedMenu) {
//             return res.status(404).json({ message:"Menu not found"})
//         }

//         res.status(200).json(updatedMenu)
        
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };



module.exports = {
    getAllOrdersItems,
    acceptOrder
    // postMenuItem, 
    // deleteMenuItem,
    // singleMenuItem,
    // updateMenuItem
}