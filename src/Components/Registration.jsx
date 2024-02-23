import React from 'react'

const Registration = () => {
    return (
        <section className='w-full min-h-screen mx-auto py-10'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
                <h1 className="text-3xl font-bold text-center text-indigo-600 py-2">تىزىملىتىش</h1>
                {/* Input fields and the form started */}
                <form action="" className="space-y-7">
                    <div className="space-y-2 text-sm">
                        <input type="text" name="username" id="username" placeholder="ئەزالىق نام" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  text-end" />
                    </div>
                    <div className="space-y-2 text-sm">
                        <input type="email" name="email" id="password" placeholder="ئېلخەت" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end" />
                    </div>
                    <div className="space-y-2 text-sm">
                        <input type="password" name="password" id="password" placeholder="پارول" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end" />
                        <div className="flex justify-end text-xs">
                            <a href="#" className="hover:underline mt-2">
                                ئاپلا، پارولنى ئۇنتۇپ قالدىم؟
                            </a>
                        </div>
                    </div>
                    {/* Sign in Button */}
                    <button className="text-lg rounded-xl relative p-[10px] block w-full bg-[#95EFFE] text-black border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                        تىزىملىتىش
                        <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                            Let&apos;s go
                        </span>
                        <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                        <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                        <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                        <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                    </button>
                </form>

                {/* Sign in Button */}
                <button className="text-lg rounded-xl relative p-[10px] block w-full bg-[#FAB345] text-black border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                    كىرىش
                    <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                    </span>
                    <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                    <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                    <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                    <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                </button>
            </div>
        </section>
    )
}

export default Registration