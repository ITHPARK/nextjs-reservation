import {FetchUrl, ApiResponse, StayInfo} from '@/types/types';
import {addRating, addPrice} from "@/hooks/addInfo";

 
const baseUrl:string = "https://apis.data.go.kr/B551011/KorService1/"
const apiKey:string = "IX0c2Gu6RtHnNRi9a%2FuQ2rn0XyAMW9qgf4LVog5flz9mgTGcmhTpxtjCajWzwhpdKk0jJpAOA4%2B28F280wQHfA%3D%3D";


//areacode?: number => ?는 선택적인 파라미터. 즉 없어도 됨
export const fetchData = async (fetchUrl: FetchUrl, areacode?: number) => {
    try  {

        if(areacode) {
          fetchUrl.params.set('areaCode', areacode.toString());
        }
      

        //url생성자(URL 타입)
        const url: URL = new URL(baseUrl);

        //url 추가
        url.pathname += fetchUrl.category

        //params 객체를 받아서 url에 추가한다. toString = 객체가 가지고 있는 정보값을 문자열로 반환
        url.search = fetchUrl.params.toString();

        //api키 추가
        url.searchParams.append("serviceKey", decodeURIComponent(apiKey));

        const response = await fetch(url.toString());

        //에러처리
        if(!response.ok) throw new Error("Fetch Error");

        const result = await response.json() as ApiResponse;

        const stayData = result.response.body.items.item;

        //api 데이터에 price와 rating 추가
        stayData.map((list: StayInfo) => {
          if(list.firstimage.length < 1) {
            list.firstimage = "/images/no_image.png";
          }

          const myStay: StayInfo = { price: '', rating: '' }; // price와 rating을 채운 객체

          //평점과 가격을 추가 같이 추가 안하면 하나의 값은 사라짐
          const result = addPrice(list)
          const result2 = addRating(result);

           // result2 객체의 속성들을 list 객체에 복사
          for (const key in result2) {
            if (result2.hasOwnProperty(key)) {
              list[key] = result2[key];
            }
          }         
        }) 

        return stayData
 
    }catch(e) { 

         //에러발생시 메세지 던짐
        console.error("Error fetching data:", e);
        throw e;
    }
}


