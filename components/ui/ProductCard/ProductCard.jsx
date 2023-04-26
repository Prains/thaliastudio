import Image from "next/image";
import { CatalogBottom } from "@/components/ui/ProductCard/CatalogCard/CatalogCard";
import { FavoriteBottom } from "@/components/ui/ProductCard/FavoriteCard/FavoriteCard";
import { CartBottom } from "@/components/ui/ProductCard/CartCard/CartCard";

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
        {type === "catalog" && <CatalogBottom card={card} />}
        {type === "favorite" && <FavoriteBottom card={card} />}
        {type === "cart" && <CartBottom card={card} />}
      </div>
    </article>
  );
};

export default ProductCard;
