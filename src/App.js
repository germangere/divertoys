import './App.css';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Tienda' />} />
        <Route path='/categoria/:category' element={<ItemListContainer />} />
        <Route path='/articulo/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<h1>estamos perdidos...😣</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;