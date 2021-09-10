import { useState, useEffect } from "react";
import axios from "axios";

import ItemForm from "./ItemForm";
import ShowItems from "./ShowItems";

const style = {
    container: {
        // width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
};

function Items() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            let reponse = await axios.get("/item");
            setItems(reponse.data);
        };
        getItems();
    }, []);

    const addItem = async (item) => {
        try {
            let newItem = await axios.post("/item", { content: item });
            setItems((items) => [...items, newItem.data]);
        } catch (err) {
            console.log(err);
        }
    };

    const suppItem = async (item) => {
        try {
            let deletedItem = await axios.delete(`/item/${item._id}`);
            deletedItem = deletedItem.data;
            setItems((items) =>
                items.filter((t) => t._id !== deletedItem._id)
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div style={style.container}>
            <ItemForm addItem={addItem} />
            <ShowItems
                items={items}
                suppItem={suppItem}
            />
        </div>
    );
}

export default Items;
