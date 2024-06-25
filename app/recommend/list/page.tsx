import Image from "next/image";
import Category from "@/components/Category";
import EeventBanner from "@/components/EventBanner";
import RecentlyView from "@/components/RecentlyView";
import HotDeal from "@/components/Rows";
import { fetchData } from "@/api/fetchData";
import request from "@/api/request"
import HotDealAll from '@/components/HotDealAll'

const List = () => {

  return (
    <div className="w-full pt-[50px]" >
      <HotDealAll/>
    </div>
  );
}


export default List
