"use client"

import React, {useState,useEffect } from 'react'


import 'react-datepicker/dist/react-datepicker.css';
import { GuestsNumberProps } from '@/types/types';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { IoClose  } from "react-icons/io5";
import { IoMdInformationCircle } from "react-icons/io";




const GuestsNumber: React.FC<GuestsNumberProps> = ({refSize, adult, child, setAdult, setChild}) => {

  
  

  return (
    <div>
        <DrawerContent className={`w-[100%] max-w-[768px] min-h-[500px] left-[50%]`} style={{ marginLeft: `-${refSize}px` }}>
          <DrawerHeader>
                <DrawerTitle className='mb-[20px] text-center  text-[18px]'></DrawerTitle>
                <p className='p-[10px] flex items-center gap-[5px] text-[12px] text-center bg-[#f1f1f1] rounded-[5px]'>
                  <span className='w-[16px]'><IoMdInformationCircle size="100%" fill='#1A1A1A' /></span>
                  <div className='text-left'>
                    <strong>기준인원 초과 시 추가요금이 발생할 수 있으며, 아동은 입실가능 여부 및 추가요금이 다를 수 있습니다.</strong><br />
                    숙소 이용안내 및 예약공지를 확인해주세요.
                  </div>
                </p>
                <DrawerDescription>
                    
                </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
            <div className='p-[10px] w-[100%] flex flex-col gap-[10px] border-[1px] border-solid border-[#ddd] rounded-[3px]'>
                <div className='flex justify-between'>
                    <p className='text-[14px] color-[#1a1a1a] font-[600]'>성인</p>
                    <div className='flex items-center gap-[8px]'>
                      <button onClick={() => {setAdult((prev) => prev -= 1)}}><img src="/images/minus.svg" alt="" /></button>
                      <span className='text-[14px] font-[600]'>{adult}</span>
                      <button onClick={() => {setAdult((prev) => prev += 1)}}><img src="/images/plus.svg" alt="" /></button>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <p className='text-[14px] color-[#1a1a1a] font-[600]'>아동</p>
                    <div className='flex items-center gap-[8px]'>
                      <button onClick={() => {setChild((prev) => prev -= 1)}}><img src="/images/minus.svg" alt="" /></button>
                      <span className='text-[14px] font-[600]'>{child}</span>
                      <button onClick={() => {setChild((prev) => prev += 1)}}><img src="/images/plus.svg" alt="" /></button>
                    </div>
                </div>
            </div> 
            <DrawerClose className='w-[24px] absolute left-2 top-2'>
                <IoClose size="100%" fill='#1a1a1a'/>
            </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
      
     
    </div>
  )
}

export default GuestsNumber



