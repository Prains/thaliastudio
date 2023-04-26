import CareOfThigsPopupItem from "./CareOfThigsPopupItem/CareOfThigsPopupItem";

export default function CareOfThingsPopupList({ cares }) {
  return (
    <ol className="flex-1  overflow-y-scroll mb-[10px]">
      {cares.map((care, i) => (
        <CareOfThigsPopupItem care={care} index={i} key={i} />
      ))}
    </ol>
  );
}
