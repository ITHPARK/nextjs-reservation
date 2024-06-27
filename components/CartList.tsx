"use client"

import React, {useState, useEffect, useCallback} from 'react'
import { useCart } from '@/store/store';
import {AddCartInfo} from '@/types/types';
import {useRouter} from 'next/navigation';
import { LuShoppingCart } from "react-icons/lu";

const CartList = () => {

  const { cart, setCart } = useCart();
  const {push} = useRouter();
  
  const [cartList, setCartList] = useState<AddCartInfo[] | null>(null);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [setCart]);

  useEffect(() => {
    setCartList(cart);
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      localStorage.removeItem('cart');
    }
  }, [cart]);


  const handleClick: React.MouseEventHandler<HTMLDivElement> =  useCallback((event) => {
    const target = event.currentTarget;
    const id = target.getAttribute('data-id');
    if (id) {
      push( `/place/${id}`);
    }
  }, [push]);

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
    //이벤트 버블링 또는 버블업을 막는 것
    event.stopPropagation(); 
    event.preventDefault(); 


    if(confirm("예약을 취소하시겠습니까?")) {
      const newCart = cart.filter((_ : AddCartInfo, i : number) => i !== index);
      setCart(newCart)
      alert("예약이 취소 되었습니다.")
    }else {
        return false;
    }
  };
  


  return (
    <div className='mb-[50px]'>

      <h2 className='mb-[30px] pt-[50px] text-[20px] font-[600] text-center'>예약내역</h2>

      {
        cart.length > 0 ? 
        <div className=''>
          {
            cartList?.map((item: AddCartInfo, index: number) => {
              return (
                <div key={item.data?.contentid} className='flex border-b-[1px] border-solid border-[#ddd] rounded-[5px] cursor-pointer overflow-hidden' onClick={handleClick} data-id={item.data?.contentid}>
                  <div className='w-[100%] max-w-[200px]'>
                    <img src={item.data?.firstimage} alt="숙소 이미지" />
                  </div>
                  <div className='px-[20px] py-[10px] flex-1 flex flex-col justify-between'>
                    <div>
                      <h3 className='text-[14px] font-[600]'>{item.data?.title}</h3>
                      <div className='flex items-center gap-[10px]'>
                        <p className='text-[12px] font-[500]'>{`${item.buttonStartDate} ~ ${item.buttonEndDate}`}</p>
                        <p className='text-[12px] font-[500]'>{`성인 ${item.adult} | 아동 ${item.child} `}</p>
                      </div>
                    </div>
                    <div className='flex justify-end'>
                      <button className='w-[100%] max-w-[120px] py-[8px] inline-block bg-[#0f2edb] text-[12px] text-[#fff] rounded-[3px]' onClick={(e) => handleCancel(e, index)}>예약취소</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        :
        <div className='flex flex-col items-center'>
          <span className='w-[150px]'>
           <LuShoppingCart size="100%" color='#ddd' className='p-[5px] cursor-pointer' onClick={() => {push("/cart")}}/>
          </span>
          <p className='mb-[5px] text-[18px] font-[600]'>예약된 숙소가 없습니다.</p>
          <p className='text-[14px] font-[400]'>원하는 상품을 담아보세요.</p> 
        </div>
      }
      
    </div>
  )
}

export default CartList