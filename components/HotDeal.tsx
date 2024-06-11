import React from 'react'
import Link from "next/link"
import Rows from "@/components/Rows"
import {fetchData} from "@/api/fetchData";
import request from "@/api/request";

const HotDeal = async() => {

    const data = await fetchData(request.stay);

  return (
    <section className='px-[20px]'>
         <div className='mb-4  flex justify-between items-center font-semibold '>
            <h2 className='text-[18px] text-[#1a1a1a]'>야놀자 특가</h2>
            <Link href="" className='text-[12px] text-[#0152cc] font-semibold'>전체보기</Link>
        </div>
        <Rows
          rowData={data}
        />
    </section>
  )
}

export default HotDeal