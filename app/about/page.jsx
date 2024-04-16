import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'

const page = () => {
  return (
    < >
      <div>
        <Header text={'about us'} img={'/wk.jpg'}/>
      </div>
      <section className='flex md:flex-row flex-col px-7  md:px-16 justify-center gap-16 py-16'>
        <section className='md:w-[50%] text-center items-center flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-5xl uppercase text-slate-700'>Welcome</h2>
            <h3 className='text-lg text-slate-400'>Who We Are</h3>
          </div>
          <p className='text-slate-600 text-xl md:text-[1.05em]'>
          The cook, combines her passion for protein chemistry and food science to create appetizing foods that please everyone&apos;s palate. Here, we use simple natural African spices and ingredients to elevate our cooking. Ghanaian cooking is slow with lots of patience and love, and that’s what we bring to our table so enjoy and let us know how we did.
          </p>
          <div className='animate-bounce pt-5'>
          <Button txt={'Order Now'} url={'/menu'}/>
        </div>
        </section>
        <section className='md:w-[50%]'>
          Logo
        </section>
      </section>
     
    </>
  )
}

export default page