import BestDealsCard from "./BestDealsCard";
import BestDealsTabs from "./BestDealsTabs";
// import consol from '../../../assets/gamingConsole/consal.png'
import Console360View from "./Console360View";

export default function BestDeals() {
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
        },
        {
            "brand": "GadgetWorld",
            "gadget_name": "Wireless Earbuds E200",
            "title": "Wireless Earbuds E200 with Noise Cancellation",
            "price": "$90",
            "image_url": "https://images.unsplash.com/photo-1586110795804-57dc1b8b768a",
            "tags": ["Earbuds", "Wireless", "Noise Cancellation"]
        },
        {
            "brand": "GadgetWorld",
            "gadget_name": "Wireless Earbuds E200",
            "title": "Wireless Earbuds E200 with Noise Cancellation",
            "price": "$90",
            "image_url": "https://images.unsplash.com/photo-1586110795804-57dc1b8b768a",
            "tags": ["Earbuds", "Wireless", "Noise Cancellation"]
        },
    ];

    // Loop the data and only get the first 4 items
    const first4th = data.slice(0, 4);
    const second4th = data.slice(0, 4);

    return (
        <main className="flex flex-col mb-8  lg:flex-row">
            <div className="max-w-screen-2xl mx-auto  flex-1">
                <div className="flex justify-center my-8"><BestDealsTabs /></div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-2 p-4 lg:p-0">
                    <div className="grid grid-cols-2 gap-2 lg:gap-2">
                        {/* Left product cards */}
                        {
                            first4th.map((info, idx) => <BestDealsCard key={idx} info={info} />)
                        }
                    </div>
                    <div className="flex items-center justify-center lg:col-span-1">
                        {/* Centered console image */}
                        {/* <img className="w-auto max-h-60 lg:max-h-full object-cover" src={consol} alt="Console" /> */}
                        <Console360View/>
                    </div>
                    <div className="grid grid-cols-2 gap-2 lg:gap-2">
                        {/* Right product cards */}
                        {
                            second4th.map((info, idx) => <BestDealsCard key={idx} info={info} />)
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}
