import { Paragraph, ProductCard, Title } from "@/components/ui/ui";
import { arrowdown, searchIcon } from "@/images/Icons/Icons";
import Image from "next/image";
import { jute } from "@/images/Mainpage/CareOfThings/careOfThings";

const Catalog = () => {
  const card = {
    image: jute,
    title: "123",
    price: "123",
  };

  return (
    <section className="flex items-center justify-center flex-col w-[88%] md:w-[69%] my-0 mx-auto mb-20 md:mb-[150px]">
      <Title defaultSize className="mb-10 md:mb-16">
        Каталог
      </Title>
      <div className="w-full flex items-center justify-between mb-8">
        <Paragraph
          defaultSize
          className="flex items-center justify-center gap-1"
        >
          Фильтры
          <Image src={arrowdown} alt="черная стрелочка вниз" />
        </Paragraph>
        <Image src={searchIcon} alt="черная лупа" />
      </div>
      <div className="flex items-start w-full flex-wrap gap-y-7 md:gap-y-[50px] gap-x-5">
        <ProductCard type="catalog" card={card} />
        <ProductCard type="catalog" card={card} />
        <ProductCard type="catalog" card={card} />
        <ProductCard type="catalog" card={card} />
        <ProductCard type="catalog" card={card} />
      </div>
    </section>
  );
};

export default Catalog;
