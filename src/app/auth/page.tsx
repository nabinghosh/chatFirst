import React from 'react'
import AuthButtons from './AuthButtons'
import Image from 'next/image'

const page = () => {
  return (
    <div className='flex flex-col md:flex-row h-screen w-full'>
        <div className='flex-1 flex overflow-hidden dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-700 bg-gradient-to-r from-slate-100 to-slate-200 relative justify-center items-center'>
            <div className='flex flex-col items-center p-8 bg-white dark:bg-slate-900 rounded-lg shadow-lg'>
                <h1 className='text-4xl font-bold text-center mb-4'>
                    Welcome to <span className='text-blue-600'>chatFirst</span>
                </h1>
                <p className='text-center mb-4 text-gray-700 dark:text-gray-300'>Log in to continue</p>
                <AuthButtons/>
            </div>
        </div>
        <div className='flex-1 flex justify-center items-center md:order-last order-first'>
            <Image src='/authBanner.png' alt='Auth Banner' height={4000} width={4000} className='object-cover dark:opacity-60 opacity:90 pointer-events-none select-none h-full w-full rounded-lg shadow-lg' />
        </div>
    </div>
  )
}

export default page