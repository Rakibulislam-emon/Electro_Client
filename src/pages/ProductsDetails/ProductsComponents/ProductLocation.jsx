import { Link, useLocation } from 'react-router-dom';

export default function ProductLocation() {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean); // Filter out any empty segments

    return (
        <div className="py-4">
            <h1 className="text-3xl  font-semibold">
                <Link to="/" className="text-blue-600 hover:underline">Home</Link>
                {pathSegments.length > 0 && (
                    <>
                        { ' ➜ ' }
                        {pathSegments.map((segment, index) => (
                            <span key={index}>
                                <Link  className="text-blue-600 hover:underline">
                                    {segment.charAt(0).toUpperCase() + segment.slice(1)} {/* Capitalize segment */}
                                </Link>
                                {index < pathSegments.length - 1 && ' ➜ '} {/* Add separator only if it's not the last segment */}
                            </span>
                        ))}
                    </>
                )}
            </h1>
        </div>
    );
}
