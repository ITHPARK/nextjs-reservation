import React from 'react';
import Link from 'next/link';
import request from '@/api/request';
import {fetchData} from '@/api/fetchData';
import RowsAnother from '@/components/RowsAnother';
import {StayInfo} from '@/types/types';


const Top = async() => {

  const data = await fetchData(request.stay, 1)

  //증첩배열
  const topStay: any[][] = [];

  let tempArr: StayInfo[] = [];

  data.forEach((item: StayInfo, index: number) => {
    if (index < 24) {
      tempArr.push(item);
      if (tempArr.length === 6) {
        topStay.push(tempArr);
        tempArr = [];
      }
    }
  });

  return (
    <section className='mb-[50px] px-[20px]'>
         <div className='mb-4  flex justify-between items-center font-semibold '>
            <h2 className='text-[18px] text-[#1a1a1a]'>숙소 구매 TOP</h2>
            <Link href="" className='text-[12px] text-[#0152cc] font-semibold'>전체보기</Link>
        </div>
        <RowsAnother topStay={topStay} />
    </section>
  )


}

export default Top