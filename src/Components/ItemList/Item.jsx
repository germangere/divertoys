import './Item.css';
import { Link } from 'react-router-dom';

function Item(props) {
  return (
    <Link to={`/articulo/${props.id}`} >
      <div className='card'>
        <div className='cardImg'>
          <img src={props.img} alt={props.title} />
        </div>
        <div className='cardInfo'>
          <h3>{props.title}</h3>
          <h4>$ {props.price}</h4>
        </div>
      </div>
    </Link>
  )
}

export default Item;