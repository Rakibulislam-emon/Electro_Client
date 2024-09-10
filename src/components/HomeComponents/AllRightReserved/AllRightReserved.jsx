import reserved from '../../../assets/marquee/patment-icon1.png'
export default function AllRightReserved() {
    return (
      <main className=' bg-[#eaeaea]'>
            <div className='flex justify-between max-w-screen-2xl mx-auto py-'>
                <div className='py-2'><h1>© Electro - All Right Reserved</h1></div>
                <div className='py-2'>
                    <img src={reserved} alt="" />
                </div>
            </div>
      </main>
    )
}
