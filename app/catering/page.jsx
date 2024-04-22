import React from 'react'
import CateringContainer from '../components/CateringContainer'
import Header from '../components/Header'
import List from '../components/List'

const page = () => {
  return (
    <>
    <Header text={'Catering Services'} img={'/cate.jpg'} color={'text-white'}/>
    <div className='flex flex-col items-center md:px-5 pt-14 pb-24 px-5'>
      <div></div>
      <div className='flex flex-wrap gap-7'>
        <CateringContainer foodName={'Asorted Waakye'}>
                <List price={100} size={'Small Tray'}/> 
                <List price={200} size={'Medium Tray'}/>
                <List price={300} size={'Large Tray'}/>
                <List price={400} size={'Small Cooler'}/>
                <List price={500} size={'Large Cooler'}/>
        </CateringContainer>
        <CateringContainer  foodName={'Asorted Waakye'}>
                 <List price={100} size={'Small Tray'}/> 
                <List price={200} size={'Medium Tray'}/>
                <List price={300} size={'Large Tray'}/>
                <List price={400} size={'Small Cooler'}/>
                <List price={500} size={'Large Cooler'}/>
        </CateringContainer>
      </div>
    </div>
    </>

  )
}

export default page