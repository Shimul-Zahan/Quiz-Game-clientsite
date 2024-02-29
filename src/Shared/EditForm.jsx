
const EditForm = () => {
  return (
    <div> <div> <form className='pb-10 space-y-5'>
    <h1>يېڭى تېپىشماق قوشۇش</h1>
    <input
        type="text"
        name="title"
        placeholder="تۈر"
        className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end"
    />
    <select
        name="category"
        className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end"
    >
        <option value="">Select Category</option>
        <option >
            category
        </option>
    </select>
    <input
        type="text"
        name="answer"
        placeholder="جاۋاب"
        className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end"
    />
    <input
        type="text"
        name="explanation"
        placeholder="ئىزاھات"
        className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring text-end"
    />
    <div className='flex justify-center items-center gap-5'>
        <button type='submit' className='py-2 px-8 border bg-gray-200 rounded-xl'>تامام</button>
        <button type='submit' className='py-2 px-8 border bg-gray-500 rounded-xl'>قوشۇش</button>
    </div>
</form></div></div>
  )
}

export default EditForm