import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

const useRiddle = () => {
    const { data, refetch, isLoading } = useQuery({
        queryKey: ['riddle'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:8000/riddle`)
            return res.data
        },

    })
    return { data, refetch, isLoading }

}

export default useRiddle
