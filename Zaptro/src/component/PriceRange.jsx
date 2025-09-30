import React from 'react'

function PriceRange() {
  return (
    <div>
        <h1 className="text-3xl mt-4 font-bold">Price Range</h1>
        <p className="text-2xl mt-4 ">Price Range:${0}-${5000}</p>
        <input type="range" className="w-full mt-4" min="0" max="5000"/>
        <button className="bg-red-500 w-[150px] p-2 rounded-md text-white text-2xl mt-8" >Reset Filter</button>
    </div>
  )
}

export default PriceRange