"use client"

import React, {useEffect} from 'react'
import {useStayData} from '@/store/store';
import request from '@/api/request';
import {FetchUrl} from '@/types/types'; 



const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { fetchStayData, stayData } = useStayData();

  useEffect(() => {
    // 데이터가 이미 존재하는지 확인
    if (stayData.length === 0) {
      console.log("데이터 없음");
      fetchStayData(request.stay as FetchUrl);
    }
  }, [stayData, fetchStayData]);

  return <div>{children}</div>;
};
export default StoreProvider