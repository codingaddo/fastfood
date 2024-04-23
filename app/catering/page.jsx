import React from 'react'
import CateringContainer from '../components/CateringContainer'
import Header from '../components/Header'
import List from '../components/List'

const page = () => {
  return (
    <>
    <Header text={'Catering Services'} img={'/cate.jpg'} color={'text-white'}/>
    <div className='flex flex-col items-center pt-14 pb-24 px-5'>
      <div>
      <h1 className='uppercase font-semibold text-center text-3xl md:text-5xl text-slate-600 pb-2'>It&apos;s African & Healthy</h1>
        <h2 className='text-2xl text-center capitalize text-slate-500 pb-10 '>Experience the african taste</h2>
      </div>
      <div className='flex flex-wrap justify-center gap-10'>
        <CateringContainer foodName={'Asorted Waakye'} url={'/gb.jpg'}>
                <List url={''} price={100} size={'Small Tray'}/> 
                <List url={''} price={200} size={'Medium Tray'}/>
                <List url={''} price={300} size={'Large Tray'}/>
                <List url={''} price={400} size={'Small Cooler'}/>
                <List url={''} price={500} size={'Large Cooler'}/>
        </CateringContainer>
        <CateringContainer  foodName={'Asorted Waakye'}>
                <List url={''} price={100} size={'Small Tray'}/> 
                <List url={''} price={200} size={'Medium Tray'}/>
                <List url={''} price={300} size={'Large Tray'}/>
                <List url={''} price={400} size={'Small Cooler'}/>
                <List url={''} price={500} size={'Large Cooler'}/>
        </CateringContainer>
        <CateringContainer  foodName={'Asorted Waakye'}>
                <List url={''} price={100} size={'Small Tray'}/> 
                <List url={''} price={200} size={'Medium Tray'}/>
                <List url={''} price={300} size={'Large Tray'}/>
                <List url={''} price={400} size={'Small Cooler'}/>
                <List url={''} price={500} size={'Large Cooler'}/>
        </CateringContainer>
        <CateringContainer  foodName={'Asorted Waakye'}>
                <List url={''} price={100} size={'Small Tray'}/> 
                <List url={''} price={200} size={'Medium Tray'}/>
                <List url={''} price={300} size={'Large Tray'}/>
                <List url={''} price={400} size={'Small Cooler'}/>
                <List url={''} price={500} size={'Large Cooler'}/>
        </CateringContainer>
        <CateringContainer  foodName={'Asorted Waakye'}>
                <List url={''} price={100} size={'Small Tray'}/> 
                <List url={''} price={200} size={'Medium Tray'}/>
                <List url={''} price={300} size={'Large Tray'}/>
                <List url={''} price={400} size={'Small Cooler'}/>
                <List url={''} price={500} size={'Large Cooler'}/>
        </CateringContainer>
      </div>
    </div>
    </>

  )
}

export default page