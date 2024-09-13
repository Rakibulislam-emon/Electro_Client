import HighlightProducts from "../../components/highlightProducts/HighlightProducts";
// import AllRightReserved from "../../components/HomeComponents/AllRightReserved/AllRightReserved";
import BestDeals from "../../components/HomeComponents/BestDeals/BestDeals";
import BestSeller from "../../components/HomeComponents/BestSellers/BestSeller";
import FeaturedProducts from "../../components/HomeComponents/FeaturedProducts/FeaturedProducts";
import Marquees from "../../components/HomeComponents/Marquee/Marquee";
import MixedProducts from "../../components/HomeComponents/MixedProductsGrid/MixedProducts";
import RecentlyAdded from "../../components/HomeComponents/RecentlyAdded/RecentlyAdded";
import ShopAndSaveBanner from "../../components/HomeComponents/ShopAndSave/ShopAndSaveBanner";
import AllDepartments from "../../components/miliComponents/AllDepartments";
import Banner from "./Banner";

export default function Home() {
  return (
    <div>
      <AllDepartments/>
        <Banner/>
        <HighlightProducts/>
        <FeaturedProducts/>
        <BestDeals/>
        <BestSeller/>
        <ShopAndSaveBanner/>
        <RecentlyAdded/>
        <Marquees/>
        <MixedProducts/>
    </div>
  )
}
