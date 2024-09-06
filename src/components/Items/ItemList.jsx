// src/ItemsList.jsx

// eslint-disable-next-line react/prop-types
import Item from "./Item.jsx";

const ItemList = ({items}) => {

    return (

            <div className="grid grid-cols-4 xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
                {items.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </div>
    );
};

export default ItemList;
