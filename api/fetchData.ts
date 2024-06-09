const baseUrl:string = "https://apis.data.go.kr/B551011/KorService1/"
const apiKey:string = "IX0c2Gu6RtHnNRi9a%2FuQ2rn0XyAMW9qgf4LVog5flz9mgTGcmhTpxtjCajWzwhpdKk0jJpAOA4%2B28F280wQHfA%3D%3D";

interface FetchUrl {
    category: string;
    params: URLSearchParams;
  }

interface ApiResponse {
    // API 응답의 타입을 정의
    // 예: items, status, etc.를 포함할 수 있음
    [key: string]: any;
  }

//areacode?: number => ?는 선택적인 파라미터. 즉 없어도 됨
export const fetchData = async (fetchUrl: FetchUrl, areacode?: number) => {
    try  {

        //url생성자(URL 타입)
        const url: URL = new URL(baseUrl);

        //url 추가
        url.pathname += fetchUrl.category

        //params 객체를 받아서 url에 추가한다.
        url.search = fetchUrl.params.toString();

        //api키 추가
        url.searchParams.append("serviceKey", decodeURIComponent(apiKey));

        const response = await fetch(url.toString());
        
        //에러처리
        if(!response.ok) throw new Error("Fetch Error");

        return await response.json() as Promise<ApiResponse>;
 
    }catch(e) { 

         //에러발생시 메세지 던짐
        console.error("Error fetching data:", e);
        throw e;
    }
}


