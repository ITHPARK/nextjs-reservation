"use client"

import React, {useState, useEffect} from 'react'
import Link from "next/link"
import Rows from "@/components/Rows"
import {fetchData} from "@/api/fetchData";
import request from "@/api/request";
import {useRouter} from 'next/navigation'
import {StayInfo} from '@/types/types';

const HotDeal = () => {

    const [data, setData] = useState<StayInfo[]>([])

    //페이지 이동을 위한
    const {push} = useRouter();

    const fetchStay = async() => {
      const res = await fetchData(request.stay);
      setData(res);
    }

    const onClickViewAll = () => {
      push('/recommend/list');
    }

    useEffect(() => {
      fetchStay();
    })

  return (
    <section className=' mb-[50px] px-[20px]'>
         <div className='mb-4  flex justify-between items-center font-semibold '>
            <h2 className='text-[18px] text-[#1a1a1a]'>야놀자 특가</h2>
            <span className='text-[12px] text-[#0152cc] font-semibold cursor-pointer' onClick={onClickViewAll}>전체보기</span>
        </div>
        <Rows
          rowData={data}
        />
    </section>
  )
}

export default HotDeal