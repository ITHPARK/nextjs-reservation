import Image from "next/image";
import Category from "@/components/Category";
import EeventBanner from "@/components/EventBanner";
import RecentlyView from "@/components/RecentlyView";


const Home = async () => {


  return (
    <div className="w-full pt-[140px]" >
        <Category/>
        <EeventBanner/>
        <RecentlyView/>
    </div>
  );
}


export default Home
