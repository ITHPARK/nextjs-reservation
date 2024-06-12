import React from 'react';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='p-[20px] pb-[50px] bg-[#f2f2f2]'>
        <div className='w-full mb-[20px]'>
            <img src="/images/ico_footer.svg" alt="로고" />
        </div>
        <p className='mb-[20px] text-[11px] text-[#6d6d6d] leading-[1.6] tracking-[-0.025em]'>
            (주)야놀자 |대표이사 : 이수진 | 사업자 등록번호 : 220-87-42885 | 통신판매업신고 : 강남-14211호 | 메일 : help@yanolja.com
            관광사업자 등록번호 : 제2016-31호 | 주소 : 서울특별시 강남구 테헤란로108길 42 | 호스팅서비스 제공자 : 주식회사 야놀자
            고객센터 : 1644-1346 (오전 9시 - 익일 새벽 3시)
        </p>
        <ul className='mb-[20px] flex gap-[5px] flex-wrap'>
            <li>
                <Link href=""  className='p-[3px] inline-block text-[11px] text-[#6d6d6d] border-[1px] border-solid border-[#e6e6e6] '>회사소개</Link>
            </li>
            <li>
                <Link href=""  className='p-[3px] inline-block text-[11px] text-[#6d6d6d] border-[1px] border-solid border-[#e6e6e6] '>광고제휴문의</Link>
            </li>
            <li>
                <Link href=""  className='p-[3px] inline-block text-[11px] text-[#6d6d6d] border-[1px] border-solid border-[#e6e6e6] '>인재채용</Link>
            </li>
            <li>
                <Link href=""  className='p-[3px] inline-block text-[11px] text-[#6d6d6d] border-[1px] border-solid border-[#e6e6e6] '>개인정보처리방침</Link>
            </li>
            <li>
                <Link href=""  className='p-[3px] inline-block text-[11px] text-[#6d6d6d] border-[1px] border-solid border-[#e6e6e6] '>청소년 보호 정책</Link>
            </li>
            <li>
                <Link href=""  className='p-[3px] inline-block text-[11px] text-[#6d6d6d] border-[1px] border-solid border-[#e6e6e6] '>서비스 이용약관</Link>
            </li>
            <li>
                <Link href=""  className='p-[3px] inline-block text-[11px] text-[#6d6d6d] border-[1px] border-solid border-[#e6e6e6] '>위치정보이용약관</Link>
            </li>
            <li>
                <Link href=""  className='p-[3px] inline-block text-[11px] text-[#6d6d6d] border-[1px] border-solid border-[#e6e6e6] '>사업자 정보확인</Link>
            </li>
            <li>
                <Link href=""  className='p-[3px] inline-block text-[11px] text-[#6d6d6d] border-[1px] border-solid border-[#e6e6e6] '>전자금융거래 이용약관</Link>
            </li>
        </ul>

        <p className=' text-[#6d6d6d] leading-[1.6]'>
            (주) 야놀자는 통신판매 중개자로서 통신판매의 당사자가 아니며 상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.<br /> <br />
            (주)야놀자가 소유/운영/관리하는 웹사이트 및 앱 내의 상품/판매자/이벤트 정보, 디자인 및 화면의 구성, UI를 포함하여 일체의 콘텐츠에 대한 무단 복제, 배포, 방송 또는 전송, 스크래핑 등의 행위는 저작권법 및 콘텐츠산업 진흥법 등 관련 법령에 의하여 엄격히 금지 됩니다.
        </p>
    </footer>
  )
}

export default Footer