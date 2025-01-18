// src\app\products\page.tsx
import FilterHeader from '@/components/FilterHeader'
import FilterSidebar from '@/components/FilterSidebar'
import ProductsCards from '@/components/ProductsCards'
import RelatedCategories from '@/components/RelatedCategories'
import React from 'react'

function ProductPage() {
  return (
    <div className='px-[48px] pt-[76px] mt-[99px]'>
      <FilterHeader/>
      <div className='flex gap-[48px]'>
        <FilterSidebar/>
        <div className='flex flex-col gap-[100px]'>
          <ProductsCards/>
          <RelatedCategories/>
        </div>
      </div>
    </div>
  )
}

export default ProductPage