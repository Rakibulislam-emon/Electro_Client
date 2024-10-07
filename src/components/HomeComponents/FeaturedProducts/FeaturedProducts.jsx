

import ProductsCards from "../ProductsCards";
import SpecialOffer from "../SpecialOffer";

export default function FeaturedProducts() {
  return (
    <div id="FeaturedProducts" className="lg:flex justify-center items-center mx-auto max-w-screen-2xl ">
        <SpecialOffer/>
        <ProductsCards/>
    </div>
  )
}
