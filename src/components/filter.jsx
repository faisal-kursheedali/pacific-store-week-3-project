import React, { useState } from 'react'
import { useData } from '../context/fetchdata'
import "./css/filter.css"
import {FcClearFilters} from "react-icons/fc"
import Rating from './rating'
const Filter = () => {
  // const [rating,setRating]=useState(5);
  const { product: { sort, rating, stock, search }, filter } = useData()
  console.log(sort, rating, stock, search);
  return (


    <div className="filter">
      
      <div className="filter-head">Filter</div>
      <div className="filter-box">
        <div className="filter-item">
          <div className="filter-item-head">Rating</div>
          {console.log(rating)}
          <Rating currentRating={rating} onClick={(i) =>
            filter({ type: "sort-by-rating", payload: i + 1 })
          } />
        </div>
        <div className="filter-item">
          <div className="filter-item-head">Price</div>
          <select name="price" id="" onChange={(i) => {
            filter({ type: "sort-by-price", payload: i.target.value })
          }}>
            <option value="heightolow">heigh to low</option>
            <option value="lowtoheigh">low to heigh</option>
          </select>
        </div>
        <div className="filter-item">
          <div className="filter-item-head">Remove</div>
          <input type="checkbox" name="onstock" id=""  onChange={(i) => {
            filter({ type: "sort-by-stock" }) 
            
          }} checked={stock}/>out of stack
        </div>
        <div className="clear-filter-btn" onClick={() => {
          filter({ type: "clear-filter" })
        }}><FcClearFilters/></div>
        <div className="search block">
        <div className="filter-head">Search</div>
        <input type="text" className="input-rnd" onChange={(i) => { filter({ type: "sort-by-search", payload: i.target.value }) }} />
      </div>
      </div>
    </div>
  )
}

export default Filter