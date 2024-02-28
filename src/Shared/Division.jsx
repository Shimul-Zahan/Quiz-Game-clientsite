
import Table from './Table'

const Division = () => {
    return (
       <>
        <div>
            <div className='flex justify-center flex-col-reverse lg:flex-row items-center gap-8 pt-4'>
                <div className="w-[400px]">
                    <div className="relative">
                        <svg className="absolute ml-2 top-1/2 -translate-y-1/2"
                            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                            <path d="M 21 3 C 11.654545 3 4 10.654545 4 20 C 4 29.345455 11.654545 37 21 37 C 24.701287 37 28.127393 35.786719 30.927734 33.755859 L 44.085938 46.914062 L 46.914062 44.085938 L 33.875 31.046875 C 36.43682 28.068316 38 24.210207 38 20 C 38 10.654545 30.345455 3 21 3 z M 21 5 C 29.254545 5 36 11.745455 36 20 C 36 28.254545 29.254545 35 21 35 C 12.745455 35 6 28.254545 6 20 C 6 11.745455 12.745455 5 21 5 z"></path>
                        </svg>
                        <input placeholder="Search here..." className="pr-3 pl-10 rounded-lg w-full py-3 border border-black" type="text" name="" id="" />
                    </div>
                </div>
                <div className='flex justify-start items-center gap-4'>
                    <h1 className='text-3xl font-bold text-center'>تۈرلەر</h1>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.5" cx="12" cy="9" r="3" stroke="#1C274C" strokeWidth="1.5" />
                        <circle cx="12" cy="12" r="10" stroke="#1C274C" strokeWidth="1.5" />
                        <path opacity="0.5" d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
            <hr className='mt-5 border-black' />
            <Table type={'division'} />
        </div>
       </>
    )
}

export default Division