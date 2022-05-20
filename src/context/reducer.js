// import { useData } from "./fetchdata";

export default function reducer(state, action) {

    switch (action.type) {
        case ("add-products"): {
            return {
                ...state,
                product: action.payload
            }
        }
        case ("add-to-cart"): {
            const newArr = state.product;
            newArr.forEach(itm => {
                if (itm.id === action.payload.id) {
                    itm.cart = true;
                }
            });
            return {
                ...state,
                product: newArr,
                cart: [...state.cart, action.payload]
            }
        }
        case ("remove-from-cart"): {
            const newArr = state.product;
            newArr.forEach(itm => {
                if (itm.id === action.payload.id) {
                    itm.cart = false;
                }
            });
            return {
                ...state,
                product: newArr,
                cart: state.cart.filter(i => i.id !== action.payload.id)
            }
        }
        case ("add-to-wishlist"): {
            const newArr = state.product;
            newArr.forEach(itm => {
                if (itm.id === action.payload.id) {
                    itm.wishlist = true;
                }
            });
            return {
                ...state,
                product: newArr,
                wishlist: [...state.wishlist, action.payload]
            }
        }
        case ("remove-from-wishlist"): {
            const newArr = state.product;
            newArr.forEach(itm => {
                if (itm.id === action.payload.id) {
                    itm.wishlist = false;
                }
            });
            return {
                ...state,
                product: newArr,
                wishlist: state.wishlist.filter(i => i.id !== action.payload.id)
            }
        }
        case ("logout"): {
            const newProd = state.product
            newProd.forEach((i) => {
                if (i.cart === true || i.wishlist === true) {
                    i.cart = false;
                    i.wishlist = false;
                    return i
                }
                return i
            })
            return {
                ...state,
                product: newProd,
                cart: [],
                wishlist: []
            }
        }
        default: {
            return ({
                product: [],
                cart: [],
                wishlist: []
            })
        }
    }
}