import React, { useContext, useState } from 'react'
import { DataContext } from '../context/DataContext'

function Catgories() {

    const { data } = useContext(DataContext)  
    const [catogoriesData,setcatogoriesData] = useState("null")
    console.log(catogoriesData)

    return (
        <>
            <div className="bg-gradient-to-r h-17 flex justify-around from-red-500 to-purple-500">

                {
                    data
                        ? [...new Set(data.map(item => item.category))]
                        .sort(() => Math.random() -0.5)
                        .slice(0,8) // ✅ remove duplicates
                            .map((category, index) => (
                                
                                <button
                                    key={index}
                                    className="w-40 rounded text-lg bg-white m-2"
                                    value={category}
                                    onClick={(e)=>setcatogoriesData(e.target.value)}
                                    
                                >
                                    {category.charAt(0).toUpperCase()+category.slice(1,category.length).toLowerCase()}
                                </button>
                            ))
                        : ""
                }
            </div>

        </>
    )
}

export default Catgories