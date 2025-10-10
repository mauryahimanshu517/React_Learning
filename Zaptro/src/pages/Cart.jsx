import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { FaRegTrashAlt } from 'react-icons/fa';


function Cart() {
  const [count,setcount]=useState(0)
  const { productItems,deleteProduct,IncDec } = useCart();



  return (
    <div className="mt-10 max-w-6xl mx-auto mb-5">
      {productItems.length > 0 ? (
        <div>
          <h1 className="font-bold text-2xl">My Cart {productItems.length}</h1>
          <div>
            <div className="mt-10">
              {productItems.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-100 p-5 rounded-md flex item-center justify-between mt-4 w-full"
                  >
                    <div className="flex item-center gap-4">
                      <img
                        src={item.images}
                        className="w-20 h-20 rounded-md"
                        alt={item.title}
                      />
                      <div>
                        <h1 className="md:w-[300px] line-clamp-2 ">{item.title}</h1>
                        <p className="text-red-500 font-semibold text-lg">
                          {item.price*item.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="bg-red-500 h-10 text-white flex gap-4 p-2 mt-5 rounded-md font-bold text-xl">
                      <button onClick={() => IncDec(item.id,item.quantity,"decrement")} className="cursor-pointer">-</button>
                      <span>{item.quantity}</span>
                      <button
                        id={item.id}
                        onClick={() => IncDec(item.id,item.quantity,"increment")}
                        className="cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <span className="hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl">
                      <FaRegTrashAlt onClick={() => deleteProduct(item.id)} className="text-red-500 text-2xl cursor-pointer mt-5" /></span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>Cart is empty</div>
      )}
    </div>
  );
}

export default Cart;
