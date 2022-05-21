import React, { useState } from 'react'
import "./css/product.css"
import { AiOutlineShop, AiFillStar } from "react-icons/ai"
import { MdVerified } from "react-icons/md"
import { useLocation } from "react-router-dom";
import {BsFillCartPlusFill,BsFillCartDashFill} from "react-icons/bs"
import { useData } from '../context/fetchdata'
const Productpg = () => {
    const {dispatch}=useData()
    const location = useLocation()
    const { i } = location.state
    const [img, setimg] = useState(i.image);
    console.log(img);

    console.log(i);
    return (
        <>
            <div className="product-pg">
                <div className="prod-page-container">
                    <div className="prod-main-part">
                        <div className="prod-img-container">
                            <div className="prod-side-img-container">
                                <img src={i.imge} alt="" className="prod-side-img" onClick={() => setimg(i.image)} />
                                <img src={i.imge1} alt="" className="prod-side-img" onClick={() => setimg(i.image1)} />
                                <img src={i.imge2} alt="" className="prod-side-img" onClick={() => setimg(i.image2)} />
                            </div>
                            <div className="prod-main-img-container">
                                <img src={img} alt="" className="prod-main-img" />
                            </div>
                        </div>
                        {i.cart?<button className="btn prod-btn btn-sec" onClick={() => dispatch({ type: "remove-from-cart", payload: i })}><BsFillCartDashFill className='prod-btn-icn' 
                        />Remove from cart
                        </button>:<button className="btn prod-btn" 
                            onClick={() => dispatch({ type: "add-to-cart", payload: i })}><BsFillCartPlusFill className='prod-btn-icn'
                        /> Add to cart
                        </button>}
                        
                        
                    </div>
                    <div className="prod-sub-part">
                        <div className="prod-price-container">
                            <p className="p2 gray prod-name">{i.desc}</p>
                            <p className=" prod-price"><span className="p1 bold">₹<span className="prod-price-now">{i.price}</span></span> <span className="txt-del p2 gray">₹<span className="prod-price-before">{i.oldprice}</span></span><span className="p3 txt-green"> {(i.oldprice - i.price) / i.oldprice * 100} off</span></p>
                            <div className="prod-rate">
                                <span className="prod-rate-txt badge-txt-rnd badge-txt-green">{i.rating}<AiFillStar className="prod-rate-icn" /></span>
                                <div className="small prod-rate-small-txt">{i.ratingCount} Ratings, {i.reviewCount} Reviews</div>
                            </div>
                            <div className="prod-special-offer"><MdVerified className="txt-green p3" />
                                <span className="p3 gray"> ₹100 discount on 1st order</span></div>
                            <div className="small prod-delivary">Free Delivery</div>
                        </div>
                        <div className="prod-size-container">
                            <div className="p1">Select Size</div>
                            <div className="prod-size-btn p2">
                                <button className="prod-sizm btn-outline btn-rnd">M</button>
                                <button className="prod-sizl btn-outline btn-rnd">L</button>
                                <button className="prod-sizxl btn-outline btn-rnd">XL</button>
                                <button className="prod-sizxxl btn-outline btn-rnd">XXL</button>
                            </div>
                        </div>
                        <div className="prod-detail-container">
                            <div className="prod-detai-head p1">Peoduct detail</div>
                            <p className="prod-detail-txt">{i.productDetail}</p>
                            <a href="./" className="prod-detail-link link-fancy">More information</a>
                        </div>
                        <div className="prod-sold-by-container">
                            <div className="p1">Sold by</div>
                            <div className="prod-shop">
                                <div className="shop-txt p1">
                                    <AiOutlineShop className="prod-shop-icn" />

                                    <span className="prod-shop-name">{i.shopName}</span>
                                </div>
                                <button className="prod-shop-btn btn-outline">View Shop</button>
                            </div>
                            <div className="prod-shop-value">
                                <div className="shop-rate">
                                    <span className="badge-txt-rnd badge-txt-green">{i.shopRating}<AiFillStar className="shop-rate-icn" />
                                    </span>
                                    <div className="shop-rate-sub-txt small gray">{i.shopRatingCount} Rating</div>
                                </div>
                                <div className="shop-fallow">
                                    <span className="shop-fallow-numbers p2">{i.shopFallowers}</span>
                                    <div className="shop-fallow-sub-txt small gray">Fallowers</div>
                                </div>
                                <div className="shop-products">
                                    <span className="shop-products-numbers p2">{i.shopProducts}</span>
                                    <div className="shop-products-sub-txt small gray">Products</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Productpg