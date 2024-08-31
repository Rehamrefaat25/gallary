import { Link, Outlet } from "react-router-dom";
import './Layout.css'
function LayoutPage() {
  return (
    <>
      <nav>
        <ul>
          <li className="nav-item1">
            <Link to="/Home">gallaria.</Link>
          </li>
          <li className="nav-item2">
          <Link to="/Slideshow">START SLIDESHOW</Link>

          </li>

        </ul>
      </nav>
      <hr></hr>


      <Outlet />
    </>
  );
}

export default LayoutPage;
