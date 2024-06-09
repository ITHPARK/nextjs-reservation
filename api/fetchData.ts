const baseUrl:string = "https://apis.data.go.kr/B551011/KorService1/"
const apiKey:string = "IX0c2Gu6RtHnNRi9a%2FuQ2rn0XyAMW9qgf4LVog5flz9mgTGcmhTpxtjCajWzwhpdKk0jJpAOA4%2B28F280wQHfA%3D%3D";

//areacode?: number => ?는 선택적인 파라미터. 즉 없어도 됨
const fetchData = async (fetchUrl: any, areacode?: number) => {
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

        console.log(url)
        
        //에러처리
        if(!response.ok) throw new Error("Fetch Error");

        return response.json();

    }catch(e) { 

         //에러발생시 메세지 던짐
        console.error("Error fetching data:", e);
        throw e;
    }
}



export default fetchData