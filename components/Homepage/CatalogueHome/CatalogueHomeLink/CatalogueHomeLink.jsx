import React from "react";
import Image from "next/image";
import { Anchor, Title } from "@/components/ui/ui";

import arrowSvg from "@/images/Mainpage/Natural/arrow.svg";

export default function CatalogueHomeLink() {
  return (
    <div className="flex flex-col items-center mb-[30px]">
      <Title className="text-[24px] leading-[120%] text-center mb-[10px] max-w-[250px] md:text-[26px] md:max-w-[280px] lg:text-[30px] lg:mb-[15px] lg:max-w-[320px]">
        Сумки, аксессуары и декор
      </Title>
      <Anchor href="/" link>
        <p className="leading-[160%]">Перейти в каталог</p>
        <Image src={arrowSvg} alt="стрелка для интерфейса" />
      </Anchor>
    </div>
  );
}
