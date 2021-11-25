import { clearStorage } from 'mapbox-gl';
import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
const Room = (oneRoom) => {
    console.log('dans one room',oneRoom.oneRoom.searchResult)
    const [room] = useState(oneRoom.oneRoom.searchResult)
    return (
        <>
        <Header />
        <div className='max-w-7xl mx-auto p-x-8 sm:px-16'>
        {/* titre review star share */}
        <div className='pt-6'>
             <h2 className='text-3xl font-semibold pb-5'>{room.title}</h2>
             <div className='flex justify-between'> 
                <div className='flex pb-6 text-gray-600'>
                    <p className='text-black mr-1'>{room.star} </p><span className="underline">(164 reviews)</span> 
                    <p className='mx-6'>Superhost</p>
                    <p className='underline'>{room.location}</p>
                </div>
                <div>
                    <a href="" className='mr-8 underline'>Share</a>
                    <a href="" className='underline'>Save</a>
                </div>
             </div>
        </div>
        {/* image */}
        <div className='flex relative '>
           
            <div className='cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out '>
                <img src={room.img} alt="" className='rounded-lg' />
            </div>
           {/* <img className='text-red-400 col-span-2 col-end-2' src="https://a0.muscache.com/im/pictures/cfd6c20d-f860-48b0-bfe6-053c5168d8c9.jpg?im_w=720" alt="" />
           <img className='text-blue-400' src="https://a0.muscache.com/im/pictures/cfd6c20d-f860-48b0-bfe6-053c5168d8c9.jpg?im_w=720" alt="" />
           <img className='text-yellow-400' src="https://a0.muscache.com/im/pictures/cfd6c20d-f860-48b0-bfe6-053c5168d8c9.jpg?im_w=720" alt="" />
           <img className='text-gray-400' src="https://a0.muscache.com/im/pictures/cfd6c20d-f860-48b0-bfe6-053c5168d8c9.jpg?im_w=720" alt="" />
           <img className='text-green-400' src="https://a0.muscache.com/im/pictures/cfd6c20d-f860-48b0-bfe6-053c5168d8c9.jpg?im_w=720" alt="" /> */}
        </div>
         {/* leftside: titre, description 1 bedroom, wifi enchancer */}
        <div className='flex py-12 w-full border-b border-solid border-gray-300 mb-6'>
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
                    <h5 className='text-lg font-semibold '>Enhanced Clean</h5>
                    <p className='text-gray-600 mb-4'>This Host committed to Airbnb's 5-step enhanced cleaning process. Show more</p>
            
                    <h5 className='text-lg font-semibold'>Self check-in</h5>
                    <p className='text-gray-600 mb-4'>Check yourself in with the lockbox.</p>
                
                    <h5 className='text-lg font-semibold'>Great check-in experience</h5>
                    <p className='text-gray-600 mb-8'>100% of recent guests gave the check-in process a 5-star rating.</p>
                
                </div>
            </div>
            <div className='border-b border-solid border-gray-300 py-8'>
                <p className='mb-2'>     A 'small' single room in a serviced home with thematic african art. We hope amenities e.g.a large double bed, Netflix, Digital TV, WIFI and wardrobe can cover the size shortfall. Guests are welcome to use the modern fitted kitchen and garden spaces (for smoking etc). The bathroom is shared (yet cleaned regularly). The house currently has 2 other airbnb guests and myself (most of the time). *No Smoking in the rooms please. **No one night (sex) stands here please...go to a hotel for that.</p>
                <a href='' className='text-lg font-medium cursor-pointer text-black underline '> show more</a>
            </div>
            <h2 className='text-2xl font-semibold mt-6' >what the place offer</h2>
            <div className='flex w-full pb-6'>
                <div className="flex flex-col w-full leading-9">
                    <p className=''>Kitchen</p>
                    <p className=''>Wifi</p>
                    <p className=''>TV with standard cable</p> 
                    <p className= ''>Hair dryer</p>
                </div>
                <div className="flex flex-col w-full leading-9"> 
                    <p className=''>Smoking allowed</p>
                    <p className=''>Dedicated workspace</p>
                    <p className=''>Paid parking off premises</p>
                </div>
            </div>
            </div>
            {/* rightside */}
            <div className='w-4/12 pl-3 '>
                <div className='border border-solid border-gray-300 rounded-lg p-8'>
                    <div className='flex justify-between mb-6'>
                        <div> <span className='font-medium text-xl'>€31</span> / night </div>
                        <div><span className='font-medium'>{room.star}</span> <span className='text-gray-600 underline font-medium'> (164 reviews)</span></div>
                    </div>
                    <div className=' border border-solid border-gray-300 rounded-lg text-sm'>
                        <div className='flex justify-between p-2'>
                            <div >
                                <p className='font-medium'>CHECK-IN</p>
                                <p>12/15/2121</p>
                             </div>
                             <div>
                            <p className='font-medium'>CHECK-OUT</p>
                            <p>14/15/2121</p>
                            </div>
                        </div>
                        <div className='border-t border-solid border-gray-300 p-2'>
                            <p className='font-medium'>guest</p>
                            <p> 1 guest</p>
                        </div>
                    </div>

                    <button className='bg-[#E41D57] text-white font-bold w-full rounded-lg h-12 my-4 text-xl'>reserve</button>
                    
                    <div className='flex justify-between font-medium border-t border-solid border-gray-300 mt-2 pt-4'>
                        <p className=''>Total</p>
                        <p> £ 130</p>
                    </div>
                </div>
            </div>
        </div>
        {/* review */}
        <div className='w-full h-full grid grid-cols-2 gap-x-24 border-b border-solid border-gray-300 '>
            <div className='h-40'>
                <h5 className='font-semibold w-full'>Ilias</h5>
                <p className='text-gray-500 mb-4'>August 2021</p>
                <p className>This is the third time I stay at Lateef’s and every time it’s a wonderful experience. The flat is sparkling clean, very spacious and Lateef is so nice and helpful. 10/10 will always recommend.</p>
            </div>
            <div className=' h-40 '>
                <h5 className='font-semibold w-full'>Ilias</h5>
                <p className='text-gray-500 mb-4'>August 2021</p>
                <p className>This is the third time I stay at Lateef’s and every time it’s a wonderful experience. The flat is sparkling clean, very spacious and Lateef is so nice and helpful. 10/10 will always recommend.</p>
            </div>
            <div className=' h-40 '>
                <h5 className='font-semibold w-full'>Ilias</h5>
                <p className='text-gray-500 mb-4'>August 2021</p>
                <p className>This is the third time I stay at Lateef’s and every time it’s a wonderful experience. The flat is sparkling clean, very spacious and Lateef is so nice and helpful. 10/10 will always recommend.</p>
            </div>
            <div className='h-40  '>
                <h5 className='font-semibold w-full'>Ilias</h5>
                <p className='text-gray-500 mb-4'>August 2021</p>
                <p className>This is the third time I stay at Lateef’s and every time it’s a wonderful experience. The flat is sparkling clean, very spacious and Lateef is so nice and helpful. 10/10 will always recommend.</p>
            </div>
            <div className=' h-40 '>
                <h5 className='font-semibold w-full'>Ilias</h5>
                <p className='text-gray-500 mb-4'>August 2021</p>
                <p className>This is the third time I stay at Lateef’s and every time it’s a wonderful experience. The flat is sparkling clean, very spacious and Lateef is so nice and helpful. 10/10 will always recommend.</p>
            </div>
            <div className=' h-40 '>
                <h5 className='font-semibold w-full'>Ilias</h5>
                <p className='text-gray-500 mb-4'>August 2021</p>
                <p className>This is the third time I stay at Lateef’s and every time it’s a wonderful experience. The flat is sparkling clean, very spacious and Lateef is so nice and helpful. 10/10 will always recommend.</p>
            </div>
        </div>
        </div>
        <Footer />
        </>
    )
}

export default Room
export async function getServerSideProps(context) {
    console.log('context.query', context.query)
    const query = context.query.id
    console.log('query', query)
    clearStorage
    const res = await fetch(`http://localhost:3001/accommodation/${query}`)
    const oneRoom = await res.json()
    // .then(response => response.json())
    console.log(oneRoom)
    return {
        props: {
            oneRoom,
        }
    }
}