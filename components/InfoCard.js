import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const InfoCard = ({img, location, title, description, star, price, details, NightStay, id}) => {
    let Tot = (NightStay * price)
    console.log('price', price)
    console.log('NightStay',typeof NightStay)
    console.log(Tot)
    return (
        <Link href={`/search/${id}`}>
        <div className='flex flex-col py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t sm:flex-row'>
            <div className='relative h-96 w-full sm:h-48 sm:w-72 md:h-52 md:w-80 flex-shrink-0 '>
                <Image src={img} layout='fill' objectFit='cover' className='rounded-lg' />
            </div>
            <div className='flex flex-col flex-grow pl-5'>
                <div className='flex justify-between'>
                    <p>{details} {location}</p>
                    <HeartIcon className='cursor-pointer h-7' />
                </div>
                <h4 className='text-xl'>{title}</h4>
                <div className='border-b w-10 pt-2' />
                <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
                <div className='flex justify-between items-end pt-5'>
                    <p className='flex items-center'> 
                        <StarIcon className='h-5 text-red-400' />
                        {star}
                    </p>
                    <div>
                        <p className='text-lg font-semibold pb-2 lg:text-2xl'>${price} / <span className='font-normal'>night</span> </p>
                        <p className='text-right font-extralight underline'>${Tot} total</p>
                    </div>
                </div>
            </div>
        </div>
       </ Link>
    )
}

export default InfoCard
