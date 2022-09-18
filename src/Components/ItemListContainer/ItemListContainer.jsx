import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css"

function ItemListContainer(props) {
  return (
    <div className="itemListContainer">
      <h1>{props.greeting}</h1>
      <ItemCount initial={1} stock={6} />
    </div>

  );
}
export default ItemListContainer;