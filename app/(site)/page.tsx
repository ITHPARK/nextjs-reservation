import Image from "next/image";
import Category from "@/components/Category";
import EeventBanner from "@/components/EventBanner";
import RecentlyView from "@/components/RecentlyView";
import HotDeal from "@/components/HotDeal";
import { fetchData } from "@/api/fetchData";
import request from "@/api/request"
import Footer from "@/components/Footer";
import Top from "@/components/Top";
import Exhibition from "@/components/Exhibition";
import { useQuery } from '@tanstack/react-query';


const Home = () => {

  //최최 진입시 데이터 생성



  return (
    <div className="w-full pt-[140px]" >
        <Category/>
        <EeventBanner/>
        <RecentlyView/>
        {/* @ts-expect-error Async Server Component */}
        <HotDeal/>
        <Top/>
        <Exhibition/>
        <Footer/>

      
    </div>
  );
}


export default Home
