import { Title } from "@/components/ui/ui";
import Image from "next/image";
import CatalogueHomeTop from "./CatalogueHomeTop/CatalogueHomeTop";
import CatalogueHomeBottom from "./CatalogueHomeBottom/CatalogueHomeBottom";
import CatalogueHomeLink from "./CatalogueHomeLink/CatalogueHomeLink";

import {
  photo1,
  photo2,
  photo3,
  photo4,
  rope,
} from "@/images/Mainpage/Catalogue/catalogue";

export default function CatalogueHome() {
  const products = [
    {
      name: "Сумочка из джута",
      price: 8900,
      img: photo1,
    },
    {
      name: "Сумочка из рафии",
      price: 9300,
      img: photo2,
    },
    {
      name: "Сумочка из рафии",
      price: 7200,
      img: photo4,
    },
    {
      name: "Сумочка из джута",
      price: 8500,
      img: photo3,
    },
  ];
  return (
    <section className="relative w-full flex flex-col items-center">
      <div className="flex flex-col items-center w-[87%] xl:w-[69%]">
        <Title className="text-[32px] mb-10 mx-auto lg:text-[70px] lg:mb-[65px]">
          Каталог
        </Title>
        <CatalogueHomeTop products={products.slice(0, 2)} />
        <CatalogueHomeLink />
        <CatalogueHomeBottom products={products.slice(2, 4)} />
      </div>
      <Image
        src={rope}
        alt="На заднем фоне веревка"
        className="hidden absolute top-[-20%] left-0 lg:block"
      />
    </section>
  );
}
