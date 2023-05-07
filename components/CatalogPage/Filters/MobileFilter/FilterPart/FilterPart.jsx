const FilterPart = ({ title, list }) => {
  return (
    <ul className="border-y border-y-solid border-y-[#000000] w-full border-collapse flex items-start justify-center flex-col gap-2 py-2">
      <li className="text-textDefault opacity-50">
        <h4>{title}</h4>
      </li>
      {list.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
};

export default FilterPart;
