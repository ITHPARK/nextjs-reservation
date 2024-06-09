import React from 'react'
import Link from 'next/link'
import request from '@/api/request';
import { fetchData } from '@/api/fetchData';


const RecentlyView:React.FC = () => {

    fetchData(request.stay);

  return (
    <section>
        <div className='mb-4 px-[20px] flex justify-between items-center font-semibold '>
            <h2 className='text-[18px] text-[#1a1a1a]'>최근 본 상품</h2>
            <Link href="" className='text-[12px] text-[#0152cc] font-semibold'>전체보기</Link>
        </div>

        <ul>

        </ul>
        
    </section>
  )
}

export default RecentlyView