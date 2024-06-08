import Image from "next/image";
import Category from "@/components/Category";
import EeventBanner from "@/components/EventBanner";


const Home = async () => {


  return (
    <div className="w-full pt-[140px]" >
        <Category/>
        <EeventBanner/>
    </div>
  );
}


export default Home
