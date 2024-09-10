
export default function BestSellersTitles() {
    return (
        <main className="max-w-screen-2xl mx-auto ">
            <div className="flex flex-wrap justify-between items-center">
                <div className="w-full sm:w-auto">
                    <h2 className="pl-4 sm:pl-8 text-xl sm:text-2xl text-center sm:text-left">Best Sellers</h2>
                </div>
                <div className="flex flex-wrap gap-4 sm:gap-x-10 md:gap-x-20 justify-center sm:justify-end">
                    <h3 className="border-yellow-400 border-2 px-4 sm:px-8 rounded-full">Top 20</h3>
                    <h3 className="text-center">Smart Phones & Tablets</h3>
                    <h3 className="text-center">Laptops & Computers</h3>
                    <h3 className="pr-4 sm:pr-8 text-center">Video Cameras</h3>
                </div>
            </div>

        </main>
    )
}
