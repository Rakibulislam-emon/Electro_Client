import { useState } from 'react'
import icon from '../../assets/icons/menu-button.png'
import AllDepartmentModal from '../modals/AllDepartmentModal'
export default function AllDepartments() {

    const [isOpen, setIsOpen] = useState(true)
    const handleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <main className="max-w-screen-2xl mx-auto lg:block hidden z-[10000]  max-h-10 ">
            <div className="flex justify-between">
                <div className="max-w-screen-2xl w-full  flex justify-between">

                    <p className='flex items-center gap-x-2 p-4'>
                        <button onClick={handleModal}>
                            <img className='size-4' src={icon} alt="" />
                        </button>
                        <span>all AllDepartments</span>
                    </p>
                    <div className=" items-center max-w-screen-sm w-full flex justify-between">
                        <p>all Pages</p>
                        <p>
                            featuresBands
                        </p>
                        <p> trending styles</p>
                        <p>
                            gift card
                        </p>
                    </div>
                </div>
                <div className=" items-center max-w-screen-sm flex justify-center w-full ">
                    free shipping on order $50+
                </div>

            </div>

            {isOpen &&
                <AllDepartmentModal />
            }        </main>
    )
}
