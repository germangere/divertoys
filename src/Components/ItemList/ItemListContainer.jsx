import "./ItemListContainer.css";
import ItemList from "./ItemList";
import getData from "../../Services/MockData";
import { useEffect } from "react";
import { useState } from "react";

function ItemListContainer(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((data) => setData(data));
  }, [])
  return (
    <div className="itemListContainer">
      <h1>{props.greeting}</h1>
      <ItemList data={data} />
    </div>
  );
}
export default ItemListContainer;