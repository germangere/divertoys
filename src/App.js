import './App.css';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContainer from './Components/Cart/CartContainer';
import CartContextProvider from './context/cartContext';
import BuyForm from './Components/BuyConfirm/BuyForm';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Tienda' />} />
          <Route path='/categoria/:category' element={<ItemListContainer />} />
          <Route path='/articulo/:id' element={<ItemDetailContainer />} />
          <Route path='/cart/' element={<CartContainer />} />
          <Route path='/compra' element={<BuyForm />} />
          <Route path='*' element={<h1>estamos perdidos...😣</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;