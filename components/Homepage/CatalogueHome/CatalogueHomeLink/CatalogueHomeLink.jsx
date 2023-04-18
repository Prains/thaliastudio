import React from "react";
import Image from "next/image";
import { Anchor, Title } from "@/components/ui/ui";

import arrowSvg from "@/assets/icons/arrow.svg";

export default function CatalogueHomeLink() {
  return (
    <div className="flex flex-col items-center mb-[30px]">
      <Title className="text-[24px] leading-[120%] text-center mb-[10px] md:text-[26px] lg:text-[30px] lg:mb-[15px]">
        Сумки, аксессуары и декор
      </Title>
      <Anchor href="/" link>
        <p>Перейти в каталог</p>
        <Image src={arrowSvg} alt="arrow" />
      </Anchor>
    </div>
  );
}
