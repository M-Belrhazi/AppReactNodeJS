import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    content: String
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
