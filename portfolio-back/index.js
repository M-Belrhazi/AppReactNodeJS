import express from "express";
import mongoose from "mongoose";
import "secret.js";
import cors from "cors";

import {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem,
} from "./handlers/item.js";
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

mongoose.connect(
    mongodbURI,
    { useNewUrlParser: true, useUnifiedTopology: true, dbName: "PortfolioDB" },
    () => console.log("Connected to DB")
);

app.get("/item", getItems);
app.post("/item", createItem);
app.get("/item/:id", getItem);
app.put("/item/:id", updateItem);
app.delete("/item/:id", deleteItem);

app.listen(port, () => console.log(`Server running on port: ${port}`));