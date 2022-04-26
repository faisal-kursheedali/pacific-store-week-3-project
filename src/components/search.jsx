import React from 'react'
import { useData } from '../context/fetchdata'

const Search = () => {
  const {filter}=useData()
  return (
    <div className="search block">
      <input type="text" className="input-rnd" onChange={(i)=>{
        filter({type:"sort-by-search",payload:i.target.value})
      }}/>
    </div>
  )
}

export default Search