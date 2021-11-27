import { StarIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
const Room = (accommodationDetail) => { 
    // console.log('dans one room',oneRoom.oneRoom.searchResult)
    console.log('accommodationDetail:', accommodationDetail)
    console.log('dans one room',accommodationDetail.accommodationDetail.searchResult)
    const [room] = useState(accommodationDetail.accommodationDetail.searchResult)
    const [review] = useState(accommodationDetail.review.searchResult)
 
        // to get the information from the url we use the router.query
        const router = useRouter()
    const {Tot, formatedStartDate, formatedEndDate, numberOfGuest} = router.query
console.log('dans id formatedStartDate:', formatedStartDate)
    
    return (
        <>
        <Header />
    
        <div className='max-w-7xl mx-auto p-x-8 sm:px-16'>
        {/* titre review star share */}
        <div className='pt-6'>
             <h2 className='text-3xl font-semibold pb-5'>{room.title}</h2>
             <div className='flex justify-between'> 
                <div className='flex pb-6 text-gray-600'>
                    <div className='flex items-center'>
                        <StarIcon className='h-5 text-red-400' /><p className='text-black mr-1'>{room.star} </p>
                        </div>
                        <span className="underline">({review.length} reviews)</span> 
                    <p className='mx-6'>Superhost</p>
                    <p className='underline'>{room.location}</p>
                </div>
                <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                    <a href="" className='mr-4 ml-1 underline'>Share</a>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <a href="" className='underline ml-1'>Save</a>
                </div>
             </div>
        </div>
        {/* image */}
        
        <div className='flex cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out w-full '>
           
            {/* <div className='cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out w-full '> */}
                <img src={room.img} alt="" layout='fill'
                 objectFit='cover' className='rounded-lg w-10/12 h-5/6 max-h-[600px] mx-auto' />
            {/* </div> */}

        </div>
         {/* leftside: titre, description 1 bedroom, wifi enchancer */}
        <div className='flex py-10 w-full border-b border-solid border-gray-300 mb-6'>
            <div className='w-8/12 pr-20 '>
            <div className='flex border-b border-solid border-gray-300 pb-8 w-full'>
                <div className='  w-full'>
                    <h3 className='text-2xl font-semibold '>{room.details} {room.location}</h3>
                    <p >{room.description}</p>
                </div>
                <div></div>
            </div>
            <div>
                <div className='my-6 border-b border-solid border-gray-300'>

                    <div className="flex">
                    <img src="/images/netoyage.png" className='w-8 mr-2 h-8'/>  
                    <div>
                        <h5 className='text-lg font-semibold '>Enhanced Clean</h5>
                    <p className='text-gray-600 mb-4'>This Host committed to Airbnb's 5-step enhanced cleaning process. Show more</p>
                    </div>
                    </div>
                    
                    <div className="flex">
                        <img src="/images/porte.jpg" className='w-8 mr-2 h-8'/>  
                        <div>
                             <h5 className='text-lg font-semibold'>Self check-in</h5>
                            <p className='text-gray-600 mb-4'>Check yourself in with the lockbox.</p>
                        </div>
                    </div>
                    
                   <div className="flex">
                   <img src="/images/check.png" className='w-8 mr-2 h-8'/>  
                       <div>
                           <h5 className='text-lg font-semibold'>Great check-in experience</h5>
                    <p className='text-gray-600 mb-8'>100% of recent guests gave the check-in process a 5-star rating.</p>
                       </div>
                   </div>
                </div>
            </div>
            <div className='border-b border-solid border-gray-300 py-8'>
                <p className='mb-2'>     A 'small' single room in a serviced home with thematic african art. We hope amenities e.g.a large double bed, Netflix, Digital TV, WIFI and wardrobe can cover the size shortfall. Guests are welcome to use the modern fitted kitchen and garden spaces (for smoking etc). The bathroom is shared (yet cleaned regularly). The house currently has 2 other airbnb guests and myself (most of the time). *No Smoking in the rooms please. **No one night (sex) stands here please...go to a hotel for that.</p>
                <a href='' className='text-lg font-medium cursor-pointer text-black underline '> show more</a>
            </div>
            <h2 className='text-2xl font-semibold mt-6' >what the place offer</h2>
            <div className='flex w-full pb-6'>
                <div className="flex flex-col w-full leading-9">
                    <div className="flex my-4">
                        <img src="/images/cuisine.png" alt="" className='w-8 mr-4'/> 
                        <p> Kitchen</p>
                    </div>
                    <div className="flex mb-4">
                        <img src="/images/wifi.png" className='w-8 mr-4 '/>  
                        <p >Wifi</p>
                    </div>
                    <div className="flex mb-4">
                        <img src="/images/TV.png" className='w-8 mr-4'/>
                        <p >cable</p> 
                    </div>
                    <div className="flex">
                        <img src="/images/seche.png" className='w-8 mr-4'/>  
                        <p >Hair dryer</p>
                    </div>
                </div>
                <div className="flex flex-col w-full leading-9"> 
                    <div className="flex mb-4"> 
                    <img src="/images/smoke.png" className='w-8 mr-4'/>  
                    <p className=''>Smoking allowed</p>
                    </div>
                    <div className="flex mb-4"> 
                    <img src="/images/work.png" className='w-8 mr-4'/>  
                    <p className=''>Dedicated workspace</p>
                    </div>
                    <div className="flex mb-4"> 
                    <img src="/images/voiture.jpg" className='w-8 mr-4'/>  
                    <p className=''>Paid parking off premises</p>
                    </div>
                </div>
            </div>
            </div>
            {/* rightside */}
            <div className='w-4/12 pl-3 '>
                <div className='border border-solid border-gray-300 rounded-lg p-8'>
                    <div className='flex justify-between mb-6'>
                        <div> <span className='font-medium text-xl'>£{room.price}</span> / night </div>
                      
                            <div className='flex items-center'>
                            <StarIcon className='h-5 text-red-400' />
                            <span className='font-medium'>
                            {room.star}</span> 
                            <span className='text-gray-600 underline font-medium'> ({review.length} reviews)</span></div>
                          
                    </div>
                    <div className=' border border-solid border-gray-300 rounded-lg text-sm cursor-pointer'>
                        <div className='flex justify-between p-2 '>
                            <div >
                                <p className='font-medium'>CHECK-IN</p>
                                <p>{formatedStartDate}</p>
                             </div>
                             <div>
                            <p className='font-medium'>CHECK-OUT</p>
                            <p>{formatedEndDate}</p>
                            </div>
                        </div>
                        <div className='border-t border-solid border-gray-300 p-2'>
                            <p className='font-medium'>guest</p>
                            <p> {numberOfGuest}</p>
                        </div>
                    </div>

                    <button className='bg-[#E41D57] text-white font-bold w-full rounded-lg h-12 my-4 text-xl'>reserve</button>
                    
                    <div className='flex justify-between font-medium border-t border-solid border-gray-300 mt-2 pt-4'>
                        <p className=''>Total</p>
                        <p> £ {Tot}</p>
                    </div>
                </div>
            </div>
        </div>
        {/* review */}
        <div className="flex mb-4 items-center">
            <StarIcon className='h-5 text-red-400' />
            <span className='mx-1 text-xl font-semibold'>{room.star} -</span>
            
            <span className='ml-1 text-xl font-semibold'>{review.length} reviews</span>
        </div>
        
        <div className='w-full h-full grid grid-cols-2 gap-x-24 border-b border-solid border-gray-300 '>
            { review.length > 0 ? (
                review.map((review)=>(
                <div className='h-40'>
                    <h5 className='font-semibold w-full'>{review.name}</h5>
                    <p className='text-gray-500 mb-4'>August 2021</p>
                    <p className>{review.review}</p>
                </div>
                ))) : ( <p className='mb-4'>there are no reviews for this accommodation </p> )
            }
    
        </div>
        </div>
        <Footer />
        </>
    )
}

export default Room
export async function getServerSideProps(context) {
    const query = context.query.id
    const [accommodationDetails, reviews] = await Promise.all([
        fetch(`http://localhost:3001/accommodation/${query}`),
        fetch(`http://localhost:3001/accommodation/accomodationReview/${query}`)
     ]);
     const [accommodationDetail, review] = await Promise.all([
         accommodationDetails.json(),
         reviews.json()
     ]);
    return {
        props: {
            accommodationDetail,
            review
        }
    };
    
}
