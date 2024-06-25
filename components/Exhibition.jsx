"use client"
import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";


const Exhibition = () => {

  const [imgArr, setImgArr] = useState([
    {
      imgUrl: "/images/exhibition/banner4.png",
      tit: "이번주 hot 특가",
      subTit: "최대 50% 할인 모텔 모음"
    },
    {
      imgUrl: "/images/exhibition/banner2.png",
      tit: "지금 Hot한 펜션 예약",
      subTit: "어디갈지 고민이라면 둘러보기!"
    },
    {
      imgUrl: "/images/exhibition/banner1.png",
      tit: "6월 법인카드 단독 이벤트",
      subTit: "포인트적립 + 쿠폰 리워드"
    },
    {
      imgUrl: "/images/exhibition/banner3.png",
      tit: "켄싱턴 브랜드 14개 지점",
      subTit: "선착순 1만원 쿠폰"
    }
  ])
  
  return (
    <section className='px-[20px] mb-[50px]'>
        <div className='mb-4  flex justify-between items-center font-semibold '>
            <h2 className='text-[18px] text-[#1a1a1a]'>특가 상품</h2>
            <Link href="" className='text-[12px] text-[#0152cc] font-semibold'>전체보기</Link>
        </div>
        <div className='relative'>
          <Swiper
            loop={true} // 슬라이드 루프
            spaceBetween={20} // 슬라이스 사이 간격
            slidesPerView={2.2} // 보여질 슬라이스 수
            navigation={{
              prevEl: '.exhibition_button_prev',
              nextEl: '.exhibition_button_next',
          }}
            pagination={false}
            autoplay={false}
            observer={true}
            modules={[Navigation, Pagination ]} // Swiper 모듈 등록
          >
            {
              imgArr.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img src={item.imgUrl} alt='exhibition' />
                    <div className='p-[15px] w-full h-full flex flex-col justify-end absolute left-0 top-0 bg-custom-gradient2'>
                      <div className='flex justify-between'>
                        <div>
                          <p className='text-[18px] text-[#fff] font-[600] ' >{item.tit}</p>
                          <p className='text-[11px] text-[#fff] font-[300]'>{item.subTit}</p>
                        </div>
                        <div className='flex items-center text-[12px] text-[#fff]'>
                          {index+1}/{imgArr.length}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
          <button className='exhibition_button_prev bg-gray-800 p-2 rounded absolute top-[calc(50%-9px)] left-0 transform -translate-y-1/2 z-10 cursor-pointer'><FaAngleLeft  size={20} color='#fff'/></button>
          <button className='exhibition_button_next bg-gray-800 p-2 rounded absolute top-[calc(50%-9px)] right-0 transform -translate-y-1/2 z-10 cursor-pointer'><FaAngleRight size={20} color='#fff'/></button> 
        </div>
    </section>
  )
}

export default Exhibition