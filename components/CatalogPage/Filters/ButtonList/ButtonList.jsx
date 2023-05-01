import FilterButton from "../../FilterButton/FilterButton";

const ButtonList = ({ active, setActive }) => {
  return (
    <div className="flex items-center justify-center gap-5">
      <FilterButton
        type="all"
        active={active}
        onClick={() => {
          setActive("all");
        }}
      >
        Все изделия
      </FilterButton>
      <FilterButton
        type="bags"
        active={active}
        onClick={() => {
          setActive("bags");
        }}
      >
        Сумки и аксессуары
      </FilterButton>
      <FilterButton
        type="decor"
        active={active}
        onClick={() => {
          setActive("decor");
        }}
      >
        Функциональный декор
      </FilterButton>
    </div>
  );
};

export default ButtonList;
