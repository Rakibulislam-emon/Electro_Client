import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import BestDealsCard from "./BestDealsCard";
import BestDealsTabs from "./BestDealsTabs";
// import consol from '../../../assets/gamingConsole/consal.png'
import Console360View from "./Console360View";

export default function BestDeals() {
    const axios = useAxios()
    // get all products
    const { data: bestDeals = [] } = useQuery({
        queryKey: ['BestDeals'],
        queryFn: async () => {
           try {
            const response = await axios.get('/api/bestDeals')
            return response.data
           } catch (error) {
             console.error("Error fetching best deals: ", error);
             return []
 
           }
        },
    }) // Loop the data and only get the first 4 items
    const first4th = bestDeals?.slice(0, 4);
    const second4th = bestDeals?.slice(4, 8);
    return (
        <main id="best-deals" className="flex flex-col mb-8  lg:flex-row bg-[#f1eded] border">
            <div className="max-w-screen-2xl mx-auto  flex-1 mb-8">
                <div className="flex justify-center my-8">
                    <BestDealsTabs />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-2 p-4 lg:p-0">
                    <div className="grid grid-cols-2 gap-2 lg:gap-2">
                        {/* Left product cards */}
                        {
                           first4th && first4th.map((info, idx) => <BestDealsCard key={idx} info={info} />)
                        }
                    </div>
                    <div className="flex items-center justify-center lg:col-span-1">
                        <Console360View />
                    </div>
                    <div className="grid grid-cols-2 gap-2 lg:gap-2">
                        {/* Right product cards */}
                        {
                           second4th && second4th.map((info, idx) => <BestDealsCard key={idx} info={info} />)
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}
