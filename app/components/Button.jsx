import React from 'react'

const Button = ({txt,animate}) => {
  return (
    <button className={`bg-[#fa6969] text-white text-sm rounded-2xl font-semibold py-4 px-5 w-[150px] ease-in-out duration-500 shadow-xl hover:shadow-2xl hover:scale-[1.1] hover:bg-white hover:text-[#fa6969]`}>
        {txt}
    </button>

  )
}

export default Button