import Image from 'next/image'
import React from 'react'
import Button from './Button'

const MenuContainer = () => {
  return (
    <div className='flex flex-col items-center bg-slate-100 rounded-xl w-[300px]'>
        <div>
            <Image
                src={'/wk.jpg'}
                width={200}
                height={200}
                alt=''
            />
        </div>
        <div>
            <h2>Asorted Waakye</h2>
            <h2>Price</h2>
        </div>
        <div>
            <Button txt={'Order'}/>
        </div>
    </div>
  )
}

export default MenuContainer