
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

const useCategories=() =>{
    const {data: categories = [], refetch, isLoading} = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:8001/category`)
            return res.data
        },
        
    })
    console.log(categories)
    return [categories, refetch, isLoading]

}

export default useCategories


