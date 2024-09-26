import { Link } from "react-router-dom";

export default function BestDealsTabs() {
  const Tabs = [
    { title: 'Best Deals', url: '/' },
    { title: 'Tv & Audio', url: 'shop' },
    { title: 'Cameras', url: 'shop' },
    { title: 'Smartphones', url: 'shop' },
    { title: 'GPS & Navi', url: 'shop' },
    { title: 'Computers', url: 'shop' },
    { title: 'Portable Audio', url: 'shop' },
    { title: 'Accessories', url: 'shop' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 py-4">
      {Tabs.map((tab, index) => (
        <Link
          key={index}
          to={tab.url}
          className={`text-gray-600 hover:text-gray-900 px-2 md:px-4 py-1 md:py-2 rounded-lg 
          ${index === 0 ? 'border-b-4 border-blue-500' : ''}`}
        >
          <span className="text-base md:text-lg lg:text-2xl ">{tab.title}</span>
        </Link>
      ))}
    </div>
  );
}
