import React, { useEffect, useState, useRef } from 'react'


export default function Slider() {
  const [active, setActive] = useState()
  const [data, setData] = useState()
  const slider = useRef(0)
  useEffect(() =>{
    const getItems = () => {
        fetch("data.json")
         .then(response => response.json())
         .then(json => {setData(json.slider, setActive(json.slider[0]))})
        }  
    getItems()

},[])


  const handleLeftClick = (value) => {
    if(value > 0){
      setActive(data[value - 1])
    }  else if (value <= 0){
      setActive(data[data.length - 1])
    }
  }

  const handleRightClick = (value) => {
    if(value >= data.length - 1){
      setActive(data[0])
    } else{
      setActive(data[value + 1])
    }
  }

  return (
    <div>
      <div className='flex flex-row px-[92px] my-[60px] py-14' >
          <button onClick={() => handleLeftClick(parseInt(slider.current.id))}> <img src={process.env.PUBLIC_URL + '/image/leftBig.png'} alt="" /></button>
          {
            data && data.map((el, i) => (
              active === el ? 
              <div className='flex flex-row container my-0 mx-auto'key={i} id={i} ref={slider}>
                <div className='w-[65%]'>
                  <img className='w-[100%]' src={el.image} alt="" />
                </div>
                <div className='ml-[100px] w-[35%] flex justify-center flex-col '>
                  <div className=' '>
                  <h1 className='text-[#3A3A3A] font-federo text-[50px] leading-normal text-start'>{el.title}</h1>
                  <button className='bg-[#434343] mt-[25px] w-fit py-2 px-5 text-white uppercase font-openSans text-base'>Shop now</button>
                  </div>
                </div>
            </div>
              :
              null 
            ))
            
                  
          }

          <button onClick={() => handleRightClick(parseInt(slider.current.id))}> <img src={process.env.PUBLIC_URL + '/image/rightBig.png'} alt="" /></button>
        </div>  
        
    </div>
  )
}
