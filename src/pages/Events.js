import { Container } from "@mui/material";
import React, { useState } from "react";
import Heading from "../components/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Events = () => {
  const [data] = useState([
    {
      heading: "Bootcamp",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit at doloribus exercitationem tempore tempora debitis magni pariatur ea, facere necessitatibus architecto nam! Suscipit, magni corporis voluptatum id inventore fugit.",
    },
    {
      heading: "Hands-On",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit at doloribus exercitationem tempore tempora debitis magni pariatur ea, facere necessitatibus architecto nam! Suscipit, magni corporis voluptatum id inventore fugit.",
    },
    {
      heading: "Case-Study",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit at doloribus exercitationem tempore tempora debitis magni pariatur ea, facere necessitatibus architecto nam! Suscipit, magni corporis voluptatum id inventore fugit.",
    },
    {
      heading: "Competition",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit at doloribus exercitationem tempore tempora debitis magni pariatur ea, facere necessitatibus architecto nam! Suscipit, magni corporis voluptatum id inventore fugit.",
    },
  ]);

  return (
    <div id='events' className='w-full pt-24'>
      <Container className='h-full flex flex-col gap-8 items-center justify-center'>
        <Heading>Events</Heading>
        <Swiper spaceBetween={50} slidesPerView={3} className='w-full'>
          {data.map((item) => {
            return (
              <SwiperSlide className='w-1/4'>
                <div className='w-full rounded-xl bg-violet-600 flex flex-col items-center justify-center gap-4 p-6'>
                  <h3 className='serif text-center text-4xl font-bold'>
                    {item.heading}
                  </h3>
                  <p className='text-justify'>{item.body}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
};

export default Events;
