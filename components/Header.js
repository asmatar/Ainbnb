import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid';
import { signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
const Header = ({placeholder }) => {
    const [userSession]= useSession()
    const router = useRouter();

    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numberOfGuest, setNumberOfGuest] = useState(1);
    // Select parameter for the calendar
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }
    //function to put into the state users date
    const handleSelect = (ranges) => {
        // selection is the key from selection range
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    // on click we go to the search page WITH the query ( seems as props, to pass information through the new component)
    const search = () => {
        router.push({
            pathname:'/search',
            query: {
                location: searchInput,
                // toISOString allows us to put a string into the url
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numberOfGuest,
            }
        })
        setSearchInput('')
    }

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10' >
            <div onClick={()=>router.push('/')} className='relative flex items-center h-10 cursor-pointer my-auto'>
                {/* using imge from next js which optimize the image, we need to config a file to configurate the image(cf:next.config) */}
                <Image src="https://links.papareact.com/qd3"
                layout='fill'
                objectFit='contain'
                objectPosition='left'
                alt="" />
            </div>
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                <input type="text" placeholder= {placeholder || 'start your search'}
                 className=
                'pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400'
                // we put the value from the event in the state and take the value as the input value
                value={searchInput}
                onChange={(event)=>setSearchInput(event.target.value)}
                />
                <SearchIcon className=' hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
            </div>
            <div className='flex space-x-4 items-center justify-end text-gray-500'>
                <p className='hidden md:inline cursor-pointer'>because a host</p>
                    <GlobeAltIcon className='h-6 cursor-pointer animate-spin' />
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                    <MenuIcon  className='h-6'/>
                    {
                    !userSession ? ( <UserCircleIcon  className='h-6'> </ UserCircleIcon> ) : (
                       <img onClick={() => signOut({
                        
                            callbackUrl: `${window.location.origin}`
                      
                       })} className='h-7 rounded-full' src={userSession.user.image} alt="" />
                        )
                }
                
                </div>
                {
                    !userSession ? (<UsersIcon className='h-6 '> </UsersIcon> ) : (
                        <p className='text-sm font-bold hidden sm:block'>{userSession.user.name}</p>
                        )
                }
               
               
            </div>
            {
                searchInput && (
                <div className='flex flex-col col-span-3 mx-auto py-4'>
                    <DateRangePicker 
                    className='w-5/12 sm:w-full'
                    //ranges is the initial value to put to make it works
                    ranges={[selectionRange]}
                    // we can't buy beforre today
                    minDate={new Date()}
                    // to change the range color
                    rangeColors={['#FD5B61']}
                    onChange={handleSelect}
                    />
                    <div className='flex items-center border-b mb-4 w-9/12 sm:w-full'>
                        <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                        <UsersIcon className='h-5' />
                        <input type="number" className='w-12 pl-2 text-lg outline-none text-red-400' 
                        value={numberOfGuest}
                        // put a min or max to provide min value or max value
                        min={1}
                        // putting the number in the state
                        onChange={(event) => setNumberOfGuest(event.target.value)}
                        />
                    </div>
                    <div className='flex w-9/12 sm:w-full'>
                        {/* onClick we wanna hide the calendar removing the input field from the useState */}
                        <button className='flex-grow text-gray-500 hover:bg-red-400 rounded-lg py-1 hover:text-white hover:rounded-lg transition duration-300 ease-out' onClick={()=>setSearchInput('')}> Cancel</button>
                        <button onClick={search} className='flex-grow text-red-500 rounded-lg hover:bg-red-400 py-1 hover:text-white hover:rounded-lg transition duration-300 ease-out'> Search</button>
                    </div>
                </div>
                )}
        </header>
    )
}

export default Header
