import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import Brand from './Brand'
import PriceRange from './PriceRange'

function FilterSection({}) {
  const { data, fetchAllProduct } = useContext(DataContext)

  useEffect(() => {
    fetchAllProduct()
  }, [])


  return (
    <div className="bg-grey-100 mt-10 p-4 rounded-md h-max">
      <input type="text" placeholder="search..." className="bg-white p-2  rounded-md border-grey-400 border-2" />
      <h1 className="text-3xl mt-6 text-black-500 font-bold">Category</h1>
      <div >
        {
          
          data ? ["All",...new Set(data.map(item => item.category))]
          .map((category, index) => {
            return (
              <div className="gap-2 flex mt-3">
             
                <input type="checkbox" id={index} name={category} value={category}></input>
                <p className="text-[20px]">{category.toUpperCase()}</p>
              </div>
            )

          }):""
        }
        

      </div>
      
        <Brand/>
        <PriceRange/>
    </div>
  )
}

export default FilterSection