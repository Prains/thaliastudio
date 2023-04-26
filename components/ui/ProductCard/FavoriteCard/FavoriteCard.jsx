import Image from "next/image";
import { basket, trashSvg } from "@/images/Icons/Icons.js";

export const FavoriteBottom = ({ card }) => {
  return (
    <div className="flex items-center gap-5">
      <Image
        src={trashSvg}
        alt="Изображение убрать из избранного в виде мусорки"
      />

      <p className="font-text text-[14px] leading-[160%] font-textDefault opacity-70  md:text-[15px] xl:text-[16px] xl:mx-[20px]">
        {card.price} ₽
      </p>
      <Image src={basket} alt="Изображение добавить в корзину" />
    </div>
  );
};
