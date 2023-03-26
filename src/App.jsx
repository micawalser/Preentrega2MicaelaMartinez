import React from "react";
   import NavBar  from "./components/NavBar"; 
   import PromoApp from "./components/PromoApp";
   import Destacado from "./components/Destacado";
   import ItemListContainer from "./components/ItemListContainer";
   import ItemDetailContainer from "./components/ItemDetailContainer";
   import { BrowserRouter, Route , Routes} from "react-router-dom"; 
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";


   function App  ()  {
     return (
    < CartContextProvider>
   <BrowserRouter>
   <div>
 <NavBar/>
 <Destacado/>
 <Routes>

  <Route path={"/"} element={<ItemListContainer />} />
  <Route path={"/category/:id"} element={<ItemListContainer />} />
  <Route path={"/item/:id"} element={<ItemDetailContainer />} />
  <Route path={"/cart"} element={<Cart />} />

 </Routes>

  <PromoApp/>
   </div>
   </BrowserRouter>
   </CartContextProvider>
     );
   }
  
export default App
