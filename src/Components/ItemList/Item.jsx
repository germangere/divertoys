import "./Item.css"

function Item(props) {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="cardInfo">
        <h3>{props.title}</h3>
        <h4>$ {props.price}</h4>
      </div>
    </div>
  )
}

export default Item;