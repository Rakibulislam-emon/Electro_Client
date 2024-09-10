import { Link } from "react-router-dom";
import consoleFront from '../../../assets/gamingConsole/consal.png';
import left from '../../../assets/gamingConsole/gadtet-300x300.png';
import back from '../../../assets/gamingConsole/gade1-300x300.png';
import front from '../../../assets/gamingConsole/consal-300x300.png';
export default function Console360View() {
    return (
        <div className="max-w-screen-sm mx-auto p- ">
            <Link className="relative flex flex-col rounded-xl bg-white text-gray-700 shadow-lg overflow-hidden">
                <h1 className="font-semibold text-2xl p-4 bg-gray-200">Special Offer</h1>
                <div className="relative overflow-hidden">
                    <img
                        src={consoleFront}
                        alt="Game Console"
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className=" flex gap-x-2">
                    <div className="border">
                        <img src={left} alt="" className="size-32" />
                    </div>
                    <div className="border">
                        <img src={back} alt="" className="size-32" />
                    </div>
                    <div className="border">
                        <img src={front} alt="" className="size-32" />
                    </div>

                </div>
                <div className="p-6 ">
                    <div className="flex justify-between  text-gray-700">
                        <p> <span className="font-bold text-2xl">$55</span></p>
                         <button className="bg-gray-900 text-white py-2  px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                    </div>
                </div>
            </Link>
        </div>
    )
}
