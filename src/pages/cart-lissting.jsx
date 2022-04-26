import React from 'react'
import {AiFillStar} from "react-icons/ai"
const Cartlist = ({ item, dispatch }) => {
    return (
        <>
        {item.map(item=>{
            return(
                <div className="card-sm" data-html="../saree/sarees/saree2.html">
                <img src={item.image} alt="" className="card-sm-img" />
                <div className="card-sm-info">
                    <div className="card-sm-head">{item.name}</div>
                    <div className=" addtocart-rating-txt ">{item.rating}
                        <AiFillStar className="addtocart-rating-icn" />

                    </div>
                    <span className="txt-del txt-black block">₹{item.oldprice}</span><span className="small txt-green inline">save
                    {((item.oldprice-item.price)/item.oldprice*100).toFixed(2)}%</span>
                    <div className="txt-green p2">₹{item.price}</div>
                    <div className="addtocart-btn">
                        <button className="addtocart-remove btn-sec pad-0-5" onClick={()=>dispatch({type:"remove-from-cart",payload:item})}>remove</button>
                        <button className="addtocart-buy btn pad-0-5">Buy</button>
                    </div>
                </div>
            </div>
            )
        })}
            
        </>
    )
}

export default Cartlist