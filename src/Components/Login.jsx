import React from 'react'

const Login = () => {
    return (
        <section className='w-full min-h-screen mx-auto'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
                <h1 className="text-3xl font-bold text-center text-indigo-600">كىرىش</h1>
                {/* Input fields and the form started */}
                <form action="" className="space-y-6">
                    <div className="space-y-2 text-sm">
                        <label htmlFor="username" className="block ">
                            Your name
                        </label>
                        <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                    </div>
                    <div className="space-y-2 text-sm">
                        <label htmlFor="password" className="block ">
                            Password
                        </label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                        <div className="flex justify-center text-xs ">
                            <a href="#" className="hover:underline">
                                ئاپلا، پارولنى ئۇنتۇپ قالدىم؟
                            </a>
                        </div>
                    </div>
                    {/* Sign in Button */}
                    <button className="text-lg rounded-xl relative p-[10px] block w-full bg-[#95EFFE] text-black border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                        كىرىش
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
                    تىزىملىتىش
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

export default Login