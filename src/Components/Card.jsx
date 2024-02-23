import image1 from '../assets/ed561f2266523de8f0e3dc0d85d4caa0.jpg'


const Card = () => {
    return (
        <section className='py-10 w-full'>
            <div className="shadow-lg max-w-[350px] font-sans rounded-xl my-10 flex flex-col justify-center items-center mx-auto bg-white">
                <img src={image1} alt="" className='w-full h-[350px]' />
                <button className="bg-[#95EFFE] text-black hover:bg-[#0095FF] hover:scale-95 font-medium hover:text-white w-full py-4 hover:shadow-xl shadow-[0px_0px_10px_#E2DADA] t duration-500">ئۇيغۇر ئويۇنلىرى</button>
            </div>
        </section>
    )
}

export default Card