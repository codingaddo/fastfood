'use client'
import React, { createContext, useContext, useState } from 'react'

const myContext =  createContext()
export const Context = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)


  return (
    <myContext.Provider value={{
      isOpen,
      setIsOpen
    }}>
      {children}
    </myContext.Provider>
  )
}

export const useMyContext = ()=>useContext(myContext)

