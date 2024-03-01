/* eslint-disable react/prop-types */
import axios from 'axios';
import { useContext, useState, useEffect } from 'react'
import useCategories from '../Hooks/useCategories';
import Swal from 'sweetalert2';
import useRiddle from '../Hooks/useRiddle';
import { MyAuthContext } from '../Context/AuthContext';

const Table = ({ type, users }) => {

    const { categories, categoriesRefetch } = useCategories()
    const { user, loading } = useContext(MyAuthContext);
    console.log(user);
    const { data, refetch } = useRiddle()
    const [openModal, setOpenModal] = useState(false);
    const [allcategories, setAllCategories] = useState([])

    useEffect(() => {
        const getAllCat = async () => {
            const res = await axios.get('http://localhost:8000/allcategories');
            setAllCategories(res.data)
        }
        getAllCat();
    }, [])

    console.log(allcategories);

    const [formData, setFormData] = useState({
        title: '',
        category: '',
        answer: '',
        explanation: '',
    });

    //post riddles
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = formData.append('email', user?.email);
        try {
            const response = await axios.post('http://localhost:8000/add/riddles', { ...formData, email });
            console.log('Response:', response.data);
            setOpenModal(false);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Riddle added successfully",
                showConfirmButton: false,
                timer: 1500
            });
            refetch();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    //post categories
    const [categoryTitle, setCategoryTitle] = useState('');
    const [image, setImage] = useState(null);

    const handleCategoryAdd = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('categoryTitle', categoryTitle);
            formData.append('image', image);
            formData.append('email', user?.email);
            const response = await axios.post("http://localhost:8000/add/category", formData);
            setOpenModal(false);
            window.location.reload();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Category added successfully",
                showConfirmButton: false,
                timer: 1500
            });
            getAllusers()
        } catch (error) {
            console.error(error);
        }
    };

    //handleDeleteRiddle
    const handleDeleteRiddle = async (riddleId) => {
        try {

            const response = await axios.delete(`http://localhost:8000/riddle/delete/${riddleId}`);
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

            const response = await axios.delete(`http://localhost:8000/category/delete/${CategoryId}`);
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

    //edit form
    const [openModals, setOpenModals] = useState(false);
    const [selectedRiddle, setSelectedRiddle] = useState(null);

    const editData = (_id) => {
        const selectedRiddles = data?.data?.find(riddles => riddles._id === _id);
        console.log(selectedRiddles);
        setSelectedRiddle(selectedRiddles);
        setOpenModals(true)
        console.log(_id);
    }
    // axios.patch

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            // Get the _id of the selected riddle
            const riddleId = selectedRiddle._id;
            console.log(riddleId);
            const updatedData = {
                title: e.target.title.value,
                category: e.target.category.value,
                answer: e.target.answer.value,
                explanation: e.target.explanation.value,
            };

            // Send PATCH request to update the riddle
            const response = await axios.patch(`http://localhost:8000/update/riddles/${riddleId}`, updatedData);

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "update successfully",
                showConfirmButton: false,
                timer: 1500
            });
            refetch();

        } catch (error) {
            console.error(error);
            // Handle errors (e.g., show an error message to the user)
        }
    };

    //---------------------------------------update category----------------------------

    const [openModalCategory, setOpenModalCategory] = useState(false);
    const [selectCategory, setSelectCategory] = useState(null);

    const editCategory = (_id) => {
        const selectedCategories = categories?.data?.find(category => category._id === _id);
        console.log(selectedCategories);
        setSelectCategory(selectedCategories);
        setOpenModalCategory(true)
        console.log(_id);
    }

    const handleCategoryUpdate = async (e) => {
        e.preventDefault();

        try {
            const categoryId = selectCategory._id; // Replace with the actual category ID
            const categoryTitle = e.target.elements.categoryTitle.value;
            const image = e.target.elements.image.files[0];

            // Create FormData to handle file upload
            const formData = new FormData();
            formData.set('categoryTitle', categoryTitle);
            formData.set('image', image);

            // Make axios.patch request
            const response = await axios.patch(`http://localhost:8000/update/category/${categoryId}`, formData);

            categoriesRefetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Update successfully",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error('Error updating category:', error);
            // Handle errors, show an error message, etc.
        }
    };

    // ---------------dlt user----------
    const handleUser = async (id) => {
        try {

            console.log(id);

            const response = await axios.delete(`http://localhost:8000/user/delete?id=${id}`);
            const users = users.filter(user => user.id !== id);
            console.log(response.data);

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Delete successfully",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    }

    return (
        // <div className="overflow-x-auto min-h-screen">
        //     <table className="table table-zebra">
        //         {/* head */}
        //         <thead className='bg-black text-white'>
        //             {
        //                 type === 'users' && <tr className='text-lg text-center'>
        //                     <th>بۇيرۇق</th>
        //                     <th>ئېلخەت</th>
        //                     <th>ئىسىم</th>
        //                     <th>نومۇر</th>
        //                 </tr>
        //             }
        //             {
        //                 type === 'division' && <tr className='text-lg text-center'>
        //                     <th>بۇيرۇق</th>
        //                     <th>تۈر</th>
        //                     <th>نومۇر</th>
        //                 </tr>
        //             }
        //             {
        //                 type === 'riddle' && <tr className='text-lg text-center'>
        //                     <th>بۇيرۇق</th>
        //                     <th>تۈر</th>
        //                     <th>نومۇر</th>
        //                     <th>تۈر</th>
        //                     <th>نومۇر</th>
        //                 </tr>
        //             }
        //         </thead>
        //         <tbody>
        //             {
        //                 type === 'users' && users && users.map((user, index) =>
        //                     <tr key={index} className='text-center'>
        //                         <td className='flex justify-center items-center gap-4'>
        //                             <button onClick={() => handleUser(user._id)} className='bg-[#FAB345] text-red-500 px-8 py-2 rounded-full'>ئۆچۈرۈش</button>
        //                         </td>
        //                         <td>{user?.email}</td>
        //                         <td>{user?.role}</td>
        //                         <th>{index + 1}</th>
        //                     </tr>
        //                 )
        //             }
        //             {/* row 2 */}
        //             {type === 'division' && categories?.data?.map(category => (
        //                 <tr key={category._id} className='text-center'>
        //                     <td className='flex justify-center items-center gap-4'>
        //                         <button onClick={() => handleDeleteCategory(category._id)} className='bg-[#FAB345] text-red-500 px-8 py-2 rounded-full'>ئۆچۈرۈش</button>
        //                         {/* <button   className='bg-[#01D9FE] text-white px-8 py-2 rounded-full'>تۈزىتىش</button> */}
        //                         <div className="mx-auto flex items-center justify-center">
        //                             <button onClick={() => editCategory(category._id)} className="bg-[#0095FF] text-white p-2 rounded-lg">تۈزىتىش</button>
        //                             <div className={` flex justify-center items-center z-[100] ${openModalCategory ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 backdrop-blur-sm bg-black/20 duration-100`}>
        //                                 <div className={`absolute max-w-md p-4 text-center bg-white drop-shadow-2xl rounded-lg ${openModalCategory ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}`}>
        //                                     <svg onClick={() => setOpenModalCategory(false)} className="w-8 mx-auto mr-0 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#c51636"></path></g></svg>
        //                                     <form onSubmit={handleCategoryUpdate} className='pb-10 space-y-5'>
        //                                         <input type="text" name="categoryTitle"
        //                                             defaultValue={selectCategory ? selectCategory.categoryTitle : ''}
        //                                             placeholder="پارول" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end" />
        //                                         <input type="file"
        //                                             name="image"
        //                                             defaultValue={selectCategory ? selectCategory.image : ''}
        //                                             placeholder="پارول" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end" />
        //                                         <button type='submit' className='py-2 px-8 border border-black rounded-xl'> قوشۇش</button>
        //                                     </form>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </td>
        //                     <td>{category.categoryTitle}</td>
        //                     <th>{category.image}</th>

        //                 </tr>
        //             ))
        //             }

        //             {/* row 3 */}
        //             {
        //                 type === 'riddle' && data?.data?.map(riddles => (
        //                     <tr key={riddles._id} className='text-center'>
        //                         <td className='flex justify-center items-center gap-4'>
        //                             <button onClick={() => handleDeleteRiddle(riddles._id)} className='bg-[#FAB345] text-red-500 px-8 py-2 rounded-full'>ئۆچۈرۈش</button>
        //                             {/* update form information  */}
        //                             <div className="w-72 mx-auto flex items-center justify-center">
        //                                 <button onClick={() => editData(riddles._id)} className="bg-[#0095FF] text-white p-2 rounded-lg">تۈزىتىش</button>
        //                                 <div className={` flex justify-center items-center z-[100] ${openModals ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 backdrop-blur-sm bg-black/20 duration-100`}>
        //                                     <div className={`absolute max-w-md p-4 text-center bg-white drop-shadow-2xl rounded-lg ${openModals ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}`}>
        //                                         <svg onClick={() => setOpenModals(false)} className="w-8 mx-auto mr-0 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#c51636"></path></g></svg>
        //                                         <form onSubmit={handleFormSubmit} className='pb-10 space-y-5'>
        //                                             <h1>يېڭى تېپىشماق قوشۇش</h1>
        //                                             <input
        //                                                 type="text"
        //                                                 name="title"

        //                                                 defaultValue={selectedRiddle ? selectedRiddle.title : ''}
        //                                                 className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end"
        //                                             />
        //                                             <select
        //                                                 name="category"
        //                                                 className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end"
        //                                             >
        //                                                 {categories && categories?.data?.map((category) => (
        //                                                     console.log(category),
        //                                                     <option key={category._id} defaultValue={selectedRiddle ? selectedRiddle.category.category : ""}>
        //                                                         {category.categoryTitle}
        //                                                     </option>
        //                                                 ))}

        //                                             </select>
        //                                             <input
        //                                                 type="text"
        //                                                 name="answer"

        //                                                 defaultValue={selectedRiddle ? selectedRiddle.answer : ""}
        //                                                 className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end"
        //                                             />
        //                                             <input
        //                                                 type="text"
        //                                                 name="explanation"

        //                                                 defaultValue={selectedRiddle ? selectedRiddle.explanation : ""}
        //                                                 className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end"
        //                                             />
        //                                             <div className='flex justify-center items-center gap-5'>
        //                                                 <button type='submit' className='py-2 px-8 border bg-gray-200 rounded-xl'>تامام</button>
        //                                                 <button type='submit' className='py-2 px-8 border bg-gray-500 rounded-xl'>قوشۇش</button>
        //                                             </div>
        //                                         </form>

        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </td>
        //                         <td>{riddles.title}</td>
        //                         <th>{riddles.category}</th>
        //                         <th>{riddles.answer}</th>
        //                         <th>{riddles.explanation}</th>
        //                     </tr>))
        //             }


        //         </tbody>
        //     </table>
        //     {
        //         type === 'division' && <button onClick={() => setOpenModal({ click: true, message: 'division' })}
        //             className='flex justify-center items-center gap-4 bg-green-600 px-8 py-1 rounded-full mx-10 text-white lg:absolute bottom-8 my-5 left-10'>
        //             <h1 className='text-lg font-bold'>+</h1>
        //             <h1>يېڭى تۈر قوشۇش</h1>
        //         </button>
        //     }
        //     {
        //         type === 'riddle' && <button onClick={() => setOpenModal({ click: true, message: 'riddle' })}
        //             className='flex justify-center items-center gap-4 bg-green-600 px-8 py-1 rounded-full mx-10 text-white lg:absolute bottom-8 left-10 my-5'>
        //             <h1 className='text-lg font-bold'>+</h1>
        //             <h1>يېڭى تۈر قوشۇش</h1>
        //         </button>
        //     }
        //     {/*----------------------------------- Category add form ------------------------- */}
        //     {
        //         openModal?.click && <div className="lg:w-64 mx-auto lg:px-10 flex items-center justify-center">
        //             <div className={` flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 backdrop-blur-sm bg-black/20 duration-100`}>
        //                 <div className={`absolute max-w-md p-4 text-center bg-white drop-shadow-2xl rounded-lg ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}`}>
        //                     <svg onClick={() => setOpenModal(false)} className="w-8 mx-auto mr-0 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#c51636"></path></g></svg>
        //                     {
        //                         openModal?.message === 'division' &&
        //                         <form onSubmit={handleCategoryAdd} className='pb-10 space-y-5'>
        //                             <input type="text" name="categoryTitle" onChange={(e) => setCategoryTitle(e.target.value)} placeholder="پارول" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end" />
        //                             <input type="file"
        //                                 name="image"
        //                                 onChange={(e) => setImage(e.target.files[0])}

        //                                 placeholder="پارول" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end" />
        //                             <button type='submit' className='py-2 px-8 border border-black rounded-xl'> قوشۇش</button>
        //                         </form>
        //                     }

        //                     {/*----------------------------------- Riddle add form ------------------------- */}
        //                     {
        //                         openModal?.message === 'riddle' &&
        //                         <form onSubmit={handleSubmit} className='pb-10 space-y-5'>
        //                             <h1>يېڭى تېپىشماق قوشۇش</h1>
        //                             <input
        //                                 type="text"
        //                                 name="title"
        //                                 placeholder="تۈر"
        //                                 className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end"
        //                                 value={formData.title}
        //                                 onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        //                             />
        //                             <select
        //                                 name="category"
        //                                 className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end"
        //                                 value={formData.category}
        //                                 onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        //                             >
        //                                 <option value="">Select Category</option>
        //                                 {categories && categories?.data?.map((category) => (
        //                                     console.log(category),
        //                                     <option key={category._id}>
        //                                         {category.categoryTitle}
        //                                     </option>
        //                                 ))}
        //                                 {console.log(categories.data)}
        //                             </select>
        //                             <input
        //                                 type="text"
        //                                 name="answer"
        //                                 placeholder="جاۋاب"
        //                                 className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end"
        //                                 value={formData.answer}
        //                                 onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
        //                             />
        //                             <input
        //                                 type="text"
        //                                 name="explanation"
        //                                 placeholder="ئىزاھات"
        //                                 className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end"
        //                                 value={formData.explanation}
        //                                 onChange={(e) => setFormData({ ...formData, explanation: e.target.value })}
        //                             />
        //                             <div className='flex justify-center items-center gap-5'>
        //                                 <button type='submit' className='py-2 px-8 border bg-gray-500 rounded-xl'>قوشۇش</button>
        //                             </div>
        //                         </form>
        //                     }
        //                 </div>
        //             </div>
        //         </div>
        //     }
        // </div>
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
                        type === 'users' && users && users.map((user, index) =>
                            <tr key={index} className='text-center'>
                                <td className='flex justify-center items-center gap-4'>
                                    <button onClick={() => handleUser(user._id)} className='bg-[#FAB345] text-red-500 px-8 py-2 rounded-full'>ئۆچۈرۈش</button>
                                </td>
                                <td>{user?.email}</td>
                                <td>{user?.role}</td>
                                <th>{index + 1}</th>
                            </tr>
                        )
                    }
                    {/* row 2 */}
                    {type === 'division' && categories?.data?.map(category => (
                        <tr key={category._id} className='text-center'>
                            <td className='flex justify-center items-center gap-4'>
                                <button onClick={() => handleDeleteCategory(category._id)} className='bg-[#FAB345] text-red-500 px-8 py-2 rounded-full'>ئۆچۈرۈش</button>
                                {/* <button   className='bg-[#01D9FE] text-white px-8 py-2 rounded-full'>تۈزىتىش</button> */}
                                <div className="mx-auto flex items-center justify-center">
                                    <button onClick={() => editCategory(category._id)} className="bg-[#0095FF] text-white p-2 rounded-lg">تۈزىتىش</button>
                                    <div className={`fixed flex justify-center items-center z-[100] ${openModalCategory ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 backdrop-blur-sm bg-black/20 duration-100`}>
                                        <div className={`absolute max-w-md p-4 text-center bg-white drop-shadow-2xl rounded-lg ${openModalCategory ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}`}>
                                            <svg onClick={() => setOpenModalCategory(false)} className="w-8 mx-auto mr-0 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#c51636"></path></g></svg>
                                            <form onSubmit={handleCategoryUpdate} className='pb-10 space-y-5'>
                                                <input type="text" name="categoryTitle"
                                                    defaultValue={selectCategory ? selectCategory.categoryTitle : ''}
                                                    placeholder="پارول" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end" />
                                                <input type="file"
                                                    name="image"
                                                    defaultValue={selectCategory ? selectCategory.image : ''}
                                                    placeholder="پارول" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end" />
                                                <button type='submit' className='py-2 px-8 border border-black rounded-xl'> قوشۇش</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{category.categoryTitle}</td>
                            <th>{category.image}</th>

                        </tr>
                    ))
                    }

                    {/* row 3 */}
                    {
                        type === 'riddle' && data?.data?.map(riddles => (
                            <tr key={riddles._id} className='text-center'>
                                <td className='flex justify-center items-center gap-4'>
                                    <button onClick={() => handleDeleteRiddle(riddles._id)} className='bg-[#FAB345] text-red-500 px-8 py-2 rounded-full'>ئۆچۈرۈش</button>
                                    {/* update form information  */}
                                    <div className="w-72 mx-auto flex items-center justify-center">
                                        <button onClick={() => editData(riddles._id)} className="bg-[#0095FF] text-white p-2 rounded-lg">تۈزىتىش</button>
                                        <div className={`fixed flex justify-center items-center z-[100] ${openModals ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 backdrop-blur-sm bg-black/20 duration-100`}>
                                            <div className={`absolute max-w-md p-4 text-center bg-white drop-shadow-2xl rounded-lg ${openModals ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}`}>
                                                <svg onClick={() => setOpenModals(false)} className="w-8 mx-auto mr-0 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#c51636"></path></g></svg>
                                                <form onSubmit={handleFormSubmit} className='pb-10 space-y-5'>
                                                    <h1>يېڭى تېپىشماق قوشۇش</h1>
                                                    <input
                                                        type="text"
                                                        name="title"

                                                        defaultValue={selectedRiddle ? selectedRiddle.title : ''}
                                                        className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end"
                                                    />
                                                    <select
                                                        name="category"
                                                        className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end"
                                                    >
                                                        {categories && categories?.data?.map((category) => (
                                                            console.log(category),
                                                            <option key={category._id} defaultValue={selectedRiddle ? selectedRiddle.category.category : ""}>
                                                                {category.categoryTitle}
                                                            </option>
                                                        ))}

                                                    </select>
                                                    <input
                                                        type="text"
                                                        name="answer"

                                                        defaultValue={selectedRiddle ? selectedRiddle.answer : ""}
                                                        className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="explanation"

                                                        defaultValue={selectedRiddle ? selectedRiddle.explanation : ""}
                                                        className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end"
                                                    />
                                                    <div className='flex justify-center items-center gap-5'>
                                                        <button type='submit' className='py-2 px-8 border bg-gray-200 rounded-xl'>تامام</button>
                                                        <button type='submit' className='py-2 px-8 border bg-gray-500 rounded-xl'>قوشۇش</button>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
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
            {/*----------------------------------- Category add form ------------------------- */}
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

                            {/*----------------------------------- Riddle add form ------------------------- */}
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
                                        {allcategories && allcategories?.data?.map((category) => (
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