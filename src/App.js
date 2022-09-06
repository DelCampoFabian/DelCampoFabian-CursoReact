import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';





function App() {
//props a pasar al ItemListContainer
 
  
  return (
    <div>
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
