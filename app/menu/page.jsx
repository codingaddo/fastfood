'use client'
import React from 'react'
import Header from '../components/Header'
import MenuContainer from '../components/MenuContainer'
import PopUp from '../components/PopUp'

const page = () => {
  return (
    <>
        <Header text={'menu'} img={'/gb.jpg'} color={'text-white'}/>
        <div className='flex flex-col items-center md:px-10 pt-14 pb-24 px-5'>

        <h1 className='uppercase font-semibold text-center text-3xl md:text-5xl text-slate-600 pb-2'>It&apos;s African & Healthy</h1>
        <h2 className='text-2xl text-center capitalize text-slate-500 pb-10 '>Experience the african taste</h2>
        <div className='flex flex-wrap justify-center  gap-10'>
            <MenuContainer name={'Asorted Waakye'} price={100} image={'/wk.jpg'} url={'/'}/>
            <MenuContainer name={'Asorted Waakye'} price={100} image={'/wk.jpg'}/>
            <MenuContainer name={'Asorted Waakye'} price={100} image={'/wk.jpg'}/>
            <MenuContainer name={'Asorted Waakye'} price={100} image={'/wk.jpg'}/>
            <MenuContainer name={'Asorted Waakye'} price={100} image={'/wk.jpg'}/>
            <MenuContainer name={'Asorted Waakye'} price={100} image={'/wk.jpg'}/>
            <MenuContainer name={'Asorted Waakye'} price={100} image={'/wk.jpg'}/>
            {/* <PopUp/> */}
        </div>
        </div>

    </>
  )
}

export default page