
import Card from '../../Components/Card'
import Hero from '../../Components/Hero'
import Navbar from '../../Components/Navbar'
import useCategories from '../../Hooks/useCategories'


const Home = () => {
    const { categories } = useCategories()

    console.log(categories?.data);
    return (
        <>
            <Navbar />
            <div className='max-w-7xl mx-auto pt-10 pb-20'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 items-center justify-center'>
                    {categories?.data?.map((category) => (
                        <Card key={category._id} category={category} />
                    ))}

                </div>
                <Hero />
            </div>

        </>
    )
}

export default Home