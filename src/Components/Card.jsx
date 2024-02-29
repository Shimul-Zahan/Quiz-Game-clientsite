/* eslint-disable react/prop-types */


const Card = ({category}) => {

   console.log(category);
     const {categoryTitle, image} = category 
    return (
        <section className='py-10 w-full'>
            <div className="shadow-xl max-w-[350px] font-sans rounded-xl my-10 flex flex-col justify-center items-center mx-auto bg-white">
                <img src={image} alt="" className='w-full h-[350px] rounded-tl-xl rounded-tr-xl' />
                <button className="bg-[#95EFFE] text-black hover:bg-[#0095FF] hover:scale-95 font-medium hover:text-white w-full py-4 hover:shadow-xl shadow-[0px_0px_10px_#E2DADA] duration-500 rounded-bl-xl rounded-br-xl">{categoryTitle}</button>
            </div>
        </section>
    )
}

export default Card