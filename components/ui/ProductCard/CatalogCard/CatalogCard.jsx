import Image from "next/image";
import { heart, basket } from "@/images/Icons/Icons.js";

export const CatalogBottom = ({ card }) => {
  return (
    <div className="flex items-center justify-center gap-5">
      <Image
        src={heart}
        alt="Изображение добавить в избранное в виде сердечка"
      />

      <p className="font-text text-[14px] leading-[160%] font-textDefault opacity-70  md:text-[15px] xl:text-[16px] xl:mx-[20px]">
        {card.price} ₽
      </p>
      <Image src={basket} alt="Изображение добавить в корзину" />
    </div>
  );
};
