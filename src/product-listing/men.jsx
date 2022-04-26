import React from 'react'
import Productlist from './product-listing'
import {useData} from "../context/fetchdata"
import Filteredproduct from '../context/filter'
const Men = () => {
const {dispatch}=useData()
let arr=[]
const data=Filteredproduct()
data.forEach((i)=>{
  if(i.gender==="m"){
    arr=[...arr,i]
  }
})
  return (
    <>
    <Productlist item={arr} dispatch={dispatch}/>
    {console.log(data.cart)}
    </>
  )
}

export default Men