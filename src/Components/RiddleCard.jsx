import React from 'react'

const RiddleCard = () => {
    return (
        <div className="rounded-lg border shadow-sm w-full max-w-md mx-auto bg-white">
            {/* Product Title */}
            <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold ">Classic Leather Jacket</h3>
                <p className="text-sm text-gray-500">Made with genuine leather, our Classic Leather Jacket is the perfect addition to every wardrobe.</p>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facilis nam tempora culpa ipsa repellendus praesentium accusamus autem asperiores quia recusandae dolorum maxime laboriosam libero cum quibusdam quaerat, obcaecati sit?</p>
            </div>
            <div className="px-6 py-4 flex flex-col gap-4">
                <div className="flex justify-between items-end gap-2">
                    <p className="text-sm rounded-lg text-center py-2 px-8 cursor-pointer bg-[#FAB345] text-black">ساقلاش</p>
                    <p className="text-sm rounded-lg text-center py-2 px-8 cursor-pointer bg-[#95EFFE] text-black">ئىزاھات</p>
                    <p className="text-sm rounded-lg text-center py-2 px-8 cursor-pointer bg-[#5EFA4563] text-black">جاۋاب</p>
                </div>
            </div>
        </div>
    )
}

export default RiddleCard