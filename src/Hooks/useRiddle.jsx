import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { useContext, useState } from 'react'
import { MyAuthContext } from '../Context/AuthContext';

const useRiddle = () => {

    const { user, loading } = useContext(MyAuthContext);

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['riddle', user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:8000/riddle?email=${user?.email}`)
            return res.data
        },

    })
    return { data, refetch, isLoading }

}

export default useRiddle
