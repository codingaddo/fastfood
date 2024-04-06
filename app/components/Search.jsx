import React from 'react'
import {FaSearch} from 'react-icons/fa'

const Search = () => {
  return (
    <div className='flex'>
        <div>
         <input type="text" placeholder='Search' className='py-3 px-3 rounded-l-xl outline-none text-center' />
        </div>
        <button className='bg-slate-300 rounded-r-xl px-3 text-[#fa6969]'>
            <FaSearch/>
        </button>
    </div>
  )
}

export default Search