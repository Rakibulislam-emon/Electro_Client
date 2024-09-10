import demo from '../../../assets/gamingConsole/consal-300x300.png'
export default function BestSellersProductCard() {
    return (
        <div>
            <div className="flex  gap-x-8 w-60 border">
                <div className='border'> 
                    <img src={demo} alt="" className="size-40" />
                </div>
                <div className='flex flex-col gap-y-4 border '>
                    <div>
                        <h1>tags</h1>
                        <h1>Names</h1>
                    </div>
                    <h1>Price</h1>
                    <div className="flex flex-col border gap-y-4 ">
                        <button className="border">add to cart</button>
                        <button className='border'>wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
