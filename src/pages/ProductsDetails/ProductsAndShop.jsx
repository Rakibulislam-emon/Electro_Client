import { useLoaderData, useLocation } from "react-router-dom";
import Marquees from "../../components/HomeComponents/Marquee/Marquee";
import MixedProducts from "../../components/HomeComponents/MixedProductsGrid/MixedProducts";
import ProductLocation from "./ProductsComponents/ProductLocation";
import ProductView from "./ProductsComponents/ProductView";
import SponsorAndLatestProducts from "./ProductsComponents/SponsorAndLatestProducts";

export default function ProductsAndShop() {



    const loaderData = useLoaderData(); // Data from loader (if applicable)
   
    const location = useLocation(); // Data passed via state
    const productFromState = location.state?.productOfSpecialOffer; // Accessing the passed state data
    // Prefer state data if available, otherwise fall back to loader data
    const product = productFromState || loaderData?.product;
    const relatedProducts = loaderData?.relatedProducts || [];
  
    return (
        <div>
            <ProductLocation />
            {product ? (
                <ProductView product={product} />
            ) : (
                <div>Loading...</div> // or a more appropriate fallback UI
            )}
            <SponsorAndLatestProducts relatedProducts={relatedProducts} />
            <Marquees />
            <MixedProducts />
        </div>
    );
}
