import { Link } from "react-router-dom";

const Item = ({item}) => {
 return ( 
   <Link to={"/item/" + item.index} className="text-decoration-none text-dark">  

   
<div className="card">
  <img src={item.imagen} className="card-img-top" alt={item.nombre}/>
  <div className="card-body text-center border-0">
    <p className="card-title">{item.nombre}</p>
  </div>
</div>
</Link >
    )
}

export default Item;