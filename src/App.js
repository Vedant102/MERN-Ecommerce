import Admin from "./components/Admin";
import Home from "./components/Home";
import Login from "./components/Login";
import Myorder from "./components/Myorder";
import Order from "./components/Order";
import Product from "./components/Product";
import Products from "./components/Products";
import Signup from "./components/Signup";
import Navbar from "./layouts/navbar";
import {Routes,Route} from 'react-router-dom'
import PrivateRoute from "./Routing/PrivateRoute";

const App = () =>{
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<PrivateRoute child={<Login/>}/>}/>
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/admin' element={<Admin/>} />
      </Routes> 
    </div>
  );
}
export default App;
