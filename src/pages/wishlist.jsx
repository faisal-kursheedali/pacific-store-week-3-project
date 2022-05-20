import React from 'react'
import { useData } from '../context/fetchdata'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { BsFillCartPlusFill, BsFillCartDashFill } from "react-icons/bs"
import './css/wishlist.css'
const Wishlist = () => {
  const { state, dispatch } = useData()
  const wishlist = state.wishlist
  
  return (
    <>
      {
        wishlist.length===0 ? (
          <div className="head3 txt-center">Nothing is on Wishlist</div>
        ) : (
          <section className="card-sm-container">
            {wishlist.map(i => {
              return (
                <div className="card-sm wishlist-card" data-html="../saree/sarees/saree1.html">
                  <img src={i.image} alt="" className="card-sm-img" />
                  <div className="card-sm-info">
                    <div className="card-sm-txt txt-bold">{i.name}</div>

                    <div className="txt-center small"><span className="txt-del">₹{i.oldprice}</span><span className="txt-green"></span></div>
                    <div className="p3 txt-center txt-green">₹{i.price}</div>
                  </div>
                  {i.cart ? <BsFillCartDashFill className='card-floating-icn-cart icn-cart-clicked'
                    onClick={() => dispatch({ type: "remove-from-cart", payload: i })}
                  /> : <BsFillCartPlusFill className='card-floating-icn-cart'
                    onClick={() => dispatch({ type: "add-to-cart", payload: i })}
                  />}
                  {i.wishlist ? <AiFillHeart className='card-floating-icn-heart icn-heart-clicked'
                    onClick={() => dispatch({ type: "remove-from-wishlist", payload: i })}
                  /> : <AiOutlineHeart className='card-floating-icn-heart'
                    onClick={() => dispatch({ type: "add-to-wishlist", payload: i })}
                  />}
                </div>

              )

            })}
          </section>

        )

      }
    </>
  )
}

export default Wishlist