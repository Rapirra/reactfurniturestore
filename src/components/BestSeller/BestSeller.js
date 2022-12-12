import React, { useEffect, useState } from 'react'
import '../TrendingCategories/TrendingCategories.css'
export default function BestSeller() {

  const [data, setData] = useState()

  useEffect(() =>{
    const getItems = () => {
        fetch("data.json")
         .then(response => response.json())
         .then(json => {setData(json.bestseller); })
        }  
    getItems()

},[])
  return (
    <div className='container ' id='bestseller'>
      <h2 className='font-federo text-[#3A3A3A] text-4xl '>Best Seller Items</h2>
      <div className='flex flex-wrap justify-between mt-[40px]'>
      {data && data.map((card,index)=>(
        <div className='card-style flex justify-center flex-col mb-4 mx-0  items-center' key={card.id} style={index >=4 ? {border: "0.5px solid #E2E0DB", width:"calc(100% / 3.1)"} : {border: "0.5px solid #E2E0DB", width: "calc(100% /4.1)"} }>
          <img src={card.image} alt="" className='mb-[29px] h-[250px] w-[200px]'/>
          <h4>{card.productname}</h4>
          <h6>{card.price}</h6>
        </div>
      ))}
      </div>
    </div>
  )
}
