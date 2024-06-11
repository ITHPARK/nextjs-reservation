import React from 'react'
import Header from "../../components/Header";

//타입스크립트 사용을 위한 처리 
const layout = ({children} : {
  children:React.ReactNode
}) => {
  return (
    <div className="w-full h-full">
      <Header></Header>  
      <div className='w-[768px] mx-auto'>
        {children}
      </div>
      
    </div>
  )
}

export default layout