import React from 'react'
import {AiFillStar,AiOutlineStar} from "react-icons/ai"
const Rating = ({currentRating,onClick}) => {
    console.log(currentRating);
  return (
      <>
    {
        [...Array(5)].map((_,i)=>{
            return(<span onClick={()=>onClick(i)} key={i}>
                {console.log(i)}
                {currentRating > i?(
                    <AiFillStar/>
                ):(
                    <AiOutlineStar/>
                )}
            </span>)
        })
    }
    </>
  )
}

export default Rating