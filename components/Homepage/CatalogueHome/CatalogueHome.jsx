import { Title } from "@/components/ui/ui";
import Image from "next/image";
import CatalogueHomeTop from "./CatalogueHomeTop/CatalogueHomeTop";
import CatalogueHomeBottom from "./CatalogueHomeBottom/CatalogueHomeBottom";
import CatalogueHomeLink from "./CatalogueHomeLink/CatalogueHomeLink";

import imgSvg1 from "@/assets/photos/img1.svg";
import imgSvg2 from "@/assets/photos/img2.svg";
import threadBg from "@/assets/bg/thread.svg";

export default function CatalogueHome() {
  const products = [
    {
      name: "Сумочка из джута",
      price: 8900,
      img: imgSvg1,
    },
    {
      name: "Сумочка из джута",
      price: 8900,
      img: imgSvg2,
    },
    {
      name: "Сумочка из джута",
      price: 8900,
      img: imgSvg1,
    },
    {
      name: "Сумочка из джута",
      price: 8900,
      img: imgSvg2,
    },
  ];
  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="flex flex-col items-center w-[87%] xl:w-[69%]">
        <Title defaultSize className="mb-[40px]">
          Каталог
        </Title>
        <CatalogueHomeTop products={products.slice(0, 2)} />
        <CatalogueHomeLink />
        <CatalogueHomeBottom products={products.slice(2, 4)} />
      </div>
      <Image
        src={threadBg}
        alt="thread"
        className="hidden absolute top-[-20%] left-0 lg:block"
      />
    </div>
  );
}
