import { useLocation } from "react-router-dom";
import Marquees from "../../components/HomeComponents/Marquee/Marquee";
import MixedProducts from "../../components/HomeComponents/MixedProductsGrid/MixedProducts";
import CategoryAndSlider from "./CategoryAndSlider/CategoryAndSlider";
import ShopProducts from "./ShopProducts/ShopProducts";

export default function Shop() {
  const location = useLocation()
  const searchProducts = location.state?.products || []; // Get products from navigate state
  console.log('searchProducts:', searchProducts.length)


  return (
    <>
      {searchProducts.length === 0 && <CategoryAndSlider />}
      <ShopProducts  searchProducts={searchProducts} />
      <Marquees />
      <MixedProducts />
    </>
  )
}
