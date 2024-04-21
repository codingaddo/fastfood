import React from 'react'
import Header from '../components/Header'
import MenuContainer from '../components/MenuContainer'

const page = () => {
  return (
    <>
        <Header text={'menu'} img={'/gb.jpg'}/>
        <div className='flex flex-col items-center md:px-10 py-24 px-5'>

        <h1>It&apos;s African & Healthy</h1>
        <div>Types</div>
        <div className='flex flex-wrap justify-center  gap-10'>
            <MenuContainer name={'Asorted Waakye'} price={100}/>
            <MenuContainer name={'Asorted Waakye'} price={100}/>
            <MenuContainer name={'Asorted Waakye'} price={100}/>
            <MenuContainer name={'Asorted Waakye'} price={100}/>
            <MenuContainer name={'Asorted Waakye'} price={100}/>
            <MenuContainer name={'Asorted Waakye'} price={100}/>
            <MenuContainer name={'Asorted Waakye'} price={100}/>
        </div>
        </div>

    </>
  )
}

export default page