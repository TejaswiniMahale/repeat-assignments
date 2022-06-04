
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom"
import About from './components/About';
import Product from './components/Product';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Product/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
