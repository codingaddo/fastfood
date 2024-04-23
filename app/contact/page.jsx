import React from 'react'
import Header from '../components/Header'
import ContactContainer from '../components/ContactContainer'
import { FaMailBulk, FaPhoneSquare, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa'
import Map from '../components/Map'

const page = () => {
  return (
    <>
    <Header text={'Contact us'} color={'text-white'} img={'/food.png'}/>
    <div className='py-24 px-10 flex flex-col md:flex-row items-center justify-center gap-16'>
      <ContactContainer url={'tel:+1(519)725-4996'} title={'Give us a call'} info={'0551817972'} icon={<FaPhoneSquare className='text-[#fa6969] text-3xl'/>}/>
      <ContactContainer url={'mailto:xyx@gmail.com'} title={'Send us a mail'} info={'xyz@gmail.com'} icon={<FaMailBulk className='text-[#fa6969] text-3xl'/>}/>
      <ContactContainer url={'https://wa.me/+15197254996'} title={'whatsapp us'} info={'0551817972'} icon={<FaWhatsapp className='text-[#fa6969] text-3xl'/>}/>
    </div>
    <div className='flex items-center justify-center py-10'>
      <Map/>
    </div>

    </>
  )
}

export default page