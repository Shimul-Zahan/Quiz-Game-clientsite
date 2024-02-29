import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

const useRiddle=() =>{
    const {data: riddle = [], refetch, isLoading} = useQuery({
        queryKey: ['riddle'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:8001/riddle`)
            return res.data
        },
        
    })
    console.log(riddle)
    return [riddle, refetch, isLoading]

}

export default useRiddle
