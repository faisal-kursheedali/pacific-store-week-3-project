import React from 'react'
import Productlist from './product-listing'
import {useData} from "../context/fetchdata"
import Filteredproduct from '../context/filter'
const Women = () => {
const {dispatch}=useData()
let arr=[]
const data=Filteredproduct()
data.forEach((i)=>{
  if(i.gender==="f"){
    arr=[...arr,i]
  }
})
  return (
    <>
    <Productlist item={arr} dispatch={dispatch}/>
    </>
  )
}

export default Women