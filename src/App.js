import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './components/nav';
import { useData } from "./context/fetchdata";
import {Cart,Wishlist,Home,Login,Signup,Offer,Productpg,User} from "./pages/import";
import {Men,Women,Productlist} from "./product-listing/product-listing-import";
function App() {
  const {state,dispatch}=useData()
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/login" ><Login/></Route>
        <Route path="/signup" ><Signup/></Route>
        <Route path="/cart" ><Cart/></Route>
        <Route path="/wishlist" ><Wishlist/></Route>
        <Route path="/men" ><Men/></Route>
        <Route path="/women" ><Women/></Route>
        <Route path="/offer" ><Offer/></Route>
        <Route path="/Product/:id" ><Productpg/></Route>
        <Route path="/user" ><User/></Route>
        {/* <Route path="/Productlist/:name" ><Productlist/></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
