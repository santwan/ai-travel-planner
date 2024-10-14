import React from 'react'
import { Button } from '../ui/button'


const Hero = () => {
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-bold leading-snug'> <span className='text-4xl '>Discover</span><br /> <span className='text-orange-500'>Your Next Adventure with AI</span> <br />Personalized Itineraries at Your Fingertips</h1>

        <p className='m-4 max-w-fit'>
            <span className=''>Your personal trip planner adn travel curator, creating custom <br /> itenaries tailores to your interests and budget</span>
        </p>

        <Button>Get Started</Button>
    </div>
  )
}

export default Hero