'use client'
import React, { useEffect, useState } from 'react'

const Map = () => {
    const [size,setSize] =useState(0)

    useEffect(()=>{
        setSize(window.innerWidth)
        console.log(size)

    },[size])
  return (
    
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5793.335696430337!2d-80.5137902!3d43.4466526!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf445fe34ddbb%3A0x96a92f33d6f8e9f7!2s41%20Brybeck%20Crescent%2C%20Kitchener%2C%20ON%20N2M%202C5%2C%20Canada!5e0!3m2!1sen!2sgh!4v1713901237870!5m2!1sen!2sgh" width={size>878?1180:320} height="450" style={{border:1}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
    
  )
}

export default Map