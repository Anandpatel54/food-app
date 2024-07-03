import userModel from "../models/userModel.js";

// add items to user cart

const addToCart = async (req, res) => {
  try {
    let user = await userModel.findOne({ _id: req.body.userId });
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, {cartData});
    res.json({success: true, message: "add to cart"});
  } catch (error) {
    console.log(error);
    res.json({success: false, message:"error"})
  }
};

// remove items from the cart

const removeFromCart = (req, res) => {};

//fatch User data

const getCart = (req, res) => {};

export { addToCart, removeFromCart, getCart };
