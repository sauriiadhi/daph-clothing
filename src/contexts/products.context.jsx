import { createContext, useState } from "react";
import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
    product:[],
    // setProduct
})

export const ProductsProvider = ({children}) =>{
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products};
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
