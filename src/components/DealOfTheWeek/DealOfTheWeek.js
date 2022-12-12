import React from 'react'

export default function DealOfTheWeek() {
  return (
    <div className='flex justify-end '>
      <div className='bg-[#F6F6F6] flex rounded-tl-full rounded-bl-full w-[80%] pl-7 py-9'>

        <div className='bg-white rounded-full w-fit py-[150px] px-[85px] mr-[104px]' style={{boxShadow: "0px 0px 34px 4px rgba(86, 86, 86, 0.1)"}} >
            <img src={process.env.PUBLIC_URL + '/image/dealofweek/sofa.png'} alt="" />
        </div>

        <div className='flex flex-col justify-between text-start py-[55px]' >
          <span className='flex items-center uppercase bg-[#8096BC] text-white w-fit text-center px-[34px] py-[8px] '>Deal of the week</span>
          <h3 className='font-federo lowercase text-4xl text-[#3A3A3A] '>from <span className='text-[#78A2CA]'>$99.99</span></h3>
          <p className='text-[#727272] font-openSans text-lg leading-8 w-[45%] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sed autem quod, illo nemo temporibus atque ad nihil placeat totam.</p>
          <button className='bg-[#434343]  w-fit py-2 px-5 text-white uppercase font-openSans text-base'>Shop now</button>
          <div className='flex flex-row justify-between w-[50%]'>
            <div className='bg-white  mr-7'><img className='block py-4 px-4' src={process.env.PUBLIC_URL + '/image/dealofweek/img1.png'} /></div>
            <div className='bg-white  mr-7'><img className='block py-4 px-4' src={process.env.PUBLIC_URL + '/image/dealofweek/img2.png'} /></div>
            <div className='bg-white  mr-7'><img className='block py-4 px-4' src={process.env.PUBLIC_URL + '/image/dealofweek/img2.png'} /></div>
            <div className='bg-white  mr-7'><img className='block py-4 px-4' src={process.env.PUBLIC_URL + '/image/dealofweek/img2.png'} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
