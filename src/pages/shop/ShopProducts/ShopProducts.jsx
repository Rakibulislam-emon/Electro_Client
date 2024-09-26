import { useState } from "react";
import Filter from "./Filter";
import { FilterData } from "./FilterData";

export default function ShopProducts() {
    const [filterProducts, setFilterProducts] = useState([])
   
    const [allProducts, setAllProducts] = useState([])

    return (
        <div className="lg:flex">
            <Filter setFilterProducts={setFilterProducts} setAllProducts={setAllProducts} />
            <FilterData allProducts={allProducts} filterProducts={filterProducts} />
        </div>
    )
}
