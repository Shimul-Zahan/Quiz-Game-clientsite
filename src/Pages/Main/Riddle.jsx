import RiddleCard from '../../Components/RiddleCard'
import useRiddle from '../../Hooks/useRiddle'
import CommonNavbar from '../../Shared/CommonNavbar'
import { useParams } from 'react-router-dom'

const Riddle = () => {

    const { categoryTitle } = useParams();
    const { data, refetch } = useRiddle()
    const filterRiddle = data?.data && data.data?.filter(item => item.category === categoryTitle);

    return (
        <>
            <CommonNavbar />
            <section className='p-4'>
                <h1 className='text-center py-16 text-3xl font-bold'>ئۇيغۇرچە ھەرپلار، سانلار، چالغۇلار</h1>
                <div className='flex justify-center items-center'>
                    <div className='py-10 grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl'>
                        {
                            filterRiddle && filterRiddle?.map(item =>
                                <RiddleCard item={item} />
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Riddle