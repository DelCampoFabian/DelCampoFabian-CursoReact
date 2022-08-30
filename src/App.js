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

   
  const listaProductos= [
    {id : 1,nombre: "Conservadora",precio: 3000,imagen: ProductoUno},
    {id : 2,nombre: "Termo",precio: 3500,imagen: ProductoDos},
    {id : 3,nombre: "Equipo de mate",precio: 8500,imagen: ProductoTres},
    {id : 4,nombre: "Caña de pescar",precio: 12550,imagen: ProductoCuatro},
    {id : 5,nombre: "Conservadora",precio: 6300,imagen: ProductoCinco},
    {id : 6,nombre: "Carpa",precio: 21500,imagen: ProductoSeis},
   ]
  
  return (
    <div>
      <NavBar />
      <ItemListContainer productos={listaProductos} />
    </div>
  );
}

export default App;
