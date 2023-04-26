import React from "react";
import Image from "next/image";

import { heart, basket } from "@/images/Icons/Icons.js";

export const CatalogCard = ({ card }) => {
  return (
    <div className="flex items-center justify-between xl:justify-center">
      <a className="cursor-pointer">
        <Image
          src={heart}
          alt="Изображение добавить в избранное в виде сердечка"
        />
      </a>

      <p className="font-text text-[14px] leading-[160%] font-textDefault opacity-70  md:text-[15px] xl:text-[16px] xl:mx-[20px]">
        {card.price} р
      </p>
      <a className="cursor-pointer">
        <Image src={basket} alt="Изображение добавить в корзину" />
      </a>
    </div>
  );
};
