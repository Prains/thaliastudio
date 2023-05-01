import { ProductCard, Title } from "@/components/ui/ui";
import { jute } from "@/images/Mainpage/CareOfThings/careOfThings";
import Filters from "./Filters/Filters";
import { useState } from "react";

const CatalogPage = () => {
  const card = [
    {
      image: jute,
      title: "123",
      price: "123",
    },
    {
      image: jute,
      title: "123",
      price: "123",
    },
    {
      image: jute,
      title: "123",
      price: "123",
    },
  ];
  const [active, setActive] = useState("all");

  return (
    <section className="flex items-center justify-center flex-col w-[88%] md:w-[69%] my-0 mx-auto mb-20 md:mb-[150px]">
      <Title defaultSize className="mb-10 md:mb-16">
        Каталог
      </Title>
      <Filters active={active} setActive={setActive} />
      <div className="flex items-start justify-center w-full flex-wrap gap-y-7 md:gap-y-[50px] gap-x-5">
        {card.map((card) => {
          return <ProductCard card={card} key={card.title} />;
        })}
      </div>
    </section>
  );
};

export default CatalogPage;
