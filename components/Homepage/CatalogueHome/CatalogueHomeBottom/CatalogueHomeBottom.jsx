import React from "react";
import { Paragraph } from "@/components/ui/ui";
import Image from "next/image";

export default function CatalogueHomeBottom({ products }) {
  return (
    <div className="flex flex-col items-center w-full md:flex-row-reverse md:justify-between lg:mt-[30px]">
      <div className="relative w-full mb-[18%] md:w-[50%]">
        <article className="flex flex-col items-center w-[40%] max-w-[240px] md:max-w-[170px]">
          <Image
            src={products[0].img}
            alt="img"
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
        <article className="absolute top-[20%] right-0 flex flex-col items-center w-[40%] max-w-[240px] md:top-[-20%] md:max-w-[170px]">
          <Image
            src={products[1].img}
            alt="img"
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
      <Paragraph
        defaultSize
        className="text-center mb-[30px] md:max-w-[280px] md:text-left md:pr-[100px] md:mb-auto md:pt-[10%] md:w-[50%] lg:pr-0"
      >
        Каждое изделие содержит в себе только лучшие натуральные материалы и
        частичку души.
      </Paragraph>
    </div>
  );
}
