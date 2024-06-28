"use client"

import React, {useState, useEffect} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosSearch, IoIosArrowBack  } from "react-icons/io";
import Link from 'next/link';
import {usePathname,  useRouter} from 'next/navigation';
import { useStayData } from '@/store/store';
import {StayInfo} from "@/types/types";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { IoClose, IoHomeOutline } from "react-icons/io5";



const Header = () => {

    const [headerY, setHeaderY] = useState(0);
    const [border, setBorder] = useState(false);
    const [placeData, setPlaceData] = useState<StayInfo | null>(null);
    const [headerTit, setHeaderTit] = useState<String | number>("")
    
    const { stayData } = useStayData();

    const pathname = usePathname();
    const router = useRouter();
    const {push} = useRouter();

    const onScroll = () => {
        setHeaderY(window.scrollY);
    }

    useEffect(() => {

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        }

    }, [])

    useEffect(() => {
        if (headerY > 1) {
            const timer = setTimeout(() => {
                setBorder(true);
            }, 200);

            return () => clearTimeout(timer);
        } else {
            setBorder(false);
        }
    }, [headerY]);

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
                 setHeaderTit(stayData[index].title);
             } else {
                 // 맞는 데이터가 없는경우  = -1 리턴했을 때
                 console.log("정보 없음");
             }
 
         }
    })

    useEffect(() => {
        if(pathname === "/recommend/list"){
            setHeaderTit("핫딜");
        }else if(pathname === "/recommend/ranking") {
            setHeaderTit("TOP 숙소");
        }else if(pathname === "/recommend/recently") {
            setHeaderTit("최근 본 숙소");
        }else if(pathname === "/cart"){
            setHeaderTit("장바구니");
        }else if(pathname === "/reservtion") {
            setHeaderTit("예약 내역");
        }
    }, [pathname])

    const handleClickBack = () => {
        router.back();
    }

    


  return (
    <header className={`w-full ${headerY > 1? "h-20" : "h-32" } fixed transform left-0 transition-all duration-1000 bg-[#fff] z-20 after:content-[''] after:w-full after:h-[2px] after:absolute after:bottom-[-1px] after:left-[0] after:bg-custom-gradient after-transition ${border ? "after:opacity-100" : "after:opacity-0"}`}>

        <Drawer direction='left' >

       
        <div className='w-[100%] h-full mx-auto  flex align-center'>

            {/* 네비게이션 바 */}
            <nav className='w-full flex justify-between items-center relative gap-[15px] '>
                {
                    pathname === "/"? 
                        <DrawerTrigger><RxHamburgerMenu size={32} fill='#000' className='p-[5px] cursor-pointer'/></DrawerTrigger>
                    :
                        <IoIosArrowBack size={32} fill='#000' className='p-[3px] cursor-pointer' onClick={handleClickBack}/>
                }
                
                
                <div className='flex-1 relative h-full flex items-center'>
                    <div className={`w-full text-center absolute left-1/2 transform -translate-x-1/2 transition-all duration-500  bg-[#fff] `}>
                        {/* <div className="pt-8 pb-4 w-[200px] inline-block relative" >
                            <img src="/images/logo_yanolja.png" alt="" />
                        </div> */}
                        <div className={`w-full h-[44px] flex justify-center items-center text-left  rounded-[25px]  ${headerY > 1 ? "bg-tarnparent" : "bg-custom-gradient" }`}>
                            <Link href="" className={`w-[calc(100%-4px)] h-[calc(100%-4px)] flex items-center rounded-[25px] px-[20px] ${headerY > 1 ? "bg-[#f8f8f8]":"bg-[#fff]"}`}>
                                <IoIosSearch size={32} color="#8a8a8a" className='p-[5px]'/>
                                <p className='text-[14px] text-grayFont1'>애버랜드 1+1 골드축제</p>
                            </Link>
                        </div>       
                    </div>

                    {
                        pathname !== "/" &&
                        <div className='h-full flex justify-center items-center'>
                            <p className='text-[16px] font-[600]'>{headerTit}</p>
                        </div> 
                    }
                </div>
        
               
                {
                    pathname === "/cart"? 
                    <IoHomeOutline size={32} color='#000' className='p-[5px] cursor-pointer' onClick={() => {push("/")}} />
                    :
                    <LuShoppingCart size={32} color='#000' className='p-[5px] cursor-pointer' onClick={() => {push("/cart")}}/>
                }
                
            </nav>

            {/* 디테일 페이지 */}
            <div className='hidden'> 
            </div>
        </div>


        <DrawerContent className='pt-[60px] w-[60%] min-w-[500px] h-[100vh] rounded-[0] menu-pop' >
            <DrawerClose className='w-[24px] absolute right-[20px] top-[20px]'>
                <IoClose size="100%" fill='#1a1a1a'/>
            </DrawerClose>
            <DrawerDescription>
                <ul>
                    <li className='px-[20px]' onClick={() => {push("/reservation")}}>
                        <span  className='py-[10px] w-full block text-[18px] text-[#1a1a1a] font-[600] border-b-[1px] border-[#f2f2f2]'>예약내역</span>
                        
                    </li>                                                               
                </ul>
            </DrawerDescription>
        </DrawerContent>
        </Drawer>
    </header>
  )
}

export default Header