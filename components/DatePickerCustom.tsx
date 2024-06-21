"use client"

import React, {useState, useEffect} from 'react'
import DatePicker, {  } from "react-datepicker";
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
import { DateRangePickerProps, DatePickerCustomProps } from '@/types/types';



const DatePickerCustom: React.FC<DatePickerCustomProps> = ({setStartDate, setEndDate, pickerStartDate, pickerEndDate}) => {

  //한번 클릭 시 시작날짜 두번 째 클릭 시 종료날짜
  const [isSelectingStart, setIsSelectingStart] = useState(true);
  
  //date 파라미터의 타입은 단일 날짜, 시작과 종료날짜가 있는 배열, NULL값이다. 
  
  const onChangeEnd: DateRangePickerProps['onChange'] = (date: Date | [Date, Date] | null) => {


    // 여기서 단일 날짜 또는 null 값은 무시한다.
    if (date instanceof Date || date === null) {
      return;
    }

  
   //date 파라미터는 시작날짜와 종료날짜가 담겨있기때문에 배열변수로 만든다.
   const [start, end] = date;
    
    if (isSelectingStart) {
      // 시작 날짜 수정
      setStartDate(start);
      // 종료 날짜 초기화
      setEndDate(null);
      // 다음 클릭은 종료 날짜 설정을 위한 처리
      setIsSelectingStart(false);

      console.log("시작날짜" + pickerStartDate)

    } else {

      console.log(pickerEndDate)
      // 종료 날짜 수정
      setEndDate(end);
      // 다음 클릭은 시작 날짜 설정을 위한 처리
      setIsSelectingStart(true);

      console.log("종료날짜" + pickerEndDate)

    }
  
  };




  return (
    <div>
      
      <DatePicker
        // selected={new Date()} //초기에 선택된 날짜
        selectsStart={isSelectingStart} //시작날짜 설정 true값일 때 시작날짜를 설정할 수 있다.
        selectsEnd={!isSelectingStart} //종료날짜 설정
        startDate={pickerStartDate ? pickerStartDate : undefined}
        endDate={pickerEndDate ? pickerEndDate : undefined}
        onChange={onChangeEnd}
        minDate={pickerStartDate ? pickerStartDate : undefined} //현재시점의 이전 달 비활성화
        maxDate={new Date(new Date().setMonth(new Date().getMonth() + 4))} // 현재 시각 이후 9일 후까지만 선택 가능
        selectsRange
        locale={ko} //한국말 (import 해야함)
        isClearable={true}
        monthsShown={1}
        showPopperArrow={false} //디폴트 스타일로 있는 뾰족한 화살표 없애기
        dateFormat = "yyyy.MM.dd(eee)"
        inline
        />           
    </div>
  )
}

export default DatePickerCustom



