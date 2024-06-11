import React from 'react'
import Link from 'next/link'
import request from '@/api/request';
import { fetchData } from '@/api/fetchData';


const RecentlyView:React.FC = () => {



  return (
    <section className='mb-[30px] px-[20px]'>
        <div className='mb-4 flex justify-between items-center font-semibold '>
            <h2 className='text-[18px] text-[#1a1a1a]'>최근 본 상품</h2>
            <Link href="" className='text-[12px] text-[#0152cc] font-semibold'>전체보기</Link>
        </div>

        <div className='h-[120px] flex items-center justify-center rounded-[10px] bg-[#f8f8f8]' >
          <p className='text-[12px]'>최근 본 상품이 없습니다.</p>
        </div>
        
    </section>
  )
}

export default RecentlyView