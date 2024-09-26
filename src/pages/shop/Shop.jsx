import Marquees from "../../components/HomeComponents/Marquee/Marquee";
import MixedProducts from "../../components/HomeComponents/MixedProductsGrid/MixedProducts";
import CategoryAndSlider from "./CategoryAndSlider/CategoryAndSlider";
import ShopProducts from "./ShopProducts/ShopProducts";

export default function Shop() {
  return (
    <div>
        <CategoryAndSlider/>
        <ShopProducts/>
       <Marquees/>
       <MixedProducts/>
    </div>
  )
}
