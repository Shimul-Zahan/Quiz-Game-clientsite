/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { useState } from 'react'
import useCategories from '../Hooks/useCategories';
import Swal from 'sweetalert2';
import useRiddle from '../Hooks/useRiddle';

const Table = ({ type }) => {

    const { categories, categoriesRefetch} = useCategories()

    const [riddle,refetch] =useRiddle()

    const [openModal, setOpenModal] = useState(false);
    console.log(openModal);
    console.log(type);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        answer: '',
        explanation: '',
    });

    //post riddles
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        console.log('Form Data:', formData);
    
        try {
            const response = await axios.post('http://localhost:8001/add/riddles', formData);
            console.log('Response:', response.data);
            
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Riddle added successfully",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    //post categories
    const [categoryTitle, setCategoryTitle] = useState('');
    const [image, setImage] = useState(null);

    const handleCategoryAdd = async () => {
        try {
            const formData = new FormData();
            formData.append('categoryTitle', categoryTitle);
            formData.append('image', image); // Ensure this matches the field name expected by the server
        
            console.log('Form Data:', formData);
    
            const response = await axios.post("http://localhost:8001/add/category", formData);
            console.log(response.data);
            
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Category added successfully",
                showConfirmButton: false,
                timer: 1500
            });
    
        } catch (error) {
            console.error(error);
        }
    };

    //handleDeleteRiddle
    const handleDeleteRiddle = async (riddleId) => {
        try {
         
          const response = await axios.delete(`http://localhost:8001/riddle/delete/${riddleId}`);
          console.log(response.data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Delete successfully",
            showConfirmButton: false,
            timer: 1500
        });
          refetch();  
        } catch (error) {
          console.error('Error deleting riddle:', error);
        }
      };
      //handleDeleteRiddle
      const handleDeleteCategory = async (CategoryId) => {
        try {
         
          const response = await axios.delete(`http://localhost:8001/category/delete/${CategoryId}`);
          console.log(response.data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Delete successfully",
            showConfirmButton: false,
            timer: 1500
        });
        categoriesRefetch();  
        } catch (error) {
          console.error('Error deleting category:', error);
        }
      };
    return (
        <div className="overflow-x-auto ">
            <table className="table table-zebra">
                {/* head */}
                <thead className='bg-black text-white'>
                    {
                        type === 'users' && <tr className='text-lg text-center'>
                            <th>بۇيرۇق</th>
                            <th>ئېلخەت</th>
                            <th>ئىسىم</th>
                            <th>نومۇر</th>
                        </tr>
                    }
                    {
                        type === 'division' && <tr className='text-lg text-center'>
                            <th>بۇيرۇق</th>
                            <th>تۈر</th>
                            <th>نومۇر</th>
                        </tr>
                    }
                    {
                        type === 'riddle' && <tr className='text-lg text-center'>
                            <th>بۇيرۇق</th>
                            <th>تۈر</th>
                            <th>نومۇر</th>
                            <th>تۈر</th>
                            <th>نومۇر</th>
                        </tr>
                    }
                </thead>
                <tbody>
                    {
                        type === 'users' && <tr className='text-center'>
                            <td className='flex justify-center items-center gap-4'>
                                <button className='bg-[#FAB345] text-red-500 px-8 py-2 rounded-full'>ئۆچۈرۈش</button>
                            </td>
                            <td></td>
                            <td></td>
                            <th>1</th>
                        </tr>
                    }
                    {
                        type === 'users' && <tr className='text-center'>
                            <td className='flex justify-center items-center gap-4'>
                                <button className='bg-[#FAB345] text-red-500 px-8 py-2 rounded-full'>ئۆچۈرۈش</button>
                            </td>
                            <td></td>
                            <td></td>
                            <th>1</th>
                        </tr>
                    }
                    {
                        type === 'users' && <tr className='text-center'>
                            <td className='flex justify-center items-center gap-4'>
                                <button className='bg-[#FAB345] text-red-500 px-8 py-2 rounded-full'>ئۆچۈرۈش</button>
                            </td>
                            <td></td>
                            <td></td>
                            <th>1</th>
                        </tr>
                    }
                    {/* row 2 */}
                       {type === 'division' && categories?.data?.map(category => (
                        <tr key={category._id} className='text-center'>
                        <td className='flex justify-center items-center gap-4'>
                            <button onClick={() => handleDeleteCategory(category._id)} className='bg-[#FAB345] text-red-500 px-8 py-2 rounded-full'>ئۆچۈرۈش</button>
                            <button className='bg-[#01D9FE] text-white px-8 py-2 rounded-full'>تۈزىتىش</button>
                        </td>
                        <td>{category.categoryTitle}</td>
                        <th>{category.image}</th>
                        
                    </tr>
                    ))
                       }
                    
                    {/* row 3 */}
                    {
                        type === 'riddle' && riddle?.data?.map(riddles =>(
                            <tr key={riddles._id} className='text-center'>
                            <td className='flex justify-center items-center gap-4'>
                                <button  onClick={() => handleDeleteRiddle(riddles._id)} className='bg-[#FAB345] text-red-500 px-8 py-2 rounded-full'>ئۆچۈرۈش</button>
                                <button className='bg-[#01D9FE] text-white px-8 py-2 rounded-full'>تۈزىتىش</button>
                            </td>
                            <td>{riddles.title}</td>
                            <th>{riddles.category}</th>
                            <th>{riddles.answer}</th>
                            <th>{riddles.explanation}</th>
                        </tr>))
                    }
                    
                   
                </tbody>
            </table>
            {
                type === 'division' && <button onClick={() => setOpenModal({ click: true, message: 'division' })}
                    className='flex justify-center items-center gap-4 bg-green-600 px-8 py-1 rounded-full mx-10 text-white lg:absolute bottom-8 my-5 left-10'>
                    <h1 className='text-lg font-bold'>+</h1>
                    <h1>يېڭى تۈر قوشۇش</h1>
                </button>
            }
            {
                type === 'riddle' && <button onClick={() => setOpenModal({ click: true, message: 'riddle' })}
                    className='flex justify-center items-center gap-4 bg-green-600 px-8 py-1 rounded-full mx-10 text-white lg:absolute bottom-8 left-10 my-5'>
                    <h1 className='text-lg font-bold'>+</h1>
                    <h1>يېڭى تۈر قوشۇش</h1>
                </button>
            }

            {
                openModal?.click && <div className="lg:w-64 mx-auto lg:px-10 flex items-center justify-center">
                    <div className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 backdrop-blur-sm bg-black/20 duration-100`}>
                        <div className={`absolute max-w-md p-4 text-center bg-white drop-shadow-2xl rounded-lg ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}`}>
                            <svg onClick={() => setOpenModal(false)} className="w-8 mx-auto mr-0 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#c51636"></path></g></svg>
                            {
                                openModal?.message === 'division' &&
                                <form onSubmit={handleCategoryAdd} className='pb-10 space-y-5'>
                                    <input type="text" name="categoryTitle" onChange={(e) => setCategoryTitle(e.target.value)} placeholder="پارول" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end" />
                                    <input type="file"
                                        name="image"
                                        onChange={(e) => setImage(e.target.files[0])}

                                        placeholder="پارول" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end" />
                                    <button type='submit' className='py-2 px-8 border border-black rounded-xl'> قوشۇش</button>
                                </form>
                            }
                            {
                                openModal?.message === 'riddle' &&
                                <form onSubmit={handleSubmit} className='pb-10 space-y-5'>
                                    <h1>يېڭى تېپىشماق قوشۇش</h1>
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="تۈر"
                                        className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    />
                                    <select
                                        name="category"
                                        className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end"
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    >
                                        <option value="">Select Category</option>
                                        {categories && categories?.data?.map((category) => (
                                            console.log(category),
                                            <option key={category._id}>
                                                {category.categoryTitle}
                                            </option>
                                        ))}
                                        {console.log(categories.data)}
                                    </select>
                                    <input
                                        type="text"
                                        name="answer"
                                        placeholder="جاۋاب"
                                        className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end"
                                        value={formData.answer}
                                        onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                                    />
                                    <input
                                        type="text"
                                        name="explanation"
                                        placeholder="ئىزاھات"
                                        className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end"
                                        value={formData.explanation}
                                        onChange={(e) => setFormData({ ...formData, explanation: e.target.value })}
                                    />
                                    <div className='flex justify-center items-center gap-5'>
                                        <button type='submit' className='py-2 px-8 border bg-gray-200 rounded-xl'>تامام</button>
                                        <button type='submit' className='py-2 px-8 border bg-gray-500 rounded-xl'>قوشۇش</button>
                                    </div>
                                </form>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Table