import { useData } from "./fetchdata"


export default function Filteredproduct(){
    const {state:{product},
    product:{sort,rating,stock,search}}=useData()
    let data=product
    if(!stock){
        data=data.filter((i)=>i.available)
    }
    if(sort){
        data=data.sort((a,b)=>sort ==="lowtoheigh"?a.price-b.price:b.price-a.price)
    }
    if(rating){
        data=data.filter((i)=>i.rating>=rating)
    }
    
    if(search){
        data= data.filter((i)=> i.name.toLowerCase().includes(search.toLowerCase()))
    }
return(data)
}