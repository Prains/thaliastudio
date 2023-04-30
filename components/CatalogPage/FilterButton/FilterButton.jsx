const FilterButton = ({ children, type, active, onClick }) => {
  return (
    <button
      className={`text-sm pb-1 cursor-pointer ${
        type === active
          ? "border-b-2 border-dashed border-b-[#000]"
          : "opacity-60"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FilterButton;
