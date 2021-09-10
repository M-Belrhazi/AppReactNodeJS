import { useState } from "react";

function ItemForm({ addItem }) {
    const [item, setItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(item);
        setItem("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='What are you thinking about ?'
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                />
                <button>Add to The Wall</button>
            </form>
        </div>
    );
}

export default ItemForm;
