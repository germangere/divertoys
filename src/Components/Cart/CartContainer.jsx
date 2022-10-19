import './Cart.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';
import CartProduct from './CartProduct';

function CartContainer() {
  const { cart, precioTotal } = useContext(cartContext);
  return (
    <>
      <h1>Carrito</h1>
      {cart.length > 0
        ? <>
          <div className='cartContainer'>
            {cart.map((el) => (
              <CartProduct
                key={el.id}
                id={el.id}
                title={el.title}
                img={el.img}
                price={el.price}
                quantity={el.quantity}
              />
            ))}
          </div>
          <div className='total'>
            <h3>Total: $ {precioTotal()}</h3>
            <Link to='/compra'>Finalizar compra</Link>
          </div>
        </>
        : <div className='cartContainer'>
          <h2>No hay productos en el carrito</h2>
          <Link to='/'>Ir a comprar</Link>
        </div>
      }
    </>
  )
}

export default CartContainer;