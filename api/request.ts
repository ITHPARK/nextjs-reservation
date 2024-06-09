// request 객체의 타입 정의

//params의 타입
interface RequestParams {
    numOfRows: string;
    pageNo: string;
    MobileOS: string;
    MobileApp: string;
    _type: string;
    listYN: string;
    arrange: string;
    areaCode?: string;
    sigunguCode?: string;
}

//category의 타입
interface RequestCategory {
    category: string;
    params: URLSearchParams;
}

interface Request {
    stay: RequestCategory;
}


const request: Request =  {

    stay: {
        category: "searchStay1",
        params: new URLSearchParams({
            numOfRows: "10",
            pageNo: "1",
            MobileOS: "ETC",
            MobileApp: "APPtest",
            _type: "json",
            listYN: "Y",
            arrange: "A",
            areaCode: "",
            sigunguCode: "",
        })
    }
    
}

export default request;