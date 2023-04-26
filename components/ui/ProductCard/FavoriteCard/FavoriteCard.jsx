import React from "react";
import Image from "next/image";

import { basket, trashSvg } from "@/images/Icons/Icons.js";

export const FavoriteCard = ({ card }) => {
  return (
    <div className="flex items-center justify-between xl:justify-center">
      <a className="cursor-pointer">
        <Image
          src={trashSvg}
          alt="Изображение убрать из избранного в виде мусорки"
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
