import { Anchor, Paragraph, Popup } from "@/components/ui/ui";
import Image from "next/image";
import { arrow } from "@/images/Mainpage/Natural/natural";
import CareOfThingsPopupList from "./CareOfThingsPopupList/CareOfThingsPopupList";

export default function CareOfThingsPopup({ cares, title, onClick }) {
  return (
    <Popup>
      <div className="bg-white min-w-[280px] max-w-[80%] h-[90vh] max-h-[580px] rounded-[30px] py-[35px] px-[25px] flex flex-col items-center  md:max-w-[600px] lg:p-[50px]">
        <Paragraph className="font-title text-textDefault text-[20px] leading-[110%] text-center mb-[30px] lg:font-semibold lg:mb-[50px]">
          {title}
        </Paragraph>
        <CareOfThingsPopupList cares={cares} />
        <Anchor link={false} onClick={onClick}>
          <Image src={arrow} className="mr-0" alt="визуальная стрелка" />
          <Paragraph className="text-[13px] leading-[160%]">
            Скрыть инфо
          </Paragraph>
        </Anchor>
      </div>
    </Popup>
  );
}
