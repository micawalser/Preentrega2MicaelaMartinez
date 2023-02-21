
   import NavBar  from "./components/NavBar"; 
   import PromoApp from "./components/PromoApp";
   import Destacado from "./components/Destacado";
   import ItemListContainer from "./components/ItemListContainer";
   import ItemDetailContainer from "./components/ItemDetailContainer";
   import { BrowserRouter, Route , Routes} from "react-router-dom"; 


   function App  ()  {
     return (
   <BrowserRouter>
   <div>
 <NavBar/>
 <Destacado/>
 <Routes>

  <Route path={"/"} element={<ItemListContainer />} />
  <Route path={"/category/:id"} element={<ItemListContainer />} />
  <Route path={"/item/:id"} element={<ItemDetailContainer />} />

 </Routes>

  <PromoApp/>
   </div>
   </BrowserRouter>
     );
   }
  
export default App
