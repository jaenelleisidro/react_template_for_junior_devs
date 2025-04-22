import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
<div className="page">
  <div className="header">Header</div>
  <div className="menu">
    Menu
    <ol>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="about_us">About Us</a>
      </li>
      <li>
        <a href="profile">profile</a>
      </li>
      <li>
        <a href="login">Login</a>
      </li>
    </ol>
  </div>
  <div className="main">
    <Outlet/>
  </div>
  <div className="right">Right</div>
  <div className="footer">Footer</div>
</div>

      </>
      
    )
  };

  export default Layout;