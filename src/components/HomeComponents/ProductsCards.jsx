import ProductCard from "./ProductCard";
import { Tab, Tabs as ReactTabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

export default function ProductsCards() {
    // get featured products
    const axios = useAxios()
    const { data: featuredProducts = [] } = useQuery({
        queryKey: ['featuredProducts'],
        queryFn: async () => {
            const response = await axios.get('/api/featuredProducts')
            return response.data
        },
    })
    //    get onSale products
    const { data: onSaleProducts = [] } = useQuery({
        queryKey: ['onSaleProducts'],
        queryFn: async () => {
            const response = await axios.get('/api/onSaleProducts')
            return response.data
        },
    })
    // get topRated products
    const { data: topRatedProducts = [] } = useQuery({
        queryKey: ['topRatedProducts'],
        queryFn: async () => {
            const response = await axios.get('/api/topRatedProducts')
            return response.data
        },
    })
  




   
    return (
        <div className="container mx-auto px-4">
        
            <ReactTabs>
                <TabList >
                    <Tab >Featured</Tab>
                    <Tab>On Sell</Tab>
                    <Tab>Top Rated</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-2">
                        {featuredProducts.slice(0, 8).map((info) => <ProductCard key={info._id} info={info} />)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-2">
                        {onSaleProducts.slice(0, 8).map((info) => <ProductCard key={info._id} info={info} />)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-2">
                        {topRatedProducts.slice(0, 8).map((info) => <ProductCard key={info._id} info={info} />)}
                    </div>
                </TabPanel>
            </ReactTabs>
           
        </div>
    );
}
