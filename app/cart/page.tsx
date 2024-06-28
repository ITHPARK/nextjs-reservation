import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import CartList from '@/components/CartList';


const Home = () => {
  
  const boxStyleClass= clsx(
    'mt-[10px]',
    'pl-[10px]',
    'relative',
    'text-[12px]',
    'text-[#6D6D6D]',
    'after:content-[""]',
    'after:w-[2px]',
    'after:h-[2px]',
    'after:absolute',
    'after:left-[0]',
    'after:top-[50%]',
    'after:translate-y-[-50%]',
    'after:rounded-[50%]',
    'after:bg-[#6d6d6d]'  
  )

  return (
    <div className="w-full pt-[100px]" > 


      <div>
        <CartList />
      </div>
      

      <ul className='mt-[30px]'>
        <li className={boxStyleClass}>장바구니에 담긴 상품은 최대 30일간 보관되며 최대 20개의 상품을 담을 수 있습니다.</li>
        <li className={boxStyleClass}>일부 상품의 경우, 장바구니에서 수량 및 상세 옵션 수정이 불가하므로 삭제 후 다시 담아주시기 바랍니다.</li>
        <li className={boxStyleClass}>쿠폰 및 포인트는 예약화면에서 적용할 수 있습니다.</li>
        <li className={boxStyleClass}>기차는 국내숙소와 &apos;묶음예약&apos;만 가능합니다. 숙소를 제외한 다른 상품은 기차와 함께 예약할 수 없습니다.</li>
        <li className={boxStyleClass}>기차와 국내숙소를 &apos;묶음예약&apos;하면, 일부 상품만 취소할 수 없고 전체 취소만 가능합니다.</li>
      </ul>
    </div>
  );
}


export default Home
