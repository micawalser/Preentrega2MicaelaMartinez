import ItemCount from "./ItemCount" ;

const ItemDetail = ({item}) => {

   return (
<div className="container my-5">
    <div className="row">
                <div className="col d-flex align-items-center justify-content-end">
                    <img src={item.imagen} alt={item.nombre} width= {"250"} />
                </div>
                    <div className="col d-flex align-items-center ">
                          <div>
                            <h1> {item.nombre}</h1>
                            <h5><b> ${item.precio}</b></h5>
                            <p> {item.descripcion}</p>
                              <ItemCount stock={item.stock} />
                            </div>  
                    </div>
    </div>
</div>

    )
}

export default ItemDetail ;