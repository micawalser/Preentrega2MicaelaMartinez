import xodo from "./images/xodo.png"; 

const PromoApp = ()  => {
    return (
<div className="container fluid ">
   
  <div className="container my-3 bg-black">
     <div className="row">
        <div className="col md-6">
            <div className="row">
                                    <div className="col md-3">
                                    <img src={xodo} width={"105"} alt= {"logoxodo"} />
                                    </div>
                                    
                                <div className="col md-9 d-flex aligns-item-center">
                                    <div >
                                        <h2 className="text-light"> Descargate nuestra app</h2>
                                        <p className="text-light">No te pierdas nuestras novedades</p>
                                        </div>
                                        </div>
                               
        </div>s
             </div>
     
        <div className="col-md-6 d-flex  aligns-item-center justify-content-end">
<button > Descargar ahora</button>
        </div>
    </div> 
     </div> 
 
</div>
    )
}

export default PromoApp; 