
//새로 들어올 객체의 타입도 정의 해줘야함
interface stayInfo {
    [key: string]: string;
    price: string;
    rating: string;
  }

//stay 파라미터는 객체고 객체안의 데이터는 모두 문자열이다.
export const addPrice = (stay:  stayInfo) => {
    const price = Math.floor(Math.random() * (200000 - 50000 + 1)) + 50000;

    const result =  Math.floor(price/100)*100;

    const newArr = {...stay};
    newArr.price = String(result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

    return newArr;
}


export const addRating = (stay: stayInfo) => {
    //toFixed = 소수점n번째 까지 나타내줌
    const rating = (Math.random() * 4 + 1).toFixed(1);

    const newArr = {...stay};
    newArr.rating = String(rating);

    return newArr;
}


