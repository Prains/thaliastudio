import { arrowdown, searchIcon } from "@/images/Icons/Icons";
import Image from "next/image";
import { Paragraph } from "@/components/ui/ui";
import ButtonList from "./ButtonList/ButtonList";
import { useState } from "react";
import FilterDropdown from "./FilterDropdown/FilterDropdown";
import MobileFilter from "./MobileFilter/MobileFilter";

const Filters = ({ active, setActive }) => {
  const selectOptions = [
    {
      value: "priceHigher",
      label: "По возрастанию цены",
    },
    {
      value: "priceLower",
      label: "По убыванию цены",
    },
    {
      value: "new",
      label: "Сперва новые",
    },
    {
      value: "old",
      label: "Сперва старые",
    },
  ];

  const [filterValue, setFilterValue] = useState(selectOptions[0]);
  const [mobileFilter, setMobileFilter] = useState(false);

  return (
    <>
      <article
        className={`w-full flex items-center justify-between ${
          mobileFilter ? "mb-2" : "mb-8"
        } xl:hidden`}
      >
        <Paragraph
          defaultSize
          className="flex items-center justify-center gap-1"
          onClick={() => {
            setMobileFilter(!mobileFilter);
          }}
        >
          Фильтры
          <Image src={arrowdown} alt="черная стрелочка вниз" />
        </Paragraph>
        <FilterDropdown
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          selectOptions={selectOptions}
        />
      </article>
      {mobileFilter && <MobileFilter />}
      <article className="w-full hidden xl:flex mb-[75px] items-center justify-between">
        <ButtonList active={active} setActive={setActive} />
        <div className="flex items-center justify-center gap-5">
          <div className="flex items-center justify-between w-[160px] border-b pb-1 border-b-[#000] border-solid">
            <input type="text" placeholder="Поиск" className="w-full" />
            <Image src={searchIcon} alt="черная лупа" />
          </div>
          <FilterDropdown
            filterValue={filterValue}
            setFilterValue={setFilterValue}
            selectOptions={selectOptions}
          />
        </div>
      </article>
    </>
  );
};

export default Filters;
