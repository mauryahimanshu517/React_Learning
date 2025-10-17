import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext("");

export const CartProvider = ({ children }) => {
    const [productItems, getProductItems] = useState([])
     const [catogoriesData,setcatogoriesData] = useState("null")
     console.log(catogoriesData)

    const deleteProduct = (id) => {
        console.log(id)
        console.log(productItems)
        getProductItems(productItems.filter(item => item.id !== id))

    };


    const IncDec = (id, quantity, action) => {
        getProductItems(productItems.map((item) => {
            if (item.id === id) {
                if (action === "increment") {
                    return { ...item, quantity: quantity + 1 }
                }
                else if (action === "decrement") {
                    return { ...item, quantity: quantity - 1 }
                }
            }
            return item
        }).filter((item) => item.quantity > 0)
    )
    }



    const addToCart = (product) => {

        const findItem = productItems.some((item) => item.id === product.id);

        if (findItem) {
            const updateCart = productItems.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
            getProductItems(updateCart)
        }
        else {
            getProductItems([...productItems, { ...product, quantity: 1 }])
            toast.success("product is added to cart")
        }
    }

    return (
        <>
            <CartContext.Provider value={{ productItems, getProductItems, addToCart, deleteProduct,IncDec,setcatogoriesData,catogoriesData }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export const useCart = () => useContext(CartContext)