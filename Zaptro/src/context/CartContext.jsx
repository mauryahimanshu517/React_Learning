import { createContext, useContext, useState } from 'react';

export const CartContext = createContext("");

export const CartProvider = ({ children }) => {
    const [productItems, getProductItems] = useState([])

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

    //     const increment = (price, id, quantity) => {

    //         getProductItems(productItems.map((item) =>
    //             item.id === id ? { ...item, quantity: quantity + 1 } : item
    //         ))
    //     };

    //    const decrement = (price,id, quantity) => {
    //   if (quantity=== 1) {
    //     // When quantity will become 0, remove item
    //     getProductItems(productItems.filter(item => item.id !== id));
    //   } else {
    //     // Just reduce quantity
    //     getProductItems(
    //       productItems.map((item) =>
    //         item.id === id
    //           ? { ...item, quantity: quantity - 1 }
    //           : item
    //       )
    //     );
    //   }
    // };



    const addToCart = (product) => {

        const findItem = productItems.some((item) => item.id === product.id);

        if (findItem) {
            const updateCart = productItems.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
            getProductItems(updateCart)
        }
        else {
            getProductItems([...productItems, { ...product, quantity: 1 }])
        }
    }

    return (
        <>
            <CartContext.Provider value={{ productItems, getProductItems, addToCart, deleteProduct,IncDec  }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export const useCart = () => useContext(CartContext)