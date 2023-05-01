import Select from "react-select";

const FilterDropdown = ({setFilterValue, filterValue, selectOptions}) => {
  return (
    <Select
      options={selectOptions}
      unstyled
      className="flex items-center justify-center gap-1"
      defaultValue={filterValue.value}
      placeholder={filterValue.label}
      isSearchable={false}
      onChange={setFilterValue}
      styles={{
        menuList: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
          gap: "10px",
          paddingLeft: "4px",
          paddingBottom: "10px",
          paddingTop: "10px",
          borderTop: "1px solid black",
        }),
        valueContainer: (baseStyles) => ({
          ...baseStyles,
          cursor: "pointer",
        }),
      }}
    />
  );
};

export default FilterDropdown;
