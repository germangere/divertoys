import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';

function ItemDetail(props) {
  let { id, img, title, description, price, stock } = props;

  const { addToCart, isInCart } = useContext(cartContext);

  function handleOnAdd(count) {
    addToCart(props, count);
  }

  return (
    <div className='itemDetail'>
      <div className='detailImg'>
        <img src={img} alt={title} />
      </div>
      <div className='detailInfo'>
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>$ {price}</h4>
        {isInCart(id) ? <Link to='/cart'>Ir al carrito</Link> : <ItemCount stock={stock} onAdd={handleOnAdd} />}
      </div>
    </div>
  )
}
export default ItemDetail;