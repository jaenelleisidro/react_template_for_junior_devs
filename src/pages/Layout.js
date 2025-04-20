import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/about_us">About Us</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };

  export default Layout;