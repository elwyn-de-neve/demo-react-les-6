import { Link } from "react-router-dom";

function Navbar({ setAuth, auth }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/products/1">Sok 1</Link>
        </li>
        <li>
          <Link to="/products/2">Sok 2</Link>
        </li>
        <li>
          <Link to="/products/3">Sok 3</Link>
        </li>
        {auth && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}
        <button onClick={() => setAuth((prev) => !prev)}>Login Toggle</button>
      </ul>
    </nav>
  );
}

export default Navbar;
