import React from "react";
import Image from "next/image";

import { trashSvg, plusSvg, minusSvg } from "@/images/Icons/Icons.js";

export const CartCard = ({ card }) => {
  const [count, setCount] = React.useState(0);

  const incrementProduct = () => {
    setCount((p) => p + 1);
  };

  const decrementProduct = () => {
    if (count) {
      setCount((p) => p - 1);
    }
  };

  return (
    <>
      <p className="font-text text-[14px] text-center mb-[5px] leading-[160%] font-textDefault opacity-70  md:text-[15px] xl:text-[16px] xl:mx-[20px] xl:mb-[10px]">
        {card.price} р
      </p>
      <div className="flex items-center justify-center">
        <a className="cursor-pointer">
          <Image
            src={trashSvg}
            alt="Изображение добавить в избранное в виде сердечка"
          />
        </a>
        <div className="flex items-center justify-between w-[70px] ml-[10px] xl:ml-[28px] mr-[30px] xl:mr-[48px] xl:w-[110px]">
          <a onClick={decrementProduct} className="cursor-pointer">
            <Image
              src={minusSvg}
              alt="Изображение добавить в избранное в виде сердечка"
              className="w-[20px] h-[20px] xl:w-[30px] xl:h-[30px]"
            />
          </a>
          <p className="font-textDefault">{count}</p>
          <a onClick={incrementProduct} className="cursor-pointer ">
            <Image
              src={plusSvg}
              className="w-[20px] h-[20px] xl:w-[30px] xl:h-[30px]"
              alt="Изображение добавить в корзину"
            />
          </a>
        </div>
      </div>
    </>
  );
};
