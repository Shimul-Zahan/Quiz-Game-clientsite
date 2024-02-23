import React from 'react'

const Table = () => {
    return (
        <div className="overflow-x-auto px-10 py-8">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr className='text-lg text-center'>
                        <th>بۇيرۇق</th>
                        <th>ئېلخەت</th>
                        <th>ئىسىم</th>
                        <th>نومۇر</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-center'>
                        <td>
                            <button className='bg-[#FAB345] px-8 py-2 rounded-full'>ئۆچۈرۈش</button>
                        </td>
                        <td></td>
                        <td></td>
                        <th>1</th>
                    </tr>
                    {/* row 2 */}
                    <tr className='text-center bg-[#D9D9D9]'>
                        <td>
                            <button className='bg-[#FAB345] px-8 py-2 rounded-full'>ئۆچۈرۈش</button>
                        </td>
                        <td></td>
                        <td></td>
                        <th>2</th>
                    </tr>
                    {/* row 3 */}
                    <tr className='text-center'>
                        <td>
                            <button className='bg-[#FAB345] px-8 py-2 rounded-full'>ئۆچۈرۈش</button>
                        </td>
                        <td></td>
                        <td></td>
                        <th>3</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table