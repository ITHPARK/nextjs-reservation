"use client"

import React, {useState, useEffect, useRef } from 'react'
import { IoMdInformationCircleOutline } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { BsPeople } from "react-icons/bs";
import { MdOutlineBedroomChild } from "react-icons/md";
import {StayInfo, AddInfo} from "@/types/types";
import { useStayData, useCart, useReservation } from '@/store/store';
import { usePathname, useRouter } from 'next/navigation'
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { IoShareSocialOutline  } from "react-icons/io5";
import { SlPresent } from "react-icons/sl";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import {
  Drawer,
  DrawerTrigger,
} from "@/components/ui/drawer"
import DatePickerCustom from "@/components/DatePickerCustom";
import GuestsNumber from '@/components/GuestsNumber';
import ReservationAlert from "@/components/ReservationAlert";



const StayResult = () => {

    const [placeData, setPlaceData] = useState<StayInfo | null>(null);
    const [likeState, setLikeState] = useState<boolean>(true);

    //store에서 가져온 값
    const { stayData } = useStayData();
    const { cart, setCart } = useCart();
    const { reservation, setReservation } = useReservation();

    const pathname : string = usePathname();
    
    //ref는 html 엘레먼트이므로 HTMLDivElement 타입을 준다.
    const sizeRef = useRef<HTMLDivElement>(null);

    //ref 너비
    const [refSize, setRefSize] = useState<number>();

    //시작 날짜와 종료 날짜 날짜 자료형이거나 null일 수 있음
    //시작날짜는 오늘날짜로 설정해준다  
    const [pickerStartDate, setStartDate] = useState<Date| null>(new Date());
    const [pickerEndDate, setEndDate] = useState<Date| null>(null)


    const [buttonStartDate, setButtonStartDate] = useState<string>();
    const [buttonEndDate, setButtonEndDate] = useState<string>();
    const [night, setNight] = useState<number>(0);

    //shadcn 컴포넌트 트리거 각각 나누기
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    //인원수 선택
    const [adult, setAdult] = useState<string>("2");
    const [child, setChild] = useState<string>("0");

    //예약날짜가 오늘인지 비교해서 모달 열기
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [modalControl, setModalControl] = useState<number>(2);

    const {push} = useRouter();


     //tailwind css 동적할당을 위한 객체
     type viewType = Record<number, string>;
     const view: viewType = {
         1: 'flex opacity-[1]',
         2: 'hidden opacity-[0]',
     };

    
    useEffect(() => {

        //문자열에서 정규식에 일치하는 것을 찾기

        const match: RegExpMatchArray | null = pathname.match(/\/place\/(\d+)/);
      
        //match가 null이 아닐때도 고려해야함
        if(match !== null && stayData.length > 0) {

            //match에서 나온 값을 사용
            const targetContentId = match[1];

            //격체이서 현재 url id값과 같은 값의 인덱스를 찾기
            const index = stayData.findIndex(stay => stay.contentid === targetContentId);


            if (index !== -1) {
                // 맞는 데이터가 있으면 state에 할당
                setPlaceData(stayData[index]);

                const isKeyInStorage = (key: string):boolean =>  {
                    return localStorage.getItem(key)!== null;
                }

                const array: StayInfo[] | null = [];

                if(isKeyInStorage("recently")) {
                    
                    //최근 본 숙소들을 담은 배열
                    let storedData = localStorage.getItem("recently");
                    const viewDate = stayData[index];

                    if(storedData) {
                        let parseData =JSON.parse(storedData)

                        //본 숙소가 중복추가되지 않게 처리
                        const idx = parseData.findIndex((stay: StayInfo) => stay.contentid === stayData[index].contentid)

                        if(idx == -1) {
                            parseData.push(viewDate); 

                            //10개 이상이면 첫번쨰 요소 제거
                            if(parseData.length > 10){
                                parseData.shift();
                            }

                            localStorage.setItem("recently", JSON.stringify(parseData));
                        }
                    }
                }else {
                    //데이터가 없으면 빈배열 추가 (로컬스토리지에는 문자열 형식의 값을 저장할 수 있다. 배열을 저장하려면 JSON.stringfy로 배열을 문자열로 변환해줘야함)
                    localStorage.setItem("recently", JSON.stringify(array));
                }
            } else {
                // 맞는 데이터가 없는경우  = -1 리턴했을 때
                console.log("정보 없음");
            }
        }
    
    },[stayData]);

    

    useEffect(() => {

        const currentRef = sizeRef.current;
        setRefSize((currentRef?.offsetWidth || 0) / 2);

        window.addEventListener("resize", resizeListener);

        return () => {
           window.removeEventListener("resize", resizeListener);
        };

    }, [sizeRef.current, refSize]);


    //시작 날짜와 종료날짜를 원하는 형식으로 변환하기
    useEffect(() => {

        const start = pickerStartDate
        const end = pickerEndDate
        let formattedStartDate = '';
        let formattedEndDate = '';


         /*
            유효한 날짜인지 확인하는 함수
            date가 Date 객체인지 확인
            getTime() 메서드를 호출하여 해당 날짜와 시간을 밀리초 단위의 숫자 값으로 반환
            만약 날짜가 유효하지 않다면, getTime()은 NaN을 반환
         */
            const isValidDate = (date: Date | null): boolean => {
                return date instanceof Date && !isNaN(date.getTime());
            };


        const dateFormatOptions = {
           weekday: 'short', // 요일 (짧은 형식)
           month: 'numeric', // 월 (숫자 형식)
           day: '2-digit',   // 일 (2자리 숫자 형식)
        };

        //null체크 필요
        if (start !== null && isValidDate(start)) {
            formattedStartDate = new Intl.DateTimeFormat('ko-KR', dateFormatOptions as {}).format(start);
        }
        
        if (end !== null && isValidDate(end)) {
            formattedEndDate = new Intl.DateTimeFormat('ko-KR', dateFormatOptions as {}).format(end);
        }


        setButtonStartDate(formattedStartDate)
        setButtonEndDate(formattedEndDate)

        setNight(calculateNights(pickerStartDate, pickerEndDate));

    }, [pickerStartDate, pickerEndDate])


    const calculateNights = (startDate: Date | null, endDate: Date | null): number =>{
        if (!startDate || !endDate) return 0;
  
        //밀리초 숫자 단위로 나누고 뺀다
        const timeDifference = endDate.getTime() - startDate.getTime();
  
        //뺀 숫자를 일수 단위로 계산.
        const daysDifference = timeDifference / (1000 * 3600 * 24);
        
        return Math.ceil(Math.max(daysDifference, 0)); 
    };
    
    const handleLike = () => {
        setLikeState(prev => !prev);
    }

    //마우스 이벤트를 처리하는 함수의 타입
    const handleClickCart = (data: StayInfo | null, buttonStartDate: string | undefined, buttonEndDate: string | undefined, night: number, adult: string, child: string) => (event: React.MouseEvent<HTMLButtonElement>) => {

        if(data && buttonStartDate && buttonEndDate) {

            //장바구니에 담았을 때 저장할 정보들
            let cartInfo: AddInfo ={
                data,
                buttonStartDate,
                buttonEndDate,
                night,
                adult,
                child
            }
        
            //store에 추가하기 위해서 객체를 배열에 넣어줌
            const arr = [...cart];
            arr.push(cartInfo);
            setCart(arr);

            if(Number(adult) || Number(child)){
                if(confirm("장바구니에 추가되엇습니다.\n장바구니로 이동하시겠습니까?")) {
                    push("/cart");
                }else {
                    return false;
                }
            }else {
                alert("인원수를 선택해주세요");
            }

           
        }else {
            alert("예약 날짜를 선택해주세요");
            return false;
        }
    };

    const reservations = (data: StayInfo | null, buttonStartDate: string | undefined, buttonEndDate: string | undefined, night: number, adult: string, child: string) => {

        if(data && buttonStartDate && buttonEndDate) {

            //장바구니에 담았을 때 저장할 정보들
            let reservationInfo: AddInfo ={
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
    } 

    const handleClickReservation = () => {
        const today = new Date();

        console.log(321);

        if (pickerStartDate && pickerEndDate) {
            //년 월 일을 모두 비교
            const isSameYear = today.getFullYear() === pickerStartDate.getFullYear();
            const isSameMonth = today.getMonth() === pickerStartDate.getMonth();
            const isSameDay = today.getDate() === pickerStartDate.getDate();

            if(confirm(`${buttonStartDate} ~ ${buttonEndDate} 날짜로 예약하시겠습니까?`)) {
                if (isSameYear && isSameMonth && isSameDay) {
                    setIsOpen(true);
                    setModalControl(1);
                } else {
                    reservations(placeData, buttonStartDate, buttonEndDate, night, adult, child);
                    setIsOpen(false);
                    setModalControl(2);
                    alert("예약되었습니다!")
                    push("/reservation");
                }    
            }else {
                return false;
            }
        }else {
            alert("날짜를 선택해주세요");
        }
    }


    const resizeListener = () => {
        // DrawerContent가 렌더링된 후에 ref를 확인한다.
        const currentRef = sizeRef.current;
        
        //margin-left로 줄 값
        setRefSize((currentRef?.offsetWidth || 0) / 2);
    };
 


  return (
    <section className=' mb-[50px] '>

        <Drawer>
     
        <div ref={sizeRef}>
            <div className={`mb-[40px] w-full h-[50vh] relative overflow-hidden`} >
                <img src={placeData ? placeData.firstimage : ''} alt=""  className='left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] inline-block absolute ' />
            </div>
            <div>        
                <span className='px-[10px] py-[8px] text-[12px] block'>일반 호텔</span>
        
                <div className='px-[10px] py-[8px] flex justify-between'>
                    <h3 className=' text-[20px] font-[600]  leading-[1] '>{placeData ? placeData.title : ''}</h3>
                    <div className='flex items-center gap-[10px]'>
                        <div>
                            {likeState ? 
                                <button className='w-[24px]' onClick={handleLike}><BiLike size='100%'/></button> :
                                <button className='w-[24px]' onClick={handleLike}><BiSolidLike size='100%'/></button>
                            }
                        </div>
                        <div>
                            <button className='w-[24px]'><IoShareSocialOutline size='100%' /></button>
                        </div>
                    </div>
                </div>

                <button className='mb-[10px] px-[10px] flex gap-[5px] '>
                    <span className='w-[12px]'><FaLocationDot size="100%" fill='#0152cc' /></span>
                    <span className='text-[14px] text-[#0152cc] tracking-[-0.04em]'>{placeData ? placeData.addr1 : ''} &gt;</span>
                </button>

                <p className='mt-[3px] px-[10px] flex items-center text-[12px] font-[600]'>
                    <span className='w-[12px] h-[12px] inline-block'>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.1149 9.25905L15.8636 8.47606C15.4878 8.42386 15.1746 8.19418 15.0076 7.84966L12.6586 3.08907C12.5855 2.94291 12.4707 2.82807 12.3245 2.75499C11.9591 2.57751 11.5206 2.72367 11.3327 3.08907L8.98373 7.84966C8.81669 8.18374 8.49306 8.42386 8.12766 8.47606L2.87639 9.23817C2.7198 9.25905 2.5632 9.33213 2.4588 9.45741C2.32308 9.59312 2.25 9.79148 2.25 9.9794C2.25 10.1778 2.33352 10.3657 2.46924 10.5014L6.26936 14.2076C6.5408 14.4686 6.65564 14.8444 6.593 15.2202L5.69517 20.4506C5.67429 20.5863 5.69517 20.7221 5.73693 20.8578C5.78912 20.9831 5.87264 21.0979 5.98748 21.1814C6.10232 21.2649 6.2276 21.3067 6.36332 21.3171C6.49904 21.3171 6.63476 21.2962 6.76004 21.2336L11.458 18.7594C11.7921 18.5819 12.1888 18.5819 12.5229 18.7594L17.2208 21.2336C17.367 21.3067 17.534 21.338 17.6906 21.3067C18.0873 21.2336 18.3588 20.8578 18.2961 20.4611L17.3983 15.2307C17.3356 14.8653 17.4609 14.4894 17.7219 14.218L21.522 10.5118C21.6369 10.397 21.71 10.2508 21.7413 10.0942C21.8039 9.68708 21.522 9.32169 21.1149 9.25905Z" fill="#FDBD00"></path><path clipRule="evenodd" d="M10.8881 2.86032C11.1993 2.25507 11.9314 2.00812 12.543 2.30516L12.5481 2.30767C12.791 2.42913 12.9843 2.62246 13.1058 2.86539L13.107 2.86775L15.4575 7.63144C15.5528 7.82802 15.7244 7.95184 15.9324 7.98073L15.9374 7.98142L21.1909 8.76478C21.857 8.86726 22.3422 9.47631 22.2355 10.1702L22.2338 10.1813L22.2316 10.1922C22.1827 10.4365 22.0665 10.6744 21.8756 10.8653L21.8712 10.8697L18.0775 14.5696C17.9224 14.7339 17.8575 14.95 17.8911 15.1461L18.79 20.383C18.8957 21.0524 18.4402 21.6749 17.7848 21.7977C17.5011 21.8534 17.2225 21.7934 16.9972 21.6807L16.9878 21.676L12.2899 19.2017L12.2883 19.2008C12.1009 19.1013 11.88 19.1013 11.6926 19.2008L11.691 19.2017L6.98369 21.6808C6.76748 21.789 6.54838 21.8171 6.36332 21.8171H6.34412L6.32497 21.8156C6.10569 21.7987 5.88991 21.7286 5.6934 21.5857C5.49494 21.4414 5.35813 21.2486 5.27539 21.05L5.26612 21.0278L5.25904 21.0047C5.20428 20.8268 5.16465 20.6106 5.20098 20.3745L5.2023 20.3659L6.0998 15.138C6.09986 15.1376 6.09992 15.1373 6.09997 15.1369C6.13687 14.9136 6.06759 14.7071 5.9228 14.5679L5.92025 14.5654L2.11566 10.8549C1.89155 10.6308 1.75 10.3177 1.75 9.97933C1.75 9.6801 1.86089 9.35762 2.08961 9.11973C2.28696 8.89312 2.55812 8.7768 2.80705 8.74292L8.05585 7.98116L8.05695 7.98101C8.25294 7.95301 8.43916 7.81987 8.53602 7.62698C8.53618 7.62665 8.53635 7.62631 8.53652 7.62598L10.8881 2.86032ZM11.7788 3.31492L9.43212 8.07083L9.43095 8.07319C9.1937 8.54769 8.73327 8.89427 8.19914 8.97085C8.19888 8.97088 8.19939 8.97081 8.19914 8.97085L2.94248 9.73374C2.91721 9.73711 2.89363 9.74459 2.87486 9.75414C2.85639 9.76355 2.84691 9.77262 2.84291 9.77742L2.82839 9.79485L2.81235 9.81088C2.78022 9.84302 2.75 9.90945 2.75 9.97933C2.75 10.037 2.77488 10.099 2.82117 10.1461L6.61591 13.8471C6.61639 13.8475 6.61688 13.848 6.61736 13.8485C7.01416 14.2309 7.17408 14.775 7.08619 15.3024L7.08579 15.3047L6.18893 20.5295C6.18454 20.5614 6.18636 20.6091 6.20723 20.6847C6.22791 20.7266 6.25437 20.7572 6.28157 20.777C6.31092 20.7983 6.34156 20.8113 6.38438 20.8168C6.45586 20.8148 6.50177 20.8029 6.53316 20.7879L11.2234 18.3177C11.2237 18.3175 11.2241 18.3174 11.2244 18.3172C11.7046 18.0625 12.2762 18.0625 12.7565 18.3172C12.7568 18.3174 12.7571 18.3175 12.7574 18.3177L17.4481 20.7882C17.5124 20.8194 17.5649 20.8218 17.5925 20.8163L17.6 20.8148C17.7353 20.7899 17.8205 20.6634 17.8026 20.5413L16.9055 15.3152C16.8142 14.7826 16.9981 14.2493 17.3615 13.8714L17.3671 13.8656L21.1701 10.1566C21.2058 10.1202 21.2339 10.0703 21.2484 10.008C21.2611 9.89116 21.1832 9.7758 21.0398 9.7533C21.0395 9.75325 21.0401 9.75334 21.0398 9.7533L15.7948 8.97123C15.7939 8.9711 15.793 8.97097 15.7921 8.97084C15.2503 8.89468 14.797 8.5601 14.5584 8.06936C14.5582 8.06881 14.5579 8.06827 14.5576 8.06772L12.2114 3.3126C12.2112 3.3123 12.2111 3.312 12.2109 3.31169C12.1867 3.26364 12.1513 3.22798 12.1035 3.20347C11.9857 3.14781 11.8436 3.19233 11.7788 3.31492Z" fill="#B46D0E"></path></svg>
                    </span>
                    {placeData ? placeData.rating : ''}
                </p>
            </div>
            <div className='mt-[20px] px-[10px] '>
                <div className='mb-[15px]'>
                    <h3 className='flex gap-[8px] text-[14px] '><span className='w-[18px]'><SlPresent size="100%"/></span>숙소 이벤트</h3>
                </div>
                <div className='w-full'>
                    <Link href="">
                        <img src="/images/place_event_banner.png" alt="이벤트 배너" />
                    </Link>
                </div>
            </div>
            <div className='mt-[40px] mb-[20px] px-[10px] '>
                <h4 className='mb-[10px] text-[18px] font-[600]'>객실선택</h4>
                <div className='flex border-[1px] border-solid border-[#b1b1b1] rounded-[5px] overflow-hidden'>
                    <DrawerTrigger  asChild>
                        <button className='p-[10px] w-[65%] text-left border-[1px] border-solid border-r-[#b1b1b1] text-[14px] font-[600]' onClick={() => setIsDrawerOpen(true)}>{buttonStartDate}~{buttonEndDate} / {night}박</button>
                    </DrawerTrigger>
                    
                    <DrawerTrigger asChild className='flex-1 '>
                        <button className='p-[10px] text-left text-[14px] font-[600]' onClick={() => setIsDrawerOpen(false)}>성인 {adult}, 아동 {child} </button>
                    </DrawerTrigger>
                    
                </div>
            </div>
            <div className='px-[10px] pb-[20px] flex flex-col border-b-[1px] border-[]'>
                <div className='w-full'>
                    <div className='w-full flex gap-[20px]'>
                        <div className='w-[40%]'>
                            <ul className='mb-[10px]'>
                                <li className='rounded-[5px] overflow-hidden'>
                                    <img src={placeData ? placeData.firstimage : ''} alt="" />
                                </li>
                            </ul>

                            <div>
                                <p className='mb-[5px] text-[18px] text-[#1a1a1a] font-[600]'>객실1</p>
                                <ul>
                                    <li className='flex items-center gap-[8px]'>
                                        <span className='block w-[18px]'><BsPeople size="100%" fill="#6d6d6"/></span>
                                        <p className='text-[#6d6d6] text-[14px]'></p>
                                    </li> 
                                    <li className='flex items-center gap-[8px]'>
                                        <span className='block w-[18px]'><MdOutlineBedroomChild size="100%" fill="#6d6d6" /></span>
                                        <p className='text-[#6d6d6] text-[14px]'>체크인 시 배정</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=' flex-1'>
                            <div className='p-[15px] border-[1px] border-solid border-[#e6e6e6] rounded-[5px]'>
                                <div className='mb-[8px] flex justify-between items-center'>
                                    <span className='text-[12px] font-[600]'>숙박</span>
                                    <button className='text-[12px] text-[#0152cc] font-[600]'>상세보기 &gt;</button>
                                </div>
                                <p className='mb-[20px] text-[12px] text-[#6d6d6d]'>체크인 15:00 ~ 체크아웃 11:00</p>
                                <div className='flex flex-col justify-end'>
                                    <p className='text-right '><span className='inline-block mr-[5px] text-[14px]'>{placeData ? `${Math.floor(100 - (Number(placeData.price.replace(/,/g, "")) / 200000) * 100) }%`  : ""}</span> <span className='text-[14px] relative after:content-[""] after:w-[110%] after:h-[1px] after:bg-[#1a1a1a] after:absolute after:left-[50%] after:top-[50%] after:translate-x-[-50%] after:translate-y-[-50%]'>200,000</span></p>
                                    <p className='flex justify-end text-[18px] font-[600]'>{placeData ? placeData.price : ''}원 <button className='w-[18px] inline-block '><IoMdInformationCircleOutline size="100%"  /></button></p>
                                    <p className='flex justify-end text-[12px] text-[#6D6D6D]'>취소 및 환불 불가 <button className='w-[16px]'><IoMdInformationCircleOutline size="100%" /></button></p>
                                </div>
                                <div className='mt-[15px] flex justify-end gap-[10px]'>
                                    <button className='w-[32px] p-[5px] inline-block border-[1px] border-solid border-[#b1b1b1] rounded-[4px]' onClick={handleClickCart(placeData, buttonStartDate, buttonEndDate, night, adult, child )}><LuShoppingCart size="100%" color='#000'/></button>
                                    <button className='min-w-[120px] bg-[#0f2edb] text-[12px] text-[#fff] rounded-[3px]'  onClick={handleClickReservation}>예약하기</button>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>

        
        {
            isDrawerOpen ?
            <DatePickerCustom 
                pickerStartDate = {pickerStartDate}
                pickerEndDate = {pickerEndDate}
                setStartDate = {setStartDate}
                setEndDate = {setEndDate}    
                refSize = {refSize}     
                buttonStartDate ={buttonStartDate}
                buttonEndDate = {buttonEndDate}
            />
           :
        
            <GuestsNumber
                refSize = {refSize}  
                adult = {adult}
                child = {child}
                setAdult = {setAdult}
                setChild = {setChild}
            />
        }
        
        </Drawer>

        <div className={`w-full h-full ${view[modalControl]} justify-center items-center fixed left-0 top-0 bg-bgModal transition-[all] z-100 `}>
            <ReservationAlert 
                setModalControl = {setModalControl}
                data = {placeData}
                buttonStartDate = {buttonStartDate}
                buttonEndDate  = {buttonEndDate}
                night = {night}
                adult = {adult}
                child = {child}
            />
        </div>
        
        
       
    </section>
  )
}

export default StayResult
