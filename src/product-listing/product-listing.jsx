import React,{useState} from 'react'
import "./css/productlist.css"
import {AiFillStar,AiOutlineHeart,AiFillHeart} from "react-icons/ai"
import {BsFillCartPlusFill,BsFillCartDashFill} from "react-icons/bs"
import Filter from '../components/filter'
import { Link } from 'react-router-dom'
import { useData } from '../context/fetchdata'
const Productlist = ({ item,dispatch }) => {

const {info:{login}}=useData()
  return (
    <>
      <div className="productlist-container">
        <div className="productlist-filterbox">
          <Filter/>
        </div>
        <div className="product-listing-space">
          <div class="ecom-contenet">
            <section className="card-normal-container ">
              {item.map((i,index) => {
                if (i.available) {
                  return (
                    
                    <div className="card-normal ecom-card-normal" key={i.id}>
                      <img src={i.image} alt="image" className="card-normal-img" />
                      <div className="card-normal-info">
                        <div className="card-head">{i.name}</div>
                        <div className="card-sub">{i.desc}</div>
                        <div className="card-normal-rating">{i.rating}<AiFillStar className="card-normal-rating-icon"/>
                         </div>
                        <div className="card-normal-price">₹{i.price}<span className="card-normal-oldprice">₹{i.oldprice}</span></div>
                        <div className="card-normal-discount">
                          save {(((i.oldprice - i.price) / i.oldprice) * 100).toFixed(2)}%
                        </div>
                        <button className="btn-fancy card-normal-btn"><Link to={{
                          pathname:`/product/:${i.id}`,
                          state:{i:i}
                        }}  className="link-nostyle" params={{i: item}}>Buy now</Link></button>
                      </div>
                      {i.cart?<BsFillCartDashFill className='card-floating-icn-cart icn-cart-clicked'
                      onClick={()=>login?dispatch({type:"remove-from-cart",payload:i}):""}
                      />:<BsFillCartPlusFill className='card-floating-icn-cart'
                      onClick={()=>login?dispatch({type:"add-to-cart",payload:i}):''}
                      />}
                      {i.wishlist?<AiFillHeart className='card-floating-icn-heart icn-heart-clicked'
                      onClick={()=>login?dispatch({type:"remove-from-wishlist",payload:i}):''}
                      />:<AiOutlineHeart className='card-floating-icn-heart'
                      onClick={()=>login?dispatch({type:"add-to-wishlist",payload:i}):''}
                      />}
                      
                    </div>
                    
                  )
                } else {
                  return(<div className="card-normal ecom-card-normal card-disable" key={i.id}>
                    <div className="card-disable-txt">Sold Out</div>
                    <img src={i.image} alt="image" className="card-normal-img" />
                      <div className="card-normal-info">
                        <div className="card-head">{i.name}</div>
                        <div className="card-sub">{i.desc}</div>
                        <div className="card-normal-rating">{i.rating}<AiFillStar className="card-normal-rating-icon"/>
                         </div>
                        <div className="card-normal-price">₹{i.price}<span className="card-normal-oldprice">₹{i.oldprice}</span></div>
                        <div className="card-normal-discount">
                          save {(((i.oldprice - i.price) / i.oldprice) * 100).toFixed(2)}%
                        </div>
                        <button className="btn-fancy card-normal-btn">Buy now</button>
                    </div>
                  </div>)

                }

              })}

            </section>

          </div>
        </div>
      </div>
    </>
  )
}

export default Productlist