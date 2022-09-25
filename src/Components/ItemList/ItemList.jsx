import Item from "./Item";
import "./ItemList.css";

function ItemList({ data }) {
  return (
    <div className="itemList">
      {data.map((item) => {
        return (
          <Item
            key={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
          />
        )
      })}
    </div>
  )
}

export default ItemList;