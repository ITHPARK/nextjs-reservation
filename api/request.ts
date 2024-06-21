// request 객체의 타입 정의


//category의 타입
export interface RequestCategory {
    category: string;
    params: URLSearchParams;
}

export interface Request {
    stay: RequestCategory;
}

const request: Request =  {

    stay: {
        category: "searchStay1",
        params: new URLSearchParams({
            numOfRows: "50",
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