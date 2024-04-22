import React from 'react'
import Button from './Button'
import { FaCartShopping } from "react-icons/fa6";


const List = ({size,price,url}) => {
  return (
    
        <div className='flex gap-7 justify-between  items-center w-full'>
            <h2 className='text-left'>{size}</h2>
            <h2 className='text-left'><span>CA&#36;</span>{price}</h2>
            <Button txt={'Order'} icon={<><FaCartShopping /></>} url={url} width={'80px'}/>
         </div>
    
  )
}

export default List