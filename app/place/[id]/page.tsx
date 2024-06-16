'use client'

import React, {useState, useEffect} from 'react';
import StayResult from "@/components/StayResult";
import {StayInfo} from "@/types/types";
import { useRouter } from "next/navigation";


interface RouterQuery  {

  //데이터가 있다면 StayInfo
  data?: StayInfo; 

}

const Home = () => {
  
  const [stayData, setStayData] = useState<StayInfo | null>(null);

  const router = useRouter();


  return (
    <div className="w-full pt-[140px]" >
      <StayResult data={stayData}/>
    </div>
  );
}


export default Home
