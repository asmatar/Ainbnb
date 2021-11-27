import React from 'react'

const Footer = () => {
    return (
        <div className='grid place-items-center grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-x-14 gap-y-10 px-20 sm:px-24 py-14 mx-auto bg-gray-100 text-gray-600'>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>ABOUT</h5>
                <p className='cursor-pointer hover:underline'>How Airbnb works</p>
                <p className='cursor-pointer hover:underline'>Newsromm</p>
                <p className='cursor-pointer hover:underline'>Investors</p>
                <p className='cursor-pointer hover:underline'>Airbnb Plus</p>
                <p className='cursor-pointer hover:underline'>Airnbnb Luxe</p>
            </div>

            <div className=' space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>COMMUNITY</h5>
                <p className='cursor-pointer hover:underline'>Accessibility</p>
                <p className='cursor-pointer hover:underline'>This is not a real site</p>
                <p className='cursor-pointer hover:underline'>become a host</p>
                <p className='cursor-pointer hover:underline'>project with nextjs</p>
                <p className='cursor-pointer hover:underline'>TAilwind css</p>
            </div>

            <div className=' space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>HOST</h5>
                <p className='cursor-pointer hover:underline'>become a member</p>
                <p className='cursor-pointer hover:underline'>News</p>
                <p className='cursor-pointer hover:underline'>Investors</p>
                <p className='cursor-pointer hover:underline'>What else ?</p>
                <p className='cursor-pointer hover:underline'>Rate Airbnb</p>
            </div>

            <div className=' space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>COMMENTS</h5>
                <p className='cursor-pointer hover:underline'>let's check my linkedin</p>
                <p className='cursor-pointer hover:underline'>my github</p>
                <p className='cursor-pointer hover:underline'>Stay in touch ?</p>
                <p className='cursor-pointer hover:underline'>full stack JS</p>
                <p className='cursor-pointer hover:underline'>let's have a call</p>
            </div>
        </div>
    )
}

export default Footer
