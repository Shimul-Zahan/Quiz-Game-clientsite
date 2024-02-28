

const DasHome = () => {
    return (
        <div className='w-full min-h-screen py-4'>
            <div className='flex justify-center items-start gap-4'>
                <li className='text-lg'>كۆرسەتكۈچ</li>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <hr className='mt-5' />
            <div className='text-center py-10'>
                <div className="flex justify-center flex-col lg:flex-row items-center gap-20">

                    <div className="flex flex-col w-[200px] gap-10 justify-center items-center bg-[#FAB345] px-10 py-8 rounded-xl">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current text-black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="text-xl">تېپىشماق</div>
                    </div>

                    <div className="flex flex-col w-[200px] gap-10 justify-center items-center bg-[#5EFA4563] px-10 py-8 rounded-xl">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current text-black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="text-xl">تۈر</div>
                    </div>

                    <div className="flex flex-col w-[200px] gap-10 justify-center items-center bg-[#95EFFE] px-10 py-8 rounded-xl">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current text-black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="text-xl">ئەزا</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DasHome