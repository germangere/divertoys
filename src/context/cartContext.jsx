import { useState } from "react";
import { createContext } from "react";

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
    if (cart.length === 0) console.log('El carrito está vacío, nada para quitar');
    if (isInCart(id)) {
      let carrito = cart.map((el) => el.id !== id);
      setCart(carrito);
    } else console.log('El artículo no está agragado al carrito');
  }

  function isInCart(id) {
    let result = cart.some(el => el.id === id);
    return result;
  }

  function clearCart() {
    setCart([]);
  }


  return (
    <cartContext.Provider value={{ cart, addToCart, isInCart, clearCart, removeArticle }}>
      {props.children}
    </cartContext.Provider>
  )

}

export { cartContext };