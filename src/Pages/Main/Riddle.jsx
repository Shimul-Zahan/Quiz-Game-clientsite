import React from 'react'
import RiddleCard from '../../Components/RiddleCard'

const Riddle = () => {
    return (
        <section className='p-4'>
            <h1 className='text-center py-16 text-3xl font-bold'>ئۇيغۇرچە ھەرپلار، سانلار، چالغۇلار</h1>
            <div className='flex justify-center items-center'>
                <div className='py-10 grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl'>
                    <RiddleCard />
                    <RiddleCard />
                    <RiddleCard />
                    <RiddleCard />
                    <RiddleCard />
                    <RiddleCard />
                    <RiddleCard />
                    <RiddleCard />
                </div>
            </div>
        </section>
    )
}

export default Riddle