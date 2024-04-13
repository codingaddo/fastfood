import React, { createContext, useContext, useState } from 'react'

const myContext =  createContext()
const Context = () => {
    const [isOpen, setIsOpen] = useState(false)


  return (
    <myContext.Provider value={{
      isOpen,
      setIsOpen
    }}>

    </myContext.Provider>
  )
}

const useMyContext=()=>{
  const Context = useContext(Context)

}

export { Context, useMyContext }
