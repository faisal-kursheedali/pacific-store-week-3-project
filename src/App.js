import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Nav from './components/nav';
// import { useData } from "./context/fetchdata";
import {RequireAuth} from "./authentication/auth"
import {Cart,Wishlist,Home,Login,Signup,Offer,Productpg,User} from "./pages/import";
import {Men,Women} from "./product-listing/product-listing-import";
function App() {
  // const {state,dispatch}=useData()
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/cart" element={<RequireAuth> <Cart/></RequireAuth>}></Route>
        
        <Route path="/wishlist" element={<RequireAuth> <Wishlist/></RequireAuth>}></Route>
        <Route path="/men" element={<Men/>} ></Route>
        <Route path="/women" element={<Women/>}></Route>
        <Route path="/offer" element={<Offer/>}></Route>
        <Route path="/Product/:id" element={<Productpg/>}></Route>
        <Route path="/user" element={<User/>}></Route>
        {/* <Route path="/Productlist/:name" ><Productlist/></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
