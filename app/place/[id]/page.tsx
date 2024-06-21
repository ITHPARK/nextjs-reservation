'use client'

import React, {useState, useEffect} from 'react';
import StayResult from "@/components/StayResult";
import {StayInfo} from "@/types/types";



interface RouterQuery  {

  //데이터가 있다면 StayInfo
  data?: StayInfo; 

}

const Home = () => {
  



  return (
    <div className="w-full pt-[70px]" >
      <StayResult/>
    </div>
  );
}


export default Home
