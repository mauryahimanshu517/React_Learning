import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataContext'
import FilterSection from '../component/FilterSection'
import Loading from "../assets/Loading.webm"
import ProductCard from '../component/ProductCard'

function Product() {
  console.log("hello ")
  const { data, fetchAllProduct } = useContext(DataContext)
  const [search,setSearch]=useState("")
  const [category,setCategory]=useState("All")
  const [brand,setBrand]=useState("All")
  const [priceRange,setPriceRange]=useState([0,5000])

  useEffect(() => {
    fetchAllProduct()
  }, [])


  return (
    <>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {
          data?.length > 0 ? (
            <div className="flex gap-8">
              <FilterSection search={search} setSearch={setSearch} brand={brand} setBrand={setBrand} category={category} priceRange={priceRange}  />
             <div className="grid grid-cols-4">
               {
                data?.map((product, index) => {
                  return <ProductCard key={index} product={product}/>

                })
              }
             </div>
            </div>) : (<div className="flex items-center justify-center h-[400px]">
              <video muted autoPlay loop>
                <source src={Loading} type="video.webm"></source>
              </video>
            </div>)
        }
      </div>
    </>

  )
}

export default Product