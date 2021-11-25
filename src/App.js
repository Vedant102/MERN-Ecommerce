import Admin from "./components/Admin";
import Home from "./components/Home";
import Login from "./components/Login";
import Myorder from "./components/Myorder";
import Order from "./components/Order";
import Product from "./components/Product";
import Products from "./components/Products";
import Signup from "./components/Signup";

const App = () =>{
  return (
    <div>
      <Home/>
      <Login/>
      <Signup/>
      <Products/>
      <Product/>
      <Myorder/>
      <Order/>
      <Admin/>
    </div>
  );
}
export default App;
