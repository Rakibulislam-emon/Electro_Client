import { Link } from 'react-router-dom';
import consoleFront from '../../assets/gamingConsole/consal.png';

export default function SpecialOffers() {
    const specialOffers = {
        id: 111,
        name: "Game Console Controller + USB 3.0 Cable",
        brand: "TopBrand",
        image: consoleFront,
        description: "A high-quality game console controller bundled with a USB 3.0 cable.",
        price: 99.00,
        category: "Accessories",
        ratings: 4.8,
        stock: 10,
        availability: "Limited Stock",
        sold: 55
    };

    return (
        <div className="max-w-screen-sm lg:mx-8 mb-4">
            <Link
            to={`/Console`}
            state={
                {
                    productOfSpecialOffer : specialOffers
                }
            }
                key={specialOffers.id}
                className="relative flex flex-col rounded-xl bg-white text-gray-700 shadow-lg overflow-hidden"
            >
                <h1 className="font-semibold text-2xl p-4 bg-gray-200">Special Offer</h1>
                <img src={specialOffers.image} alt={specialOffers.name} className="w-full h-auto object-cover" />
                <div className="p-6">
                    <h5 className="text-xl font-medium text-blue-700 mb-3">{specialOffers.name}</h5>
                    <p className="text-2xl font-semibold text-black text-center py-4">${specialOffers.price}</p>
                    <div className="flex justify-between text-gray-700">
                        <p>Already Sold: <span className="font-bold">{specialOffers.sold}</span></p>
                        <p>Available: <span className="font-bold">{specialOffers.stock}</span></p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
