import React from 'react'

function Article({price, time, itemName, img}) {
  return (
    <div className="relative hover:z-5 hover:bg-slate-800 bg-gray-500 ">
    <div className='w-[200px] h-[250px] px-4 py-2'>
        <div className='text-white flex items-center gap-3 absolute'>
            <h1 className=' font-bold text-md'>{price}</h1>
            <p className='text-[10px]'>{time}</p>
        </div>
        <div className='p-5 absolute -left-4 top-[50px]'>
        <img src={img}/>
        </div>
        <h1 className='absolute bottom-3 text-white text-sm'>{itemName}</h1>
    </div>
  </div>
  )
}

export default Article