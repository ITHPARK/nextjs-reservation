import create from 'zustand';
import { FetchUrl, Store } from  '@/types/types';
import {fetchData} from '@/api/fetchData';
import request from '@/api/request';
import {StayInfo, TopStayStore} from '@/types/types';
import { persist } from "zustand/middleware";

export const useStayData = create(
  //persist 미들웨어를 사용하여 스토리지에 저장하고 새로고침을해도 데이터가 유효하게 해줌
  persist<Store>(
    (set) => ({
      stayData: [],
      fetchStayData: async (fetchUrl: FetchUrl, areacode?: number) => {
        try {
          const data = await fetchData(fetchUrl, areacode);
          set({ stayData: data });
        } catch (error) {
          console.error('Error fetching stay data:', error);
        }
      },
    }),
    {
      name: "useStayData",
      getStorage: () => sessionStorage,  // localStorage 또는 sessionStorage를 선택하여 사용
    }  // persist options를 전달해야 함
  )
);



export const useTopStay= create<TopStayStore>(
  (set) => ({
    topStay: [],
    setStay: (arr: StayInfo[][]) => {
      set({ topStay: arr });
    }
  })
);
