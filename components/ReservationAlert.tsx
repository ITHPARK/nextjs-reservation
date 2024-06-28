'use client'

import React from 'react'
import {ReservationAlertType, AddInfo} from "@/types/types"
import { useReservation } from '@/store/store';


const ReservationAlert:React.FC<ReservationAlertType> =({setModalControl, data, buttonStartDate, buttonEndDate, night, adult, child }) => {

  const { reservation, setReservation } = useReservation();
  const handleClick = () => {

    //장바구니에 담았을 때 저장할 정보들
    let reservationInfo : AddInfo = {
      data,
      buttonStartDate,
      buttonEndDate,
      night,
      adult,
      child
    }

    //store에 추가하기 위해서 객체를 배열에 넣어줌
    const arr = [...reservation];
    arr.push(reservationInfo);
    setReservation(arr);
  }

  return (
    <div>
          <div className='p-[23px] bg-[#fff] rounded-[5px]' >
              <div className='mb-[20px]'>
              {/* <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle> */}
                <div className='text-[16px] text-[#1a1a1a] text-center font-[600] '>
                    체크인이 <span className='text-[#DC0328]'>오늘</span> 입니다<br />
                    예약하시겠어요?
                </div>
              </div>
              <div>
                  <div className='w-[100%] flex justify-center gap-[10px]'>
                      <button className='inline-block px-[20px] py-[5px] h-[unset]  text-[16px] border-[0] hover:bg-[none]' onClick={() => setModalControl(2)}>아니요</button>
                      <button className='inline-block px-[20px] py-[5px] h-[unset] text-[16px] text-[#0152CC] font-[600] bg-[none] hover:bg-[none]' onClick={handleClick}>예약하기</button>
                  </div>
              </div>
          </div>

    </div>
  )
}

export default ReservationAlert