import React, { useContext, createContext, useEffect, useReducer } from 'react'
import axios from 'axios';
import Reducer from './reducer';
import filterReducer from './filter-reducer';
import Login from './login-reducer';
export const Product = createContext(null);


const Data = ({children}) => {
    const  [state, dispatch] = useReducer(Reducer,{
        product:[],
        cart:[],
        wishlist:[]
    });
    const  [info, loginHandler] = useReducer(Login,{
        login:false,
        usern:"",
        password:""
    });
    const  [product,filter] = useReducer(filterReducer,{
        sort:false,
        rating:0,
        stock:false,
        search:""
    });
    
    useEffect(()=>{async function datafetcher() {
        const response = await axios.get('/api/products');
        const product =  response.data.products;
        dispatch({type:"add-products",payload:product})
    }datafetcher()}, [])
    console.log(state);
    return (
        <Product.Provider value={{state,dispatch,product,filter,info,loginHandler}}>
            {children}
        </Product.Provider>
    )
}
export const useData =()=>useContext(Product);
export default Data