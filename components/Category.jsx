import React from 'react'
import Link from 'next/link'

const Category = () => {

    const catgoryList = [
        "호텔/리조트",
        "펜션/풀빌라",
        "가족형숙소",
        "모텔",
        "항공",
        "해외숙소",
        "교통",
        "레저티켓",
    ];

    return (
        <section className='mb-[30px]'>
            <ul className='px-32 w-full flex justify-btween '>
                {
                    catgoryList.map((item, idx) => {
                        return(
                            <li key ={item} className='flex-1'>
                                <Link href="" className='flex flex-col items-center'> 
                                    <div className='w-[48px]'>
                                        <img src={`/images/category/category${idx+1}.png`} alt={item} className='w-full'/>
                                    </div>
                                    <p className='text-center text-[12px]'>
                                        {item}
                                    </p>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Category