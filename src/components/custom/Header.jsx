import React from 'react'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <div className=" shadow-sm flex justify-between items-center">
        <img className='h-20' src="/logo.svg" alt="" />
        <Button>Sign In</Button>
    </div>
  )
}

export default Header