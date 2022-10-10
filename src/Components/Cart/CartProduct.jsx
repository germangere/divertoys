import './Cart.css';
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function CartProduct(props) {
  const { title, quantity, price, id, img } = props;
  const { removeArticle } = useContext(cartContext);

  return (
    <div className='cartProduct'>
      <img src={img} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>Cantidad: {quantity}</p>
        <p>Precio por unidad: ${price}</p>
        <p>Precio total: ${quantity * price}</p>
      </div>
      <button onClick={() => removeArticle(id)} title='Eliminar producto del carrito'>
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
    </div>
  )
}

export default CartProduct