"use client"

import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { BsPeople } from "react-icons/bs";
import { MdOutlineBedroomChild } from "react-icons/md";
import {StayInfo} from "@/types/types";



interface RouterQuery  {

    //데이터가 있다면 StayInfo
    data?: StayInfo; 

  }

const StayResult = ({ data }: { data: StayInfo | null }) => {

    //data가 없을 때 처리
    const [placeData, setPlaceData] = useState<StayInfo | null>(null);


    useEffect(() => {

        //옵셔널 체이닝을 이용해서 데이터가 있을 때 넣어준다.
        setPlaceData(data ?? null);
    })

  return (
    <section className=' mb-[50px] px-[20px]'>
        <div>
            <div className='w-full h-[50vh]'>
                <img src="" alt="" />
            </div>
            <div>
                <div>
                    <span>일반 호텔</span>
                    <h3>{placeData?.title}</h3>
                </div>
                <div>
                    <button>좋아요</button>
                    <button>공유</button>
                </div>
            </div>
            <div>
                이벤트 배너
            </div>
            <div>
                <h4>객실선택</h4>
                <div className='flex '>
                    <button>06.14(금)~06.14(토)/1박</button>
                    <button>성인 2, 아동 0</button>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='w-full'>
                    <div className='w-full flex '>
                        <div>
                            <ul>
                                <li>
                                    <img src="" alt="" />
                                </li>
                                <li>
                                    <img src="" alt="" />
                                </li>
                            </ul>

                            <div>
                                <p className='text-[18px] text-[#1a1a1a]'>체크인 시 배정</p>
                                <p className='text-[14px] text-[#1a1a1a]'>제주 최초 넷플릭스 무료제공</p>
                                <ul>
                                    <li className='flex'>
                                        <div className='w-[24px]'><BsPeople size="100%" /></div>
                                        <p>기준 2인 / 최대 2인</p>
                                    </li>
                                    <li className='flex'>
                                        <div className='w-[24px]'><MdOutlineBedroomChild size="100%" /></div>
                                        <p>체크인 시 배정</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='p-[15px]'>
                            <div className='flex'>
                                <span>숙박</span>
                                <button>상세보기 &lt;</button>
                            </div>
                            <p>체크인 15:00 ~ 체크아웃 11:00</p>
                            <div className='flex flex-col justify-end'>
                                <p><span>84%</span><span>200,000</span></p>
                                <p>33,000d원 <button><IoMdInformationCircleOutline /></button></p>
                                <p>취소 및 환불 불가 <button><IoMdInformationCircleOutline /></button></p>
                            </div>
                            <div>
                                <button><LuShoppingCart size={32} color='#000' className='p-[5px]'/></button>
                                <button>예약하기</button>
                            </div>
                        </div>
                    </div>


                    
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default StayResult
