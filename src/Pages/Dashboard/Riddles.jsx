import React from 'react'
import Table from '../../Shared/Table'

const Riddles = () => {
    return (
        <div>
            <div className='flex justify-center items-center gap-8 pt-4'>
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
                    <h1 className='text-3xl font-bold text-center'>تېپىشماقلار</h1>
                    <svg fill="#000000" width="24" height="24" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.994 18.252h-2.711c-0.014-0.001-0.025-0.008-0.039-0.008-0.414 0-0.75 0.336-0.75 0.75v0c0 0.002 0 0.004 0 0.006 0 1.104-0.895 2-2 2s-2-0.895-2-2c0-0.002 0-0.004 0-0.007v0c-0-0.414-0.336-0.75-0.75-0.75v0c-0.014 0-0.025 0.007-0.039 0.008h-1.957v-1.33c1.584-0.354 2.75-1.748 2.75-3.415s-1.166-3.060-2.727-3.41l-0.023-0.004v-2.095c-0-0.414-0.336-0.75-0.75-0.75h-10.999c-0.414 0-0.75 0.336-0.75 0.75v0 10.976l-0.005 0.024v11c0 0.414 0.336 0.75 0.75 0.75l21.999 0.004c0.414-0 0.75-0.336 0.75-0.75v0-11c-0-0.414-0.336-0.75-0.75-0.75v0zM2.75 8.748h9.499v2.010c0 0.414 0.336 0.75 0.75 0.75v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0c-0.414 0-0.75 0.336-0.75 0.75v0 1.99h-1.331c-0.351-1.588-1.746-2.758-3.415-2.758s-3.064 1.17-3.411 2.734l-0.004 0.023h-1.338zM2.745 19.748h1.957c0.017 0.001 0.031 0.010 0.048 0.010 0.416-0.006 0.751-0.343 0.754-0.759v-0c0.003-1.101 0.896-1.993 1.998-1.993 1.103 0 1.998 0.894 1.998 1.998 0 0.002 0 0.003 0 0.005v-0c0 0.414 0.336 0.75 0.75 0.75v0c0.017 0 0.031-0.009 0.048-0.010h1.948v1.332c-1.584 0.355-2.75 1.75-2.75 3.416 0 1.442 0.873 2.681 2.12 3.215l0.023 0.009c0.171 0.074 0.374 0.139 0.584 0.186l0.023 0.004v1.338h-9.5zM23.244 29.252h-9.499v-1.96c0.001-0.015 0.009-0.028 0.009-0.043-0.006-0.416-0.343-0.751-0.758-0.754h-0c-1.102-0.003-1.994-0.896-1.994-1.998 0-1.104 0.895-1.998 1.998-1.998 0.002 0 0.003 0 0.005 0h-0c0.414-0 0.75-0.336 0.75-0.75v0c0-0.015-0.008-0.028-0.009-0.043v-1.953h1.338c0.357 1.58 1.749 2.742 3.412 2.742s3.055-1.162 3.407-2.719l0.004-0.023h1.338zM29.994 1.25h-10.998c-0.414 0-0.75 0.336-0.75 0.75v0 2.702c-0.001 0.017-0.010 0.031-0.010 0.048 0 0.414 0.336 0.75 0.75 0.75v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0c-0.414 0-0.75 0.336-0.75 0.75v0c0 0.017 0.009 0.031 0.010 0.048v2.702c0 0.414 0.336 0.75 0.75 0.75h2.076c0.354 1.584 1.748 2.75 3.415 2.75s3.060-1.166 3.41-2.727l0.004-0.023h2.093c0.414-0 0.75-0.336 0.75-0.75v0-11c-0-0.414-0.336-0.75-0.75-0.75h-0zM29.244 12.25h-2.008c-0.414 0-0.75 0.336-0.75 0.75v0c0 1.105-0.895 2-2 2s-2-0.895-2-2v0c-0-0.414-0.336-0.75-0.75-0.75h-1.99v-1.338c1.579-0.358 2.74-1.749 2.74-3.412s-1.161-3.054-2.717-3.407l-0.023-0.004v-1.338h9.498z"></path>
                    </svg>
                </div>
            </div>
            <hr className='mt-5 border-black' />
            <Table type={'riddle'} />
        </div>
    )
}

export default Riddles