import {Link} from "react-router-dom"
export default function BestDealsTabs() {

    const Tabs = [
        { title: 'Best Deals', url: '/best-deals' },
        { title: 'Tv & Audio', url: '/new-arrivals' },
        { title: 'Cameras', url: '/top-sellers' },
        { title: 'Smartphones', url: '/discounted-offers' },
        { title: 'GPS & Navi', url: '/special-offers' },
        { title: 'Computers', url: '/best-sellers' },
        { title: 'Portable Audio ', url: '/best-rated' },
        { title: 'Accessories', url: '/most-viewed' },

    ]

    return (
        <div>
            {
                Tabs.map((tab, index) => (
                    <Link key={index} to={tab.url} className={`text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg ${index === 0 ? 'border-b-4 border-blue-500' : ''}`}>
                        <span className="text-2xl">{tab.title}</span>
                    </Link>
                ))
            }
        </div>
    )
}
