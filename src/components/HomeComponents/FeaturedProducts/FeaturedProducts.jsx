

import ProductsCards from "../ProductsCards";
import SpecialOffer from "../SpecialOffer";

export default function FeaturedProducts() {
  return (
    <div className="lg:flex justify-center items-center mx-auto  ">
        <SpecialOffer/>
        <ProductsCards/>
    </div>
  )
}
