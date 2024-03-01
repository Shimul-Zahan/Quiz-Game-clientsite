import RiddleCard from '../../Components/RiddleCard'
import { MyAuthContext } from '../../Context/AuthContext'
import CommonNavbar from '../../Shared/CommonNavbar'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useQuery } from "@tanstack/react-query";

const SavedRiddle = () => {

    const { user, loading } = useContext(MyAuthContext);
    console.log(user);
    const { data, refetch, isLoading } = useQuery({
        queryKey: ['save-riddle', user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:8000/save-riddle?email=${user?.email}`)
            return res.data
        },
    })

    console.log(data);


    return (
        <>
            <CommonNavbar />
            <section>
                <h1 className='text-center lg:py-16 text-3xl font-bold'>ساقلىۋالغان تېپىشماقلىرىم</h1>
                <div className='flex justify-center items-center'>
                    <div className='py-10 grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl'>
                        {
                            data && data.map(item =>
                                <RiddleCard item={item} save={'save'} />
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default SavedRiddle