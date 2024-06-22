//새로 들어올 객체의 타입도 정의 해줘야함
//숙소 정보를 받아서 가격과 평점까지 추가할 타입
export interface StayInfo {
  [key: string]: string; //
  price: string;
  rating: string;
}


//객체의 인스턴스가 모두 같은 타입일 때 이렇게 축약가능함
export type Location = Record<string, string>;


//처음 api를 호출할 때 price와 rating이 들어가기 이전
export interface FetchUrl {
    category: string;
    params: URLSearchParams;
  }


export interface ApiResponse {
    // API 응답의 타입을 정의
    // 예: items, status, etc.를 포함할 수 있음

    // 배열이던 객체던 문자열이던 숫자던 어느 타입이나 다 가질수 있다는것
    [key: string]: any;
}


//각 서버컴포넌트에서 내려줄 데이터 Props는 배열형태이기 때문에 선언
export interface rowProps {
  rowData: StayInfo[];
}


export interface RowsAnotherProps {
  topStay: StayInfo[][];
}

export interface EventClick {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}


export interface Store {
  stayData: StayInfo[];
  fetchStayData: (url: FetchUrl, areacode?: number) => Promise<void>;
  // loadStoredData: () => StayInfo[];
}

//void 타입은 함수 반환값이 없음을 표시
export interface DateRangePickerProps  {
  onChange: (dates: Date | null) => void;
}

// 달력에서 받는 Props들
export interface DatePickerCustomProps {
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
  pickerStartDate: Date| null;
  pickerEndDate: Date| null;
  refSize?: number;
  buttonStartDate?: string;
  buttonEndDate?: string;
}

export interface GuestsNumberProps {
  refSize?: number;
  adult?: number;
  child?: number;
  setAdult: React.Dispatch<React.SetStateAction<number>>;
  setChild: React.Dispatch<React.SetStateAction<number>>;
}

