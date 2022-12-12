import React from 'react'
import TrendingCategoriesCarousel from './TrendingCategoriesCarousel'

export default function TrendingCategories() {
  return (
    <div className='pt-[138px] pb-[142px]' id="trendcategories">
      <h2 className='font-federo text-4xl text-[#3A3A3A]'>TRENDING CATEGORIES</h2>
      <TrendingCategoriesCarousel />
    </div>
  )
}
