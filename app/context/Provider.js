'use client'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

const Provider = ({children}) => {
  return (
    <>
    <ProgressBar
        color='#fa6969'
        height='5px'
        shallowRouting
        options={
            {
                showSpinner:false,
            }
        }
        
    />
        {children}
    </>
  )
}

export default Provider