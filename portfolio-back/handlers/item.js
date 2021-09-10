import Item from "../models/item.js";

const getItems = async (req, res) => {
    try {
        let items = await Item.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(400).json({ message: "Couldn't get 'em" });
    }
};
const getItem = async (req, res) => {
    try {
        let item = await Item.findById(req.params.id);
        res.status(200).json(item);
    } catch (err) {
        res.status(400).json({ message: `Couldn't get item ${req.params.id}` });
    }
};
const createItem = async (req, res) => {
    try {
        let item = await Item.create(req.body);
        res.status(200).json(item);
    } catch (err) {
        res.status(400).json({ message: `Couldn't create item` });
    }
};
const updateItem = async (req, res) => {
    try {
        let item = await Item.findById(req.params.id);
        item.content = req.body.content ? req.body.content : item.content;
        await item.save();
        res.status(200).json(item);
    } catch (err) {
        res.status(400).json({ message: `Couldn't update item` });
    }
};
const deleteItem = async (req, res) => {
    try {
        let item = await Item.findById(req.params.id);
        await item.delete();
        res.status(200).json(item);
    } catch (err) {
        res.status(400).json({ message: `Couldn't delete item` });
    }
};

export { getItems, getItem, createItem, updateItem, deleteItem };
