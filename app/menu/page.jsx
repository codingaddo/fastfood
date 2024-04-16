import React from 'react'
import Header from '../components/Header'
import MenuContainer from '../components/MenuContainer'

const page = () => {
  return (
    <>
        <Header text={'menu'} img={'/gb.jpg'}/>
        <h1>It&apos;s African & Healthy</h1>
        <div>Types</div>
        <div>
            <MenuContainer/>
        </div>
    </>
  )
}

export default page