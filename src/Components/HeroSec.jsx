import React from 'react'


const HeroSec = () => {
    return (
        <div className='w-full min-h-[60vh] flex flex-col items-center justify-center'>
            <div className='text-6xl font-bold text-center uppercase border-b-8 border-red-600 p-2'>
                <h1>Get Informed</h1>
                <h1>Get Inspired</h1>
            </div>
            <p className='p-4 text-2xl font-semibold'>Stories Curated For You</p>
            <button className='bg-red-600 mt-4 p-3 px-7 text-xl rounded-sm cursor-pointer'>Explore now</button>
        </div>
    )
}

export default HeroSec