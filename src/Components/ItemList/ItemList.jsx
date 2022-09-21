import { useEffect } from "react";
import { useState } from "react";
import getData from "../../Services/MockData";
import Item from "./Item";
import "./ItemList.css";

function ItemList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((data) => setData(data));
  }, [])

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