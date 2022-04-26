import React from 'react'
import { useData } from '../context/fetchdata'
import Productlist from '../product-listing/product-listing'
import Filteredproduct from '../context/filter'

const Offer = () => {
    const{dispatch}=useData()
    const data=Filteredproduct()
   const offer=data.filter(i=>i.offer)
  return (
    <Productlist item={offer} dispatch={dispatch}/>
  )
}

export default Offer