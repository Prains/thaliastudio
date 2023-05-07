import FilterPart from "./FilterPart/FilterPart";

const MobileFilter = () => {
  const listItems = [
    "Все изделия",
    "Сумки и аксессуары",
    "Функциональный декор",
  ];
  const sortingItems = [
    "По возрастанцию цены",
    "По убыванию цены",
    "Сперва новые",
    "Сперва старые",
  ];

  return (
    <article className="w-full flex items-center justify-center flex-col mb-7">
      <FilterPart title="Раздел:" list={listItems} />
      <FilterPart title="Сортировка:" list={sortingItems} />
    </article>
  );
};

export default MobileFilter;
