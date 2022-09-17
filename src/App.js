import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget';



function App() {
  
  return (
    <>
      <BrowserRouter>
          <NavBar />
          <Routes>
              <Route exact path='/' element={<ItemListContainer />} />
              <Route exact path='/productos' element={<ItemListContainer />} />
              <Route exact path='/carrito' element={<CartWidget />} />
              <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />
              <Route exact path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;



