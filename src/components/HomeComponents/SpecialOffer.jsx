import consoleFront from '../../assets/gamingConsole/consal.png';
import { Link } from 'react-router-dom';

export default function SpecialOffer() {
    return (
        <div className="max-w-screen-sm lg:mx-8 mb-4 ">
            <Link className="relative flex flex-col rounded-xl bg-white text-gray-700 shadow-lg overflow-hidden">
                <h1 className="font-semibold text-2xl p-4 bg-gray-200">Special Offer</h1>
                <div className="relative overflow-hidden">
                    <img
                        src={consoleFront}
                        alt="Game Console"
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="p-6">
                    <h5 className="text-xl font-medium text-blue-700 mb-3">
                        Game Console Controller + USB 3.0 Cable
                    </h5>
                    <p className="text-2xl font-semibold text-black text-center py-4">
                        $99.00
                    </p>
                    <div className="flex justify-between text-gray-700">
                        <p>Already Sold: <span className="font-bold">55</span></p>
                        <p>Available: <span className="font-bold">10</span></p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
