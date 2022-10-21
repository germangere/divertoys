import { useState } from 'react';
import { createContext } from 'react';

const cartContext = createContext();

export default function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(article, quantity) {
    if (cart.length === 0) {
      let newItem = [{ ...article, quantity }]
      setCart(newItem);
    } else {
      if (isInCart(article.id)) {
        let carrito = cart.map((el) => {
          if (el.id === article.id) {
            el.quantity += quantity;
            return el;
          } else { return el }
        });
        setCart(carrito);
      } else {
        let carrito = cart.map(el => el);
        carrito.push({ ...article, quantity });
        setCart(carrito);
      }
    }
  }

  function removeArticle(id) {
    if (isInCart(id)) {
      let carrito = cart.filter((el) => el.id !== id);
      setCart(carrito);
    } else console.error('El artículo no está agregado al carrito');
  }

  function isInCart(id) {
    let result = cart.some(el => el.id === id);
    return result;
  }

  function clearCart() {
    setCart([]);
  }

  function precioTotal() {
    let precioFinal = 0;
    cart.forEach(el => precioFinal += el.price * el.quantity);
    return precioFinal;
  }

  function totalItems() {
    let enCarrito = 0;
    cart.forEach(el => enCarrito += el.quantity);
    return enCarrito;
  }

  return (
    <cartContext.Provider value={{ cart, addToCart, isInCart, clearCart, removeArticle, precioTotal, totalItems }}>
      {props.children}
    </cartContext.Provider>
  )
}

export { cartContext };