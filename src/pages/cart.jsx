import React from 'react'
import { useData } from '../context/fetchdata'
import Cartlist from './cart-lissting';
import "./css/cart.css"

const Cart = () => {
  const {state,dispatch}=useData();
  const cart=state.cart;
  let price=0;
  {cart.forEach((i)=> {
    price= price +i.price;
    
  })}
  return (
    <div className="cart-container">
      <div className="cart-sub-space">
        <div className="cart-count">No of item : <span className="cart-sub-space-data">{cart.length}</span></div>
        <div className="cart-total-price">Total price : <span className="cart-sub-space-data">₹ {price}</span></div>
        <button className="btn-fancy">Buy All</button>
      </div>
      <div className="cart-main-space">
      <section className="card-sm-container cart-card-container">
      
     {cart.length===0?(<div className="head3 txt-center">Nothing on Cart</div>):(<Cartlist item={cart} dispatch={dispatch}/>)}
        
  
</section>

      </div>
      
      
      
      
      
      
      
      
    </div>
  )
}

export default Cart