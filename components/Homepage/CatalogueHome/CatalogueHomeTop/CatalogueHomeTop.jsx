import { Paragraph } from "@/components/ui/ui";
import Image from "next/image";

export default function CatalogueHomeTop({ products }) {
  return (
    <div className="flex flex-col items-center w-full md:flex-row-reverse md:mt-[40px] md:justify-between">
      <Paragraph
        defaultSize
        className="text-center mb-[30px] md:text-right  md:max-w-[280px] md:w-[50%]"
      >
        Изделия ручной работы дополняют повседневные образы и делают их
        уникальным и неповторимым.
      </Paragraph>
      <div className="relative w-full mb-[24%] md:mb-0 md:w-[50%]">
        <article className="flex flex-col items-center w-[40%] max-w-[240px] md:mt-[10%] md:max-w-[170px]">
          <Image
            src={products[0].img}
            alt={products[0].name}
            className="mb-[10px] w-[100%]"
          />
          <div>
            <p className="text-text text-[14px] leading-[160%] text-textDefault text-center">
              {products[0].name}
            </p>
            <p className="text-text text-[14px] leading-[160%] text-textDefault text-center opacity-[70%]">
              {products[0].price} р
            </p>
          </div>
        </article>
        <article className="absolute top-[20%] right-0 flex flex-col items-center w-[40%] max-w-[240px] md:top-[-10%] md:max-w-[170px]">
          <Image
            src={products[1].img}
            alt={products[1].name}
            className="mb-[10px] w-[100%]"
          />
          <div>
            <p className="text-text text-[14px] leading-[160%] text-textDefault text-center">
              {products[1].name}
            </p>
            <p className="text-text text-[14px] leading-[160%] text-textDefault text-center opacity-[70%]">
              {products[1].price} р
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
