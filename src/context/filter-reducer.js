export default function filterReducer(product, action) {
    switch (action.type) {
        case ("sort-by-price"): {
            return ({
                ...product,
                sort: action.payload
            })
        }
        case ("sort-by-rating"): {
            return ({
                ...product,
                rating: action.payload
            })
        }
        case ("sort-by-stock"): {
            return ({
                ...product,
                stock: !product.stock
            })
        }
        case ("sort-by-search"): {
            return ({
                ...product,
                search: action.payload
            })
        }
        case ("clear-filter"): {
            return ({
                sort: false,
                rating: 0,
                stock: false,
                search: ""
            })
        }
        default: {
            return({
                sort: false,
                rating: 0,
                stock: false,
                search: ""
            })
        }
    }
}