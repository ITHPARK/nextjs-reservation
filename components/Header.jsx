"use client"

import React, {useState, useEffect} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import Link from 'next/link';

const Header = () => {

    const [headerY, setHeaderY] = useState(0);
    const [border, setBorder] = useState(false);

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
    

  return (
    <header className={`w-full h-20 fixed transform transition-all duration-1000 bg-[#fff] z-20 after:content-[''] after:w-full after:h-[2px] after:absolute after:bottom-[-1px] after:left-[0] after:bg-custom-gradient after-transition ${border ? "after:opacity-100" : "after:opacity-0"}`}>
        <div className='w-[768px] h-full mx-auto  flex align-center'>

            {/* 네비게이션 바 */}
            <nav className='w-full flex justify-between items-center relative gap-[15px] '>
                
                <RxHamburgerMenu size={32} color='#000' className='p-[5px]'/>
                
                <div className='flex-1 relative h-full'>
                <div className={`w-full text-center absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ${headerY > 1 ? "top-[-76px]" : "top-0"} bg-[#fff]`}>
                        <div className="pt-8 pb-4 w-[200px] inline-block relative" >
                            <img src="/images/logo_yanolja.png" alt="" />
                        </div>
                        <div className={`w-full h-[44px] flex justify-center items-center text-left  rounded-[25px]  ${headerY > 1 ? "bg-tarnparent" : "bg-custom-gradient" }`}>
                            <Link href="" className={`w-[calc(100%-4px)] h-[calc(100%-4px)] flex items-center rounded-[25px] px-[20px] ${headerY > 1 ? "bg-[#f8f8f8]":"bg-[#fff]"}`}>
                                <IoIosSearch size={32} color="#8a8a8a" className='p-[5px]'/>
                                <p className='text-[14px] text-grayFont1'>애버랜드 1+1 골드축제</p>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <LuShoppingCart size={32} color='#000' className='p-[5px]'/>
            </nav>

            {/* 디테일 페이지 */}
            <div className='hidden'>
                
            </div>

        </div>
    </header>
  )
}

export default Header