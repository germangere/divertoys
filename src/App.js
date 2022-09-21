import './App.css';
import ItemListContainer from './Components/Products/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Tienda" />
    </>
  );
}

export default App;
