import { format } from 'date-fns';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';
import Pagination from '../components/Pagination';


const Search = ({searchResult}) => {
    const [ress, setRess] = useState(searchResult.searchResult)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // to get the information from the url we use the router.query
    const router = useRouter()
    const {location, startDate, endDate, numberOfGuest} = router.query
    // we format the date with fns librairy
    const formatedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formatedEndDate = format(new Date(endDate), "dd MMMM yy")
    const ranged= `${formatedStartDate} - ${formatedEndDate}`
    const dayStart = parseInt(format(new Date(formatedStartDate), 'dd'))
    const dayEnd = parseInt(format(new Date(formatedEndDate), 'dd'))
    const NightStay = (dayEnd - dayStart)

    const [priceCost, setPriceCost] = useState('')


    //filter en state local, comme ça le visuel s'update au changement (voir .map ligne 441)
    const [filter, setFilter] = useState({})   

   //La fonction qui va update tes filtres, appelée à chaque onChange
   function changeFilters(key, value){
       let newFilter = filter;
       newFilter[key]= value
       setFilter(newFilter);

       //Si user enleve un filtre on le delete de l'objet (il faut assigner à tes input une valeur par defaut de 'none' pour les string ou '-1' pour les number)
       if(value === 'none' || value === -1 || value === '10'){
           let newFilter = filter;
           delete newFilter[key];
           setFilter(newFilter)
        }

        //Puis on appelle filterStuff pour filtrer les Infocard à afficher en fonction des nouveaux filtres
        filterStuff();
    }
    const currentPosts = ress?.slice(indexOfFirstPost, indexOfLastPost);    


    //La fonction qui filtre.
    function filterStuff(){
        setRess(searchResult.searchResult.filter(function(item) {
            for (var key in filter) {
                if (item[key] === undefined || item[key] != filter[key] )
                return false;
            }
            return true;
        })) ;
    }

   return (
        <div>
            <Header
            placeholder={`${location} | ${ranged} | ${numberOfGuest} Guests`}
            />

            <main className='flex justify-center'>
                <section className='flex-grow pt-14 px-4 max-w-7xl '>
                    <p className='text-xs'>300+ Stays - {ranged} - for {numberOfGuest} guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>stay in {location}</h1>

                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    {/* utility classname, we create a folder styles, with global, and create a utility classname, the globall.css must be import in _app.js */}
                    <button className='button '>Cancelation Flexibility</button>
                    <select className='button' onChange ={(event) =>
                        changeFilters("type", event.target.value)
                        }
                        > type
                        <option value='none' >Type</option>

                        <option value='room' >room</option>
                        <option value='Studio' >Studio</option>

                    </select>
                <div>
                    <input type="range" min="10" max="90" step='1' id="range" className='button'
                onChange ={(event) =>

                   setPriceCost(event.target.value)
                    } />
                    <output htmlFor="range" id="output">{priceCost}</output>
                </div>
                    <select  className='button' onChange ={(event) =>
                        changeFilters("bedroom",  parseInt( event.target.value))}
                        >
                        <option value='-1'>bedrooms</option>
                        <option value='1' >1</option>
                        <option value='2' >2</option>
                        <option value='3' >3</option>
                        <option value='4' >4</option>
                    </select>
                    <button className='button'>More filters</button>
                </div>
                <Fade left>
                <div className='flex flex-col'>                    
                    { priceCost === '10' || !priceCost ? (
                        <div className='flex flex-col'>
                        {currentPosts.map((res)=>
                            <InfoCard
                            formatedStartDate={formatedStartDate}
                            formatedEndDate={formatedEndDate}
                            numberOfGuest={numberOfGuest}
                            id={res.id}
                            NightStay={NightStay}
                            key={res.img}
                            img={res.img}
                            location={res.location}
                            title={res.title}
                            description={res.description}
                            price={res.price}
                            total={res.total}
                            star={res.star}
                            details={res.details}
                            />
                        )}
                        </div>) : (currentPosts.filter((item) => parseInt(priceCost) >= item.price).map((res)=>
                            <InfoCard
                            NightStay={NightStay}
                            key={res.id}
                            img={res.img}
                            location={res.location}
                            title={res.title}
                            description={res.description}
                            price={res.price}
                            total={res.total}
                            star={res.star}
                            details={res.details}
                        /> ))
                    }
                </div>
                </Fade>
                    <Pagination
                    indexOfLastPost={indexOfLastPost}
                    indexOfFirstPost={indexOfFirstPost}
                    postsPerPage={postsPerPage}
                    totalPosts={ress?.length}
                    paginate={paginate}
                    />
                </section>
                <section className='hidden xl:inline-flex xl:w-[600px] 2xl:w-[800px] w-full'>
                    <Map
                    priceCost={priceCost}
                    currentPosts={currentPosts}
                    className='w-full'
                    />
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search

// we use getServerSide props => everytime we go to the search page, we build the page
// we can pass an argument to this fucion => context to pass router props into it
export async function getServerSideProps(context) {

    const res = await fetch('https://airbnb-arthur.herokuapp.com/accommodation')
    const searchResult = await res.json()

    return {
        props: {
            searchResult,
        }
    }
}
