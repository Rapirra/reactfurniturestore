import React, { useId, useRef } from 'react'
import { useState, useEffect } from 'react'
import TrendingCategoriesCards from './TrendingCategoriesCards'
import "react-multi-carousel/lib/styles.css"


import "./TrendingCategories.css"
export default function TrendingCategoriesCarousel() {

    const [data, setData] = useState()
    const [active, setActive] = useState('dressingtable')
    const [l, setL] = useState()
    const slider = useRef()
    
    useEffect(() =>{
        const getItems = () => {
            fetch("data.json")
             .then(response => response.json())
             .then(json => {setData(json.trendingcarousel); setL(json.trendingcarousel.length)})
            }  
        getItems()
    },[])

    const handleId = value => {
        console.log(value)
       setActive(value)
       console.log(active)
       
    }

    const handleLeftClick = () => {
        let d = data.shift()
        setData(data.concat(d))       
    }

    const handleRightClick = () => {        
        setData(data.splice(-1).concat(data)   )   
    }
    
  return (
    <div className='flex row w-[90%] mx-auto' style={{marginTop: "80px"}}>
        <div className='flex justify-between w-full mb-14'>
        <button className='' onClick={handleLeftClick}><img src={process.env.PUBLIC_URL + '/image/left.png'} alt="" /></button>
       <div className='flex justify-between w-full align-middle h-fit mx-[46px] ' style={{border: "0.5px solid #E2E0DB"}}>
       {data && data.map((item) => (
            <div className="card-top cursor-pointer trendingcarousel justify-center h-full px-[26px] py-[20px]" style={active===item.category ? {background: "#FBF9F3", border: "0.5px solid #FBF9F3 "} : null }  key={item.id} id={item.id} ref={slider} onClick={() => handleId(item.category)} >
              <img className='h-[73px]'
                src={item.image}
                alt={item.title}
              />
              <p>{item.title}</p>
            </div>
        ))}
       </div>
       <button onClick={handleRightClick}><img src={process.env.PUBLIC_URL + '/image/right.png'} alt="" /></button>
      </div>

       <div className='container'>
          <TrendingCategoriesCards active={active} />  
        </div>          
    </div>
  )
}
