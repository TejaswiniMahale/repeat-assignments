
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Feeds from './component/Feeds';
import Home from './component/Home';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Posts from './component/Posts';
import RequireAuth from './hoc/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="feeds" element={<Feeds/>}>Feeds</Route>
        <Route path="login" element={<Login/>}>Login</Route>
        
        <Route path="/posts" element={<RequireAuth><Posts/></RequireAuth>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
