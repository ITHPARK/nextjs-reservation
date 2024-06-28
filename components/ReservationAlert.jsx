'use client'

import React from 'react'
// import {
//     AlertDialog,
//     AlertDialogAction,
//     AlertDialogCancel,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogTitle,
//     AlertDialogTrigger,
//   } from "@/components/ui/alert-dialog"



const ReservationAlert = ({setModalControl}) => {

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
                      <button className='inline-block px-[20px] py-[5px] h-[unset] text-[16px] text-[#0152CC] font-[600] bg-[none] hover:bg-[none]'>예약하기</button>
                  </div>
              </div>
          </div>

    </div>
  )
}

export default ReservationAlert