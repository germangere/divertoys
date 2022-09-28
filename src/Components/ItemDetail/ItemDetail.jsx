import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ItemDetail(props) {
  let { img, title, description, price, stock } = props;
  const [cart, setCart] = useState(false);

  function handleOnAdd(count) {
    console.log(`agregaste ${count} artículos al carrito`);
    let articuloAgregado = {
      title,
      price,
      count,
      total: count * price
    }
    setCart(articuloAgregado);
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
        {!cart ? <ItemCount stock={stock} onAdd={handleOnAdd} /> : <Link to='/cart'>Finalizar compra</Link>}
        {/* <ItemCount stock={stock} onAdd={handleOnAdd} /> */}
      </div>
    </div>
  )
}
export default ItemDetail;