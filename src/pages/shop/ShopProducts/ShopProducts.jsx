import { useState } from "react";
import Filter from "./Filter";
import { FilterData } from "./FilterData";

// eslint-disable-next-line react/prop-types
export default function ShopProducts({searchProducts}) {


   
    const [filterProducts, setFilterProducts] = useState([])
    const [allProducts, setAllProducts] = useState([])
 
    return (
   <> 
       <div className="lg:flex">
            <Filter setFilterProducts={setFilterProducts} setAllProducts={setAllProducts} />
            <FilterData allProducts={allProducts} filterProducts={filterProducts}  searchProducts={searchProducts}/>
        </div>
   </>
    )
}
