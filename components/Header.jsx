
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import Link from 'next/link';

const Header = () => {
  return (
    <header className='w-full h-20 fixed  '>
        <div className='w-[768px] h-full mx-auto  flex align-center'>

            {/* 네비게이션 바 */}
            <nav className='w-full flex justify-between items-center relative gap-[15px] '>
                
                <RxHamburgerMenu size={32} color='#000' className='p-[5px]'/>
                
                <div className='flex-1 relative h-full'>
                    <div className='w-full text-center absolute left-[50%] translate-x-[-50%]'>
                        <div className='w-[200px] inline-block pt-8 pb-4'>
                            <img src="/images/logo_yanolja.png" alt="" />
                        </div>
                        <div className='w-full h-[44px] flex justify-center items-center text-left bg-custom-gradient rounded-[25px]'>
                            <Link href="" className='w-[calc(100%-4px)] h-[calc(100%-4px)] flex items-center bg-[#fff] rounded-[25px] px-[20px] '>
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