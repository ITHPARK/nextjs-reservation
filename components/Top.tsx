"use client"

import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import RowsAnother from '@/components/RowsAnother';
import {StayInfo} from '@/types/types';
import { useStayData, useTopStay } from '@/store/store';
import {useRouter} from 'next/navigation'


const Top = () => {

  const [data, setData] = useState<StayInfo[][]>([]);

  const { stayData } = useStayData();
  const { setStay } = useTopStay();
  

  //페이지 이동을 위한
  const {push} = useRouter();
  
  const onClickViewAll = () => {
    push('/recommend/ranking');
  }

  useEffect(() => {
      
    if(stayData.length > 0) {
      const topStay: StayInfo[][] = [];
      
      //스토어에 저장된 값을 카피해서 무작위로 섞는다.
      const copyStay = [...stayData].sort(() => Math.random() - 0.5);
      let tempArr: StayInfo[] = [];
  
      copyStay.forEach((item: StayInfo, index: number) => {

        //6개씩 4개 배열로 나누기
        if (index < 24) {
          tempArr.push(item);
          if (tempArr.length === 6) {
            topStay.push(tempArr);
            tempArr = [];
          }
        }
      });  

      setStay(topStay);
      setData(topStay);

    }

    //setStay가 호출될 때 마다 콜백실행
  },[stayData, setStay]);
  
  //증첩배열
  

 

  return (
    <section className='mb-[50px] px-[20px]'>
         <div className='mb-4  flex justify-between items-center font-semibold '>
            <h2 className='text-[18px] text-[#1a1a1a]'>숙소 구매 TOP</h2>
            <span className='text-[12px] text-[#0152cc] font-semibold cursor-pointer' onClick={onClickViewAll}>전체보기</span>
        </div>
        <RowsAnother topStay={data} />
    </section>
  )


}

export default Top