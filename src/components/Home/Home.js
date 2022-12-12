import React from 'react'
import DealOfTheWeek from '../DealOfTheWeek/DealOfTheWeek'
import Footer from '../Footer/Footer'
import TrendingCategories from '../TrendingCategories/TrendingCategories'
import BestSeller from '../BestSeller/BestSeller'
import Slider from '../Slider/Slider'
import NavPanel from '../NavPanel/NavPanel'


export default function Home() {
  return (
    <div >
      <div className=" relative z-50">
      <Slider /> 
      <BestSeller />
      </div>
      <div className='bg-[#F6F6F6] absolute w-[60%] h-[500px] right-0 top-[45%] '></div>
      
      
      <DealOfTheWeek />
      <TrendingCategories /> 
      <Footer />
    </div>
  )
}
