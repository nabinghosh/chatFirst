import React from 'react'
import { Button } from '@/components/ui/button'

const AuthButtons = () => {
  return (
    <div>
        <div className='flex flex-row items-center space-x-4'>
                    <Button className='hover:bg-blue-600 transition duration-300'>Sign In</Button>
                    <Button className='hover:bg-blue-600 transition duration-300'>Log In</Button>
                </div>
    </div>
  )
}

export default AuthButtons