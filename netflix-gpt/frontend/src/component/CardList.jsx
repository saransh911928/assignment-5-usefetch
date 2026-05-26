import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import { Link } from 'react-router-dom'

const CardList = ({title, category}) => {

    // const data= [
    //     {
    //         id:1,
    //         title:"Card 1",
    //         description:"Description for Card 1",
    //         imageUrl:"/cardimg.jpg"
    //     },
    //     {
    //         id:2,
    //         title:"Card 2",
    //         description:"Description for Card 2",
    //         imageUrl:"/cardimg.jpg"
    //     },
    //     {
    //         id:3,
    //         title:"Card 3",
    //         description:"Description for Card 3",
    //         imageUrl:"/cardimg.jpg"
    //     },
    //     {
    //         id:4,
    //         title:"Card 4",
    //         description:"Description for Card 4",
    //         imageUrl:"/cardimg.jpg"
    //     },
    //     {
    //         id:5,
    //         title:"Card 5",
    //         description:"Description for Card 5",
    //         imageUrl:"/cardimg.jpg"
    //     },
    //     {
    //         id:6,
    //         title:"Card 6",
    //         description:"Description for Card 6",
    //         imageUrl:"/cardimg.jpg"
    //     },
    //     {
    //         id:7,
    //         title:"Card 7",
    //         description:"Description for Card 7",
    //         imageUrl:"/cardimg.jpg"
    //     },
    //  ];
const [data, setData] = useState([]);
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTgxZmJlMzM0YTUwZjI3ODUzYWY2NGI3NDRlY2M3ZCIsIm5iZiI6MTc3ODI3NjgyMS4yOTMsInN1YiI6IjY5ZmU1OWQ1MGE4ZGY3MGU5YjUwZTZmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s5XmCEUmKCJBNDGGbX5uBi0JxqXCZoNprbIZYNvyGrk'
  }
};

useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
         options
        )
  .then(res => res.json())
  .then(res => setData(res.results))
  .catch(err => console.error(err));
}, [])


  return (

    <div className='text-white md:px-4'>
       <h2 className='pt-10 pb-5 text-lg font-medium'>{title}</h2>

    <Swiper
      modules={[FreeMode]}
      freeMode={true}
      grabCursor={true}
      slidesPerView={4}
      spaceBetween={12}
    //   breakpoints={{
    //     320: { slidesPerView: 1.2 },
    //     640: { slidesPerView: 2.2 },
    //     1024: { slidesPerView: 4 }
    //   }}
      className='mySwiper'
    >
       {data.map((item, index)=>(

       <SwiperSlide key={index} className='max-w-72'>
            <Link to={`/movie/${item.id}`}>
         <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt=" " className='h-44 w-full object-center object-cover rounded-lg' />
         <p className='text-center pt-2'>{item.original_title}</p>
            </Link>
       </SwiperSlide>
        ))}
 
    </Swiper>

    </div>
  );
};

export default CardList;