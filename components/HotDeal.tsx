"use client"

import React, {useState, useEffect} from 'react'
import Rows from "@/components/Rows"
import {useRouter} from 'next/navigation'
import {StayInfo} from '@/types/types';
import { useStayData } from '@/store/store';

const HotDeal = () => {

    const [data, setData] = useState<StayInfo[]>([])

    //페이지 이동을 위한
    const {push} = useRouter();

    //store에서 가져온 값
    const { stayData } = useStayData();


    const onClickViewAll = () => {
      push('/recommend/list');
    }

    useEffect(() => {
      
      if(stayData.length > 0) {
        setData(stayData);
      }
  
    },[stayData]);

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