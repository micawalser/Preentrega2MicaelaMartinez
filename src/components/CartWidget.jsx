import React, {useContext} from "React" ;
import carrito from "./images/carrito.svg"
import { Link } from "react-router-dom" ;
import {CartContext} from "./context/CartContext" ;

const BotonCarrito = ({total}) => {
 
return(
        <Link to = {"/cart"}  className="btn position-relative">
       
        <img src={carrito} width={"24"} alt= {"carrito"} />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          99+
        </span>
      </Link>
    )
}


const CartWidget = () => {
  const {cartTotal} = useContext(CartContext) ;
return cartTotal () > 0 ? <BotonCarrito total= {cartTotal()} /> : "" ;

}
    
export default CartWidget;