"use client"
import React from 'react';
import Link from 'next/link';
import request from '@/api/request';
import { fetchData } from '@/api/fetchData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";

//객체의 인스턴스가 모두 같은 타입일 때 이렇게 축약가능함
type Location = Record<string, string>;

const HotDeal = async() => {

  const data = await fetchData(request.stay);

  const dataList = data.response.body.items.item;

  console.log(dataList);



  return (
    <section className='mb-[30px] px-[20px]'>
        <div className='mb-4  flex justify-between items-center font-semibold '>
            <h2 className='text-[18px] text-[#1a1a1a]'>핫 딜</h2>
            <Link href="" className='text-[12px] text-[#0152cc] font-semibold'>전체보기</Link>
        </div>

        <Swiper 
            loop={true} // 슬라이드 루프
            spaceBetween={10} // 슬라이스 사이 간격
            slidesPerView={4.4} // 보여질 슬라이스 수
            navigation={true} // prev, next button
            pagination={true}
            autoplay={false}
            observer={true}
            modules={[Navigation, Pagination, Autoplay ]} // Swiper 모듈 등록
        >
          {
            dataList.map((val:Location) => {
              return (
                <SwiperSlide key={val.title}>
                  <div className={`w-full min-h-[106px]  bg-cover bg-center`}>
                    
                  </div>
                  <p>{val.title}</p>
                </SwiperSlide>
              )
            } )
          }
        </Swiper>
    </section>
  )
}

export default HotDeal