import Link from 'next/link'
import React from 'react'
import { challengesDate } from '../challengesData'

function Challenges() {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 px-12 gap-5 mx-auto pt-10 border-t'>
      {challengesDate && challengesDate.map(challenge =>
        <Link href={challenge.href} className="max-w-sm mx-auto border rounded-lg overflow-hidden shadow-xl text-left">
          <div className="px-6 py-4">
            <div className="text-lg mb-4">{challenge.name}</div>
            <p
              className="text-gray-700 text-xs font-light text-left"
              dangerouslySetInnerHTML={{ __html: challenge.description }}
            />
          </div>
        </Link>)
      }
    </div>
  )
}

export default Challenges

{/* <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div> */}