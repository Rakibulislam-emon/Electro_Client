import { useQuery } from '@tanstack/react-query';
import webcam from '../../../assets/highlightProducts/footer-widget-img-01.jpg';
import useAxios from '../../../hooks/useAxios';
import { Link } from 'react-router-dom';

export default function MixedProducts() {



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
   const { data: bestSells = [] } = useQuery({
       queryKey: ['bestSells'],
       queryFn: async () => {
           const response = await axios.get('/api/bestSells')
           return response.data
       },
   })
 const top3featuredProducts = featuredProducts.slice(0,3)
 const top3OnSellProducts = onSaleProducts.slice(0,3)
 const top3TopSellProducts = bestSells.slice(0,3)

 const  combinedData = [...top3featuredProducts,...top3TopSellProducts,...top3OnSellProducts]



   

    return (
        <main className="lg:block hidden max-w-screen-2xl mx-auto p-">
            {/* Header Section */}
            <div className="flex justify-between max-w-4xl  mb-8">
                <p className="text-2xl font-bold border-b-4 border-yellow-300 cursor-pointer hover:text-blue-500">Featured Products</p>
                <p className="text-lg  cursor-pointer hover:text-blue-500 font-bold border-b-4 border-yellow-300">Top Selling</p>
                <p className="text-lg  cursor-pointer hover:text-blue-500 font-bold border-b-4 border-yellow-300 mr-10">On Sale</p>

            </div>
            <div className="grid lg:grid-cols-4 gap-x-2">
                {/* Products Grid */}
                <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
                    {combinedData.map((item, idx) => (
                       <Link key={idx} to={`/product/${item._id}`}>
                            <div
                                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl h-28 flex"
                            >
                                {/* Image Section */}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-7/12 h-full object-cover"
                                />
    
                                {/* Content Section */}
                                <div className="w-5/12 px-4  flex flex-col justify-between bg-gray-50">
                                    <div>
                                        <h3 className="text-lg font-bold mb-1 text-gray-900">{item.name}</h3>
                                        {/* tattings */}
                                        <p>rattings</p>
                                        <p className="text-gray-600 text-sm font-medium mb-2">${item.price}</p>
                                    </div>
    
                                </div>
                            </div>
                       </Link>
                    ))}
                </div>


                {/* Highlight Image Section */}
                <div className="hidden lg:block">
                    <img
                        src={webcam}
                        alt="Highlighted product"
                        className="rounded-lg shadow-lg w-full object-cover"
                    />
                </div>
            </div>
        </main>
    );
}
