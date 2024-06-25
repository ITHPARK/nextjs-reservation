"use client" 

import React, {useState, useEffect} from 'react'
import { useTopStay } from '@/store/store';
import StayListCat from '@/components/StayListCat';
import {StayInfo} from '@/types/types';


const TopAll= () => {

  const [data, setData] = useState<StayInfo[][]>([]);

  //store에서 가져온 숙소 데이터
  const { topStay } = useTopStay();

  useEffect(() => {
    if (topStay && topStay.length > 0) {
      console.log('topStay 데이터:', topStay);
      setData([...topStay]);  // 데이터를 깊은 복사하여 상태에 설정
    }
  }, [topStay]);


  return (
    <div>
        <StayListCat
            rowData = {data}
        />
    </div>
  )
}

export default TopAll