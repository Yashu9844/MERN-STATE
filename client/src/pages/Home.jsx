import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';

import ListingItem from '../components/ListingItem';

const Home = () => {
  SwiperCore.use(Navigation)
  const [offerLeistings,setOfferListings] = useState([]);
  const [saleListings,setSaleListings]= useState([]);
  const [rentListings,setRentlistings] = useState([]);
console.log(saleListings)
  useEffect(()=>{
    const fetchOfferListing = async ()=>{
        try {
          const res = await fetch('/api/listing/get?offer=true&limit=4');
          const data = await res.json();
          setOfferListings(data);
          fetchRentListing();
          
        } catch (error) {
          console.log(error)
        }
    }
    const fetchRentListing= async()=>{
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentlistings(data);
        fetchSaleListing();
      } catch (error) {
        console.log(error);
        
      }
    }
  const fetchSaleListing = async ()=>{
    try {
 const res = await fetch('/api/listing/get?type=sale&limit=4');
 const data = await res.json();
  setSaleListings(data);
    } catch (error) {
      console.log(error);
    }
  }


    fetchOfferListing();
  },[])
  return (
    <div>
      {/* top */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto ">
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>Find your next <span className='text-slate-500'>perfect</span> <br /> place with ease</h1>
      <div className="text-gray-400 text-xs sm:text-sm">
        Yashwanth Estate is the best place to find your next perfect place to live.<br/>
        We have a wide range of properties for you to choose from.
      </div>
      <Link to={"/search"} className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'>
        Let's get started...
      </Link>
      
      </div>
      {/* swiper */}
      <Swiper Navigation>
      {offerLeistings &&
          offerLeistings.length > 0 &&
          offerLeistings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>
      {/* results */}
      <div className=" p-3 flex flex-col gap-5 my-18  max-w-7.2xl mx-auto">
        {
          offerLeistings && offerLeistings.length>0 && (
            <div className="">
              <div className="my-3">
                <h2 className='text-2xl font-semibold text-slate-600'>Recent sale</h2>
                <Link to={'/search?offer=true'} className='text-blue-800 hover:underline text-sm'>
                  Show more sale
                </Link>
              </div>
              <div className="flex gap-4 flex-wrap w-full " >
                {offerLeistings.map((listing)=>(
                  <ListingItem listing={listing} key={listing._id}/>
                ))}
              </div>
            </div>
          )
        }
        {
          saleListings && saleListings.length>0 && (
            <div className="">
              <div className="my-3">
                <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
                <Link to={'/search?type=sale'} className='text-blue-800 hover:underline text-sm'>
                  Show more sales
                </Link>
              </div>
              <div className="flex gap-3 flex-wrap " >
                {saleListings.map((listing)=>(
                  <ListingItem listing={listing} key={listing._id}/>
                ))}
              </div>
            </div>
          )
        }
        {
          rentListings && rentListings.length>0 && (
            <div className="">
              <div className="my-3">
                <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
                <Link to={'/search?type=rent'} className='text-blue-800 hover:underline text-sm'>
                  Show more rents
                </Link>
              </div>
              <div className="flex gap-4 flex-wrap " >
                {rentListings.map((listing)=>(
                  <ListingItem listing={listing} key={listing._id}/>
                ))}
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Home
