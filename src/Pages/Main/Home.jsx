
import { useEffect, useState } from 'react'
import Card from '../../Components/Card'
import Hero from '../../Components/Hero'
import Navbar from '../../Components/Navbar'
import useCategories from '../../Hooks/useCategories'
import axios from 'axios'


const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const getAllCat = async () => {
            const res = await axios.get('http://localhost:8000/allcategories');
            setData(res.data)
        }
        getAllCat();
    }, [])

    console.log(data);
    return (
        <>
            <Navbar />
            <div className='max-w-7xl mx-auto pt-10 pb-20'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 items-center justify-center'>
                    {data?.data?.map((category) => (
                        <Card key={category._id} category={category} />
                    ))}

                </div>
                <Hero />
            </div>

        </>
    )
}

export default Home