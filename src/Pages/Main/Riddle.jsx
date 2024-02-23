import React from 'react'
import RiddleCard from '../../Components/RiddleCard'

const Riddle = () => {
    return (
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
    )
}

export default Riddle