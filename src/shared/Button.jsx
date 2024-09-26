/* eslint-disable react/prop-types */

export default function Button({ text }) {
    if (text === 'Add to Cart') return <button className="bg-green-600 text-white px-2 py-2 rounded-lg shadow-md hover:bg-green-500 hover:shadow-lg transition-all duration-300 ease-in-out">
        {text}
    </button>
    else if (text === 'View Product') return <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg transition-all duration-300 ease-in-out">
        {text}
    </button>


}
