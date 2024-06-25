import Image from "next/image";
import Category from "@/components/Category";
import EeventBanner from "@/components/EventBanner";
import RecentlyView from "@/components/RecentlyView";
import HotDeal from "@/components/Rows";
import { fetchData } from "@/api/fetchData";
import request from "@/api/request"
import TopAll from "@/components/TopAll";

const Ranking = () => {

  return (
    <div className="w-full pt-[50px]" >
      <TopAll />
    </div>
  );
}


export default Ranking
