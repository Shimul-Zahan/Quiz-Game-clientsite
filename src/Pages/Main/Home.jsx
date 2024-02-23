import React from 'react'
import Card from '../../Components/Card'
import Hero from '../../Components/Hero'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto pt-10 pb-20'>
            <section className='grid grid-cols-1 lg:grid-cols-3 gap-5 items-center justify-center'>
                <Link to='riddle'>
                    <Card />
                </Link>
                <Link to='riddle'>
                    <Card />
                </Link>
                <Link to='riddle'>
                    <Card />
                </Link>
            </section>
            <Hero />
        </div>
    )
}

export default Home