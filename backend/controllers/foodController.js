import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food item

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
    description: req.body.description,
  });
  try{
    await food.save()
    res.json({success: true, message: "food added"})
  } catch (error) {
    res.json({success: false, message: "error"})
  }
};

export { addFood };
