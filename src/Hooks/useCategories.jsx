import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { useContext, useState } from 'react'
import { MyAuthContext } from '../Context/AuthContext';

const useCategories = () => {

    const { user, loading } = useContext(MyAuthContext);

    const { data: categories = [], refetch: categoriesRefetch, isLoading } = useQuery({
        queryKey: ['category', user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:8000/category?email=${user?.email}`)
            return res.data
        },

    })
    console.log(categories)
    return { categories, categoriesRefetch, isLoading }

}

export default useCategories


