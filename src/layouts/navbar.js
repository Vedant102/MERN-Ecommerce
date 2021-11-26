import {Link} from 'react-router-dom'
const Navbar = () => {
  return(
    <div>
      <ul style={{ display: 'flex', justifyContent : 'space-evenly'}}>
        <li>
          <Link to="/Login"> Login</Link>
        </li>
        <li>
          <Link to="/Signup"> Signup</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Products">Products</Link>
        </li>
        <li>
          <Link to="/Orders">Orders</Link>
        </li>
        <li>
          <Link to="/Admin">Admin</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;