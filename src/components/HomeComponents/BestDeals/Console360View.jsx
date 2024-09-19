
import { Link } from 'react-router-dom';
import consoleFront from '../../../assets/gamingConsole/consal.png';
import left from '../../../assets/gamingConsole/gadtet-300x300.png';
import back from '../../../assets/gamingConsole/gade1-300x300.png';
import front from '../../../assets/gamingConsole/consal-300x300.png';

export default function Console360View() {
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
        sold: 55,
        images: {
            front: consoleFront,
            left: left,
            back: back,
            top: front
        }
    };

    return (
        <div className="max-w-screen-sm mx-auto p-4">
            <Link
            state={{
                productOfSpecialOffer: specialOffers
            }}
            to={`/Console`} className="relative flex flex-col rounded-xl bg-white text-gray-700 shadow-lg overflow-hidden">
                <h1 className="font-semibold text-2xl p-4 bg-gray-200">Special Offer</h1>
                <div className="relative overflow-hidden">
                    <img
                        src={specialOffers.images.front}
                        alt={specialOffers.name}
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="flex gap-x-2">
                    <div className="border">
                        <img src={specialOffers.images.left} alt="Left view" className="size-32" />
                    </div>
                    <div className="border">
                        <img src={specialOffers.images.back} alt="Back view" className="size-32" />
                    </div>
                    <div className="border">
                        <img src={specialOffers.images.top} alt="Top view" className="size-32" />
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex justify-between text-gray-700">
                        <p><span className="font-bold text-2xl">${specialOffers.price.toFixed(2)}</span></p>
                        <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                    </div>
                </div>
            </Link>
        </div>
    );
}
