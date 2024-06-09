'use client';

import React, {useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from 'next/link'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import { IoPauseOutline } from "react-icons/io5";




const EventBanner = () => {

    const eventList = [1, 2, ,3, 4, 5];
    const eventBanner = ["야놀자드로우", "쿠폰혜택모음", "이벤트더보기"];
    const [isPlaying, setIsPlaying] = useState(true);

    //DOM 요소에 직접 접근하기 위함
    const swiperRef = useRef(null);

    const handlePlay = () => {
        swiperRef.current.swiper.autoplay.start();
        setIsPlaying(true);
    };

    const handlePause = () => {
        swiperRef.current.swiper.autoplay.stop();
        setIsPlaying(false);
    };




  return (
    <section className='mb-[30px]'>
        <div className='w-full relative mb-4'>
        <Swiper 
                    className='event_swiper'
                    loop={true} // 슬라이드 루프
                    spaceBetween={10} // 슬라이스 사이 간격
                    slidesPerView={2.4} // 보여질 슬라이스 수
                    navigation={{
                        prevEl: '.event_button_prev',
                        nextEl: '.event_button_next',
                    }} // prev, next button
                    pagination={
                        {
                        el: '.event-pagination'  ,
                        type: 'fraction'
                        }
                    }
                    autoplay={{
                        delay: 4000,
                        pauseOnMouseEnter: true, //마우스 올리면 일시정지
                        disableOnInteraction: false //사용자 개입시 일시정지
                    }}
                    
                    observer={true}
                    modules={[Navigation, Pagination, Autoplay ]} // Swiper 모듈 등록
                    ref={swiperRef} //재생,일시정지 버튼 만들ref
                    
                >
                    {
                        eventList.map((item) => {
                            return (
                                <SwiperSlide key={item}>
                                    <Link href="">
                                        <img src={`/images/event/event${item}.png`} alt={`이벤트${item}`} />
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }                
                </Swiper>
                <button className='event_button_prev bg-gray-800 p-2 rounded absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer'><FaAngleLeft  size={20} color='#fff'/></button>
                <button className='event_button_next bg-gray-800 p-2 rounded absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer'><FaAngleRight size={20} color='#fff'/></button>
            </div>
            
            
            <div className='flex justify-center '>
                <div className='flex items-center relative pr-[5px] after:content-[""] after:w-[1px] after:h-[calc(100%-4px)] after:absolute after:right-[0] after:top-[50%] after:translate-y-[-50%] after:bg-[#1a1a1a] '>
                    <button className={isPlaying? "hidden" : ""} onClick={handlePlay}><FaPlay size={16} color='#1a1a1a' /></button>
                    <button className={isPlaying? "" : "hidden"} onClick={handlePause}><IoPauseOutline size={16} color='#1a1a1a' /></button>
                </div>
                <div className='flex pl-[5px] items-center gap-[4px]'>
                    <button className='event_button_prev'><FaAngleLeft  size={16} color='#1a1a1a'/></button>
                    <div className='event-pagination w-auto text-[12px]'></div>    
                    <button className='event_button_next'><FaAngleRight  size={16} color='#1a1a1a'/></button>
                </div>
            </div>    

            <div className='mt-[15px] px-[20px] flex gap-[5px]'>
                {
                    eventBanner.map((item, idx) => {
                        return (
                            <button key={item} className='flex-1 flex justify-center items-center gap-[3px] leading-[45px] bg-[#f8f8f8] rounded-[5px]'>
                                <img src={`/images/event/event_banner${idx+1}.png`} alt={item} className='w-[18px] '/>
                                <span className='text-[12px]'>{item}</span>
                            </button>
                        )
                    })
                }
            </div>   
    </section>
  )
}

export default EventBanner