import { arrowdown, searchIcon } from "@/images/Icons/Icons";
import Image from "next/image";
import { Paragraph } from "@/components/ui/ui";
import FilterButton from "../FilterButton/FilterButton";

const Filters = () => {
  return (
    <>
      <article className="w-full flex items-center justify-between mb-8 xl:hidden">
        <Paragraph
          defaultSize
          className="flex items-center justify-center gap-1"
        >
          Фильтры
          <Image src={arrowdown} alt="черная стрелочка вниз" />
        </Paragraph>
        <Image src={searchIcon} alt="черная лупа" />
      </article>
      <article className="w-full hidden xl:flex mb-[75px] items-center justify-between">
        <div className="flex items-center justify-center gap-5">
          <FilterButton>Все изделия</FilterButton>
          <FilterButton>Сумки и аксессуары</FilterButton>
          <FilterButton>Функциональный декор</FilterButton>
        </div>
        <div className="flex items-center justify-center gap-5">
          <div className="flex items-center justify-between w-[160px] border-b pb-1 border-b-[#000] border-solid">
            <input type="text" placeholder="Поиск" className="w-full" />
            <Image src={searchIcon} alt="черная лупа" />
          </div>
          <button className="flex items-center justify-between text-sm gap-1">
            По возрастанию цены
            <Image src={arrowdown} alt="черная стрелочка смотрящая вниз" />
          </button>
        </div>
      </article>
    </>
  );
};

export default Filters;
