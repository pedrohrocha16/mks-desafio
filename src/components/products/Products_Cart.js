import Image from "next/image";
import React from "react";
import { MdRemove, MdAdd } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { montMed, montPrice } from "@/styles/fontes/Fontes";
import { useDispatch } from "react-redux";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductCart,
} from "@/redux/cart/actions";

function Products_Cart({ product }) {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeProductCart(product.id));
  };

  const handleIncreaseClick = () => {
    dispatch(increaseProductQuantity(product.id));
  };

  const handleDecreaseClick = () => {
    dispatch(decreaseProductQuantity(product.id));
  };

  return (
    <div
      className="gap-[6px] flex items-center justify-between p-1 h-[125px] bg-white rounded-[8px] mb-4 max-w-[360px]"
      key={product.id}
    >
      <Image src={product.photo} width={75} height={80} alt={"product"} />
      <div className={`w-[80px] ${montMed.className}`}>
        <p>{product.name}</p>
      </div>
      <div className="ml-[1px] mr-[1px]">
        <div className="flex h-[60px] text-[24px] text-center rounded-md items-center justify-center gap-3 border-zinc-300 border-[1px]">
          {product.quantity > 0 ? (
            <MdRemove className="text-[25px]" onClick={handleDecreaseClick} />
          ) : (
            <IoMdTrash className="text-[25px]" onClick={handleRemoveClick} />
          )}
          <p className="select-none">{product.quantity}</p>
          <MdAdd className="text-[25px]" onClick={handleIncreaseClick} />
        </div>
      </div>
      <div className="m-1">
        <p className={`${montPrice.className} text-[14px]`}>
          R${product.price}
        </p>
      </div>
    </div>
  );
}

export default Products_Cart;

// : <IoMdTrash className="text-[25px]" />
