"use client" 

import React, {useState, useEffect} from 'react'
import { useStayData } from '@/store/store';
import StayList from '@/components/StayList';
import {StayInfo} from '@/types/types';

const HotDealAll = () => {

  const [data, setData] = useState<StayInfo[]>([]);

  //store에서 가져온 숙소 데이터
  const { stayData } = useStayData();

   useEffect(() => {

        setData(stayData);
   
   }, [stayData])


  return (
    <div>
        <StayList
            rowData = {data}
        />
    </div>
  )
}

export default HotDealAll