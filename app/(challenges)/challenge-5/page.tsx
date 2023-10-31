import React from 'react'

function Page() {
  return (
    <main className="bg-gray-200 flex w-full min-h-screen items-center justify-center">
      <div className="w-[600px] border rounded-lg overflow-hidden bg-white">
        <div className='bg-pink-600  p-6 flex rounded-t-md items-center justify-between text-white'>
          <div>
            <span>14</span>
            <span>AUG 2020</span>
          </div>
          <div>
            <div>1:10pm</div>
            <div>Friday</div>
          </div>
        </div>

        <div className='mx-4 mt-4 p-6'>
          <label htmlFor='final' className='flex items-center gap-3 border-l-[3px] pl-4 py-3 border-l-red-600 cursor-pointer hover:bg-gray-50'>
            <input className='w-5 h-5 rounded-full checked:accent-pink-600 cursor-pointer' type='checkbox' id='final' />
            <label htmlFor='final' className='cursor-pointer'>Final design delivery</label>
          </label>
          <label htmlFor='final' className='flex items-center gap-3 border-l-[3px] pl-4 py-3  border-l-green-600 bg-gray-50 line-through hover:bg-gray-50'>
            <input checked className='w-5 h-5 rounded-full checked:accent-pink-600 cursor-pointer' type='checkbox' id='final' />
            <label htmlFor='final' className='cursor-pointer'>Final design delivery</label>
          </label>

        </div>

        <div className="bg-white p-4 flex items-center space-x-4 rounded-b-md">
          <textarea
            rows={2}
            className="flex-1 px-4 py-2 border outline-none rounded-md"
            placeholder="Add a todo..."
          ></textarea>
          <button
            className="bg-pink-600 text-center text-2xl font-semibold outline-none px-2
             text-white rounded-md mb-auto"
          >
            +
          </button>
        </div>
      </div>
    </main>
  )
}

export default Page