import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
        <div className="header"> header</div>
        <div className="navigation">
          navigation
          <ol>
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="/profile">profile</a>
            </li>
            <li>
              <a href="/about_us">about</a>
            </li>
          </ol>
        </div>
        <div className="content">
          
          <Outlet/>
        </div>
        <div className="footer">footer</div>
        
      </>
      
    )
  };

  export default Layout;