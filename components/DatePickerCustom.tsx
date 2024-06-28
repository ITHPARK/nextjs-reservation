"use client"

import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import ko from 'date-fns/locale/ko';
import { Locale } from 'date-fns'; 
import 'react-datepicker/dist/react-datepicker.css';
import { DateRangePickerProps, DatePickerCustomProps } from '@/types/types';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from "@/components/ui/drawer";
import { IoClose } from "react-icons/io5";
import { IoMdInformationCircle } from "react-icons/io";

const DatePickerCustom: React.FC<DatePickerCustomProps> = ({ setStartDate, setEndDate, pickerStartDate, pickerEndDate, refSize, buttonStartDate, buttonEndDate }) => {
  const [isSelectingStart, setIsSelectingStart] = useState(true);

  //파라미터 첫 번째는 날짜 배열, 두 번째는 선택적인 이벤트
  const onChangeEnd = (date: [Date | null, Date | null], event?: React.SyntheticEvent<any> | undefined) => {
    const [start, end] = date;

    if (isSelectingStart) {
      setStartDate(start);
      setEndDate(null);
      setIsSelectingStart(false);
    } else {
      setEndDate(end);
      setIsSelectingStart(true);
    }
  };

  return (
    <div>
      <DrawerContent className={`w-[100%] max-w-[768px] left-[50%]`} style={{ marginLeft: `-${refSize}px` }}>
        <DrawerHeader>
          <DrawerTitle className='mb-[20px] text-center text-[18px]'>날짜 선택</DrawerTitle>
          <p className='p-[10px] flex items-center gap-[5px] text-[12px] text-center bg-[#f1f1f1] rounded-[5px]'>
            <span className='w-[16px]'>
              <IoMdInformationCircle size="100%" fill='#1A1A1A' />
            </span>
            이 숙소는 최대 9박 까지 예약할 수 있어요
          </p>
          <DrawerDescription>
            <div className='stay_reservation'>
              <DatePicker
                selectsStart={isSelectingStart}
                selectsEnd={!isSelectingStart}
                startDate={pickerStartDate ? pickerStartDate : undefined}
                endDate={pickerEndDate ? pickerEndDate : undefined}
                onChange={onChangeEnd}
                minDate={pickerStartDate ? pickerStartDate : undefined}
                maxDate={new Date(new Date().setMonth(new Date().getMonth() + 4))}
                selectsRange
                locale={ko as unknown as Locale}
                isClearable={true}
                monthsShown={1}
                showPopperArrow={false}
                dateFormat="yyyy.MM.dd(eee)"
                inline
              />
            </div>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose className='flex justify-center'>
            <button className='py-[10px] max-w-[500px] w-full inline-block text-[16px] text-[#fff] text-center font-[600] bg-[#0f2edb] hover:bg-[#0d0d91] rounded-[5px]'>
              {buttonStartDate} {buttonEndDate ? `~ ${buttonEndDate}` : ''}
            </button>
          </DrawerClose>
          <DrawerClose className='w-[24px] absolute left-2 top-2'>
            <IoClose size="100%" fill='#1a1a1a' />
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </div>
  );
}

export default DatePickerCustom;
