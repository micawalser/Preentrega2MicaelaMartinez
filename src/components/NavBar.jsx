
import CartWidget from "./CartWidget";
import logo from "./images/logo.png";
import { Link, NavLink } from "react-router-dom";


 const  NavBar = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col">
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}><img src={logo} width={"108"  }  /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" activeclassname={"active"}  aria-current="page" to ={"/"}>Menu</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeclassname={"active"} to={"/category/conjuntos"}>Conjuntos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeclassname={"active"} to={"/category/tops"}>  Tops</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link disabled" activeclassname={"active"} >Nosotros</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
        <div className="col d-flex align-items-center justify-content-end">
        <CartWidget/>
        </div>
      </div>
    </div>

  );
}

export default NavBar; 