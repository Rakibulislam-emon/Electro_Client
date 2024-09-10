import ProductCard from "./ProductCard"
import { Tab, Tabs as ReactTabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
export default function ProductsCards() {
    // create a json data for card which will contain  brand name  gadget name title price 
    const data = [
        {
            "brand": "Cameras & Photography",
            "gadget_name": "Camera C430W 4k Waterproof",
            "title": "4k Waterproof Camera",
            "price": "$200",
            "image_url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
            "tags": ["Cameras", "Photography", "Waterproof"]
        },
        {
            "brand": "Tech Gadgets",
            "gadget_name": "Smartwatch X100",
            "title": "Smartwatch X100 with Health Monitoring",
            "price": "$150",
            "image_url": "https://images.unsplash.com/photo-1506748686214e9df14f8f7b5d0b9125",
            "tags": ["Smartwatch", "Wearable", "Health"]
        },
        {
            "brand": "AudioPro",
            "gadget_name": "Bluetooth Speaker Z500",
            "title": "Portable Bluetooth Speaker Z500",
            "price": "$80",
            "image_url": "https://images.unsplash.com/photo-1517889066371-26e5f2b3a586",
            "tags": ["Audio", "Bluetooth", "Portable"]
        },
        {
            "brand": "HomeTech",
            "gadget_name": "Smart Thermostat T1",
            "title": "Smart Thermostat T1 with Wi-Fi",
            "price": "$120",
            "image_url": "https://images.unsplash.com/photo-1573574698817-dde2ac76c0cf",
            "tags": ["Home Automation", "Smart Home", "Thermostat"]
        },
        {
            "brand": "GadgetWorld",
            "gadget_name": "Wireless Earbuds E200",
            "title": "Wireless Earbuds E200 with Noise Cancellation",
            "price": "$90",
            "image_url": "https://images.unsplash.com/photo-1586110795804-57dc1b8b768a",
            "tags": ["Earbuds", "Wireless", "Noise Cancellation"]
        }
    ]

    return (
        <div className="container mx-auto px-4">
            {/* <div className="flex justify-center items-center lg:gap-x-12 lg:justify-start lg:pl-4 gap-x-8 font-bold border-b-2">
                <button className="border-b-red-600 border-b-2">Featured</button>
                <button>on sell</button>
                <button>Top sell</button>
            </div> */}
            <ReactTabs>
                <TabList>
                    <Tab>Featured</Tab>
                    <Tab>On Sell</Tab>
                    <Tab>Top Sell</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </ReactTabs>




            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {
                    data.map((info, idx) => <ProductCard key={idx} info={info} />)
                }
            </div>
        </div>
    )
}
