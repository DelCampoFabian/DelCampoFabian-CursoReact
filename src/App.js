import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';
import ProductoUno from "./assets/img/ProductoUno.png";
import ProductoDos from "./assets/img/productoDos.jpeg";
import ProductoTres from "./assets/img/productoTres.jpeg";
import ProductoCuatro from "./assets/img/productoCuatro.png";
import ProductoCinco from "./assets/img/productoCinco.jpeg";
import ProductoSeis from "./assets/img/productoSeis.jpeg";




function App() {
//props a pasar al ItemListContainer
  const listaProductos= [
    {id : 1,nombre: "Conservadora",precio: 3000,imagen: ProductoUno, stock:8},
    {id : 2,nombre: "Termo",precio: 3500,imagen: ProductoDos, stock:5},
    {id : 3,nombre: "Equipo de mate",precio: 8500,imagen: ProductoTres, stock:0},
    {id : 4,nombre: "Caña de pescar",precio: 12550,imagen: ProductoCuatro, stock:0},
    {id : 5,nombre: "Conservadora",precio: 6300,imagen: ProductoCinco, stock:12},
    {id : 6,nombre: "Carpa",precio: 21500,imagen: ProductoSeis, stock:10},
   ]
  
  return (
    <div>
      <NavBar />
      <ItemListContainer productos={listaProductos} />
    </div>
  );
}

export default App;
