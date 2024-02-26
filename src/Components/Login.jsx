import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
    } 

    return (
        <section className='w-full min-h-screen mx-auto py-10'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
                <h1 className="text-3xl font-bold text-center text-indigo-600">كىرىش</h1>
                {/* Input fields and the form started */}
                <form onSubmit={handleLogin} action="" className="space-y-6">
                    <div className="space-y-2 text-sm">
                        <div className='relative'>
                            <input type="text" name="username" id="username" placeholder="ئەزالىق نام" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end" />
                            <svg className='absolute top-1/2 -translate-y-1/2 left-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#1C274C" />
                                <path d="M16.807 19.0112C15.4398 19.9504 13.7841 20.5 12 20.5C10.2159 20.5 8.56023 19.9503 7.193 19.0111C6.58915 18.5963 6.33109 17.8062 6.68219 17.1632C7.41001 15.8302 8.90973 15 12 15C15.0903 15 16.59 15.8303 17.3178 17.1632C17.6689 17.8062 17.4108 18.5964 16.807 19.0112Z" fill="#1C274C" />
                                <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3432 6 9.00004 7.34315 9.00004 9C9.00004 10.6569 10.3432 12 12 12Z" fill="#1C274C" />
                            </svg>
                        </div>
                    </div>
                    <div className="space-y-2 text-sm">
                        <div className='relative'>
                            <input type="password" name="password" id="password" placeholder="پارول" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end" />
                            <svg className='absolute top-1/2 -translate-y-1/2 left-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
                                <path d="M 7 5 C 3.1545455 5 0 8.1545455 0 12 C 0 15.845455 3.1545455 19 7 19 C 9.7749912 19 12.089412 17.314701 13.271484 15 L 16 15 L 16 18 L 22 18 L 22 15 L 24 15 L 24 9 L 23 9 L 13.287109 9 C 12.172597 6.6755615 9.8391582 5 7 5 z M 7 7 C 9.2802469 7 11.092512 8.4210017 11.755859 10.328125 L 11.988281 11 L 22 11 L 22 13 L 20 13 L 20 16 L 18 16 L 18 13 L 12.017578 13 L 11.769531 13.634766 C 11.010114 15.575499 9.1641026 17 7 17 C 4.2454545 17 2 14.754545 2 12 C 2 9.2454545 4.2454545 7 7 7 z M 7 9 C 5.3549904 9 4 10.35499 4 12 C 4 13.64501 5.3549904 15 7 15 C 8.6450096 15 10 13.64501 10 12 C 10 10.35499 8.6450096 9 7 9 z M 7 11 C 7.5641294 11 8 11.435871 8 12 C 8 12.564129 7.5641294 13 7 13 C 6.4358706 13 6 12.564129 6 12 C 6 11.435871 6.4358706 11 7 11 z"></path>
                            </svg>
                        </div>
                        <div className="flex justify-end text-xs pt-2">
                            <button onClick={() => setOpenModal(true)} className="hover:underline text-end">
                                ئاپلا، پارولنى ئۇنتۇپ قالدىم؟
                            </button>
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

                {/* regi in Button */}
                <Link to='/registration' className="text-lg rounded-xl flex justify-center items-center relative p-[10px] w-full bg-[#FAB345] text-black border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                    تىزىملىتىش
                    <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                        Let&apos;s go
                    </span>
                    <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                    </span>
                    <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                    <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                    <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                    <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                </Link>
            </div>
            <div className="w-72 mx-auto flex items-center justify-center">
                <div className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 backdrop-blur-sm bg-black/20 duration-100`}>
                    <div className={`absolute max-w-md p-4 text-center bg-white drop-shadow-2xl rounded-lg ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}`}>
                        <svg onClick={() => setOpenModal(false)} className="w-8 mx-auto mr-0 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#c51636"></path></g></svg>
                        <div className="space-y-2 text-sm w-[400px] py-10">
                            <h1 className='text-3xl font-bold text-center py-5'>پارول قايتۇرۇش</h1>
                            <div className='relative'>
                                <input type="email" name="email" id="email" placeholder="پارول" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end" />
                                <svg className='absolute top-1/2 -translate-y-1/2 left-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <button className="text-lg mb-10 rounded-xl relative p-[10px] block w-full bg-[#95EFFE] text-black border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                            يوللاش
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login