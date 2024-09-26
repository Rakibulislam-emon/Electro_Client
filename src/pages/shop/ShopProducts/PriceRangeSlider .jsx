/* eslint-disable react/prop-types */

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceRangeSlider = ({ minPrice, maxPrice, onPriceChange }) => {
    const handleChange = (values) => {
        onPriceChange(values); // Send the values back to the parent component
    };

    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Price Range</label>
            <Slider
                range
                min={0}
                max={5000}
                defaultValue={[minPrice, maxPrice]}
                onChange={handleChange}
            />
            <div className="flex justify-between mt-2">
                <span>${minPrice}</span>
                <span>${maxPrice}</span>
            </div>
        </div>
    );
};

export default PriceRangeSlider;
