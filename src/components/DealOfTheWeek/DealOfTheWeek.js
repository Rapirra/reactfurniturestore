import React, {  useEffect,  useRef, useState } from 'react'

export default function DealOfTheWeek() {
  const [data, setData] = useState([])
  const [newArray, setNewArray] = useState([])
  const [active, setActive] = useState()
  const elRef = useRef()

  useEffect(() =>{
    const getItems = () => {
        fetch("data.json")
         .then(response => response.json())
         .then(json => {setData(json.dealoftheweek); setActive(json.dealoftheweek[0])})
        }  
    getItems();

    

},[])

  useEffect(() => {
    setNewArray(data.filter((el) => active !== el))
  }, [data, active])

  const handleChange = (value) => {
    setActive(value)
  }
  
  return (
    <div className='flex justify-end '>
      <div className='bg-[#F6F6F6] flex rounded-tl-full rounded-bl-full w-[80%] pl-7 py-9'>

        { active &&
          
          <div className='bg-white rounded-full w-fit py-[150px] px-[85px] mr-[104px]' style={{boxShadow: "0px 0px 34px 4px rgba(86, 86, 86, 0.1)"}} >
            <img src={active.image} alt="" />
          </div> 
          }

        {data&& <div className='flex flex-col justify-between text-start py-[55px]' >
        <span className='flex items-center uppercase bg-[#8096BC] text-white w-fit text-center px-[34px] py-[8px] '>Deal of the week</span>
        <h3 className='font-federo lowercase text-4xl text-[#3A3A3A] '>from <span className='text-[#78A2CA]'>$99.99</span></h3>
        <p className='text-[#727272] font-openSans text-lg leading-8 w-[45%] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sed autem quod, illo nemo temporibus atque ad nihil placeat totam.</p>
        <button className='bg-[#434343]  w-fit py-2 px-5 text-white uppercase font-openSans text-base'>Shop now</button>
        <div className='flex flex-row justify-between w-[50%]'>
        {newArray && newArray.map((el) => 
          <div key={el.id} id={el.id} className='bg-white mr-7 w-[160px] h-[160px] flex justify-center p-2 cursor-pointer' ref={elRef} onClick={() => handleChange(el)}>
            <img  src={el.image} alt={el.title}/>
          </div> )}

        </div>
      </div>}

      </div>
    </div>
  )
}
