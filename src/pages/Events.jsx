import { Container } from "@mui/material";
import React, { useState } from "react";
import Heading from "../components/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';
import "swiper/css";
// import 'swiper/modules/pagination/pagination.scss'; // Pagination module
// import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import CoPresentIcon from "@mui/icons-material/CoPresent";
const Events = () => {
  const [data] = useState([
    {
      heading: "Seminars",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit at doloribus exercitationem tempore tempora debitis magni pariatur ea, facere necessitatibus architecto nam! Suscipit, magni corporis voluptatum id inventore fugit.",
    },
    {
      heading: "Workshops",
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
    <div id="events" className="w-full pt-24">
      <Container className="h-full flex flex-col gap-8 items-center justify-center">
        <Heading>Events</Heading>
        <Swiper spaceBetween={0} slidesPerView={1} 
        modules={[Navigation, Pagination]}     
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          }
        }}
        className="w-full">
          {data.map((item) => {
            return (
              <SwiperSlide className="">
                <div className="card mx-auto">
                  <span>{item.heading}</span>
                  <p class="info">{item.body}</p>
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
