import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

function Catgories() {
  const { data } = useContext(DataContext)
  const { setcatogoriesData } = useCart() // ✅ From CartContext
  const navigate = useNavigate()

  const handleCategoryClick = (e) => {
    const category = e.target.value
    setcatogoriesData(category)
    navigate(`/catogories/${category}`)
  }

  return (
    <div className="bg-gradient-to-r h-17 flex justify-around from-red-500 to-purple-500">
      {
        data
          ? [...new Set(data.map(item => item.category))]
              .sort(() => Math.random() - 0.5)
              .slice(0, 8)
              .map((category, index) => (
                <button
                  key={index}
                  className="w-40 rounded text-lg bg-white m-2"
                  value={category}
                  onClick={handleCategoryClick} // ✅ single handler
                >
                  {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
                </button>
              ))
          : ""
      }
    </div>
  )
}

export default Catgories
