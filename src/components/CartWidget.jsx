import carrito from "./images/carrito.svg"
const CartWidget = () => {
    return(
        <button type="button" className="btn position-relative">
       
        <img src={carrito} width={"24"} alt= {"carrito"} />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          99+
        </span>
      </button>
    )
}

export default CartWidget;