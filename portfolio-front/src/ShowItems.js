const style = {
    container: {
        width: "100%",
    },
    li: {
        display: "flex",
        justifyContent: "space-between",
    },
};

function ShowItems({ items, suppItem }) {
    return (
        <div style={style.container}>
            <ul>
                {items.map((item) => (
                    <li key={item._id} style={style.li}>
                        <span>
                            {item.content}
                        </span>
                        <button onClick={() => suppItem(item)}>🗑</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShowItems;
