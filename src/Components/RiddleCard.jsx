import React, { useState, useContext, useEffect } from 'react'
import { Modal } from '../Shared/Modal';
import { MyAuthContext } from '../Context/AuthContext';
import axios from 'axios'

const RiddleCard = ({ item, save }) => {

    const [openModal, setOpenModal] = useState(false);
    const { user, loading } = useContext(MyAuthContext);
    console.log(user?.email);

    const handleSave = async () => {
        const addRiddle = {
            oldId: item._id,
            answer: item.answer,
            category: item.category,
            explanation: item.explanation,
            title: item.title,
            email: user?.email,
        }
        const res = await axios.post(`http://localhost:8000/save-riddle`, addRiddle);
        if (res.data.message === 'successfully added') {
            console.log('added succeessfully');
        } else {
            console.log('Already exist.');
        }
    }

    return (
        <div className="rounded-lg border shadow-sm w-full max-w-md mx-auto bg-white">
            {/* Product Title */}
            <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold ">{item?.title}</h3>
            </div>
            <div className="px-6 py-4 flex flex-col gap-4">
                <div className="flex justify-between items-end gap-2">
                    {
                        !save && <button onClick={handleSave} className="text-sm rounded-lg text-center py-2 px-8 cursor-pointer bg-[#FAB345] text-black">ساقلاش</button>
                    }
                    <button onClick={() => setOpenModal({ click: true, message: "explanation" })} className="text-sm rounded-lg text-center py-2 px-8 cursor-pointer bg-[#95EFFE] text-black">ئىزاھات</button>
                    <button onClick={() => setOpenModal({ click: true, message: 'answer' })} className="text-sm rounded-lg text-center py-2 px-8 cursor-pointer bg-[#5EFA4563] text-black">جاۋاب</button>
                </div>
            </div>

            {
                openModal?.click && <Modal item={item} openModal={openModal} setOpenModal={setOpenModal} />
            }

        </div>
    )
}

export default RiddleCard