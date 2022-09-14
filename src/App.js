import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  
  return (
    <div>
      <BrowserRouter>
          <NavBar />
          <Routes>
              <Route exact path='/' element={<ItemListContainer />} />
              <Route exact path='/productos' element={<ItemListContainer />} />
              <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />
              <Route exact path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



