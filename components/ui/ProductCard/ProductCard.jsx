import Image from "next/image";
import React from "react";

import {
  heart,
  basket,
  trashSvg,
  plusSvg,
  minusSvg,
} from "@/images/Icons/Icons.js";

const ProductCard = ({ type, card }) => {
  return (
    <article className="flex flex-col items-center w-[130px] md:w-[170px] xl:w-[204px]">
      <Image
        className="w-[130px] h-[179px] mb-[10px] object-cover md:w-[170px] md:h-[234px] xl:w-[204px] xl:h-[282px] xl:mb-[10px]"
        src={card.image}
        alt={`Изображение ${card.title}`}
      />
      <div>
        <p className="font-text text-[14px] truncate leading-[160%] mb-[5px] text-center w-[130px] md:w-[170px] xl:w-[204px] md:text-[15px] xl:text-[16px]">
          {card.title}
        </p>
        {type === "catalog" && <CatalogCard card={card} />}
        {type === "favorite" && <FavoriteCard card={card} />}
        {type === "cart" && <CartCard card={card} />}
      </div>
    </article>
  );
};

export default ProductCard;

const CatalogCard = ({ card }) => {
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

const FavoriteCard = ({ card }) => {
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

const CartCard = ({ card }) => {
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
        <a className="cursor-pointer ml-[10px] xl:ml-[28px] ">
          <Image
            src={minusSvg}
            alt="Изображение добавить в избранное в виде сердечка"
            className="w-[20px] h-[20px] xl:w-[30px] xl:h-[30px]"
          />
        </a>
        <p className="font-textDefault mr-[10px] ml-[10px] xl:ml-[20px] xl:mr-[20px]">
          1
        </p>
        <a className="cursor-pointer mr-[30px] xl:mr-[48px]">
          <Image
            src={plusSvg}
            className="w-[20px] h-[20px] xl:w-[30px] xl:h-[30px]"
            alt="Изображение добавить в корзину"
          />
        </a>
      </div>
    </>
  );
};
