import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { IoMdLogIn } from "react-icons/io";
import { MdAddReaction } from "react-icons/md";

const Navbar = () => {
    return (
        <nav className='w-full mx-auto bg-[#95EFFE] px-10 py-4'>
            <div className='max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-5 justify-between items-center'>
                {/* login and reg */}
                <div className='flex justify-center items-end flex-col text-right gap-5'>
                    <div className='flex justify-end items-center gap-2'>
                        <Link to='/login'>كىرىش</Link>
                        <IoMdLogIn className='text-3xl' />
                    </div>
                    <div className='flex justify-end items-center gap-2'>
                        <Link to='/registration'>تىزىملىتىش</Link>
                        <MdAddReaction className='text-3xl' />
                    </div>
                </div>
                {/* search and logo text */}
                <div className="mx-auto max-w-[400px] space-y-4">
                    <h1 className='text-3xl font-bold text-center'>ئۇيغۇر بالىلار تېپىشماقلىرى</h1>
                    <div className="md:ml-auto md:mr-0 relative">
                        <svg className="absolute ml-2 top-1/2 -translate-y-1/2"
                            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                            <path d="M 21 3 C 11.654545 3 4 10.654545 4 20 C 4 29.345455 11.654545 37 21 37 C 24.701287 37 28.127393 35.786719 30.927734 33.755859 L 44.085938 46.914062 L 46.914062 44.085938 L 33.875 31.046875 C 36.43682 28.068316 38 24.210207 38 20 C 38 10.654545 30.345455 3 21 3 z M 21 5 C 29.254545 5 36 11.745455 36 20 C 36 28.254545 29.254545 35 21 35 C 12.745455 35 6 28.254545 6 20 C 6 11.745455 12.745455 5 21 5 z"></path>
                        </svg>
                        <input placeholder="Search here..." className="pr-3 pl-10 rounded-lg w-full py-3 border border-black" type="text" name="" id="" />
                    </div>
                </div>
                {/* logo */}
                <img src={logo} alt="" className='h-32' />
            </div>
        </nav>
    )
}

export default Navbar