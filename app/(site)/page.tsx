import Category from "@/components/Category";
import EeventBanner from "@/components/EventBanner";
import RecentlyView from "@/components/RecentlyView";
import HotDeal from "@/components/HotDeal";
import Footer from "@/components/Footer";
import Top from "@/components/Top";
import Exhibition from "@/components/Exhibition";




const Home = () => {

  return (
    <div className="w-full pt-[140px]" >
        <Category/>
        <EeventBanner/>
        <RecentlyView/>
        <HotDeal/>
        <Top/>
        <Exhibition/>
        <Footer/>
    </div>
  );
}


export default Home
