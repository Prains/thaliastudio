import { useState } from "react";
import Image from "next/image";
import { Anchor, Paragraph } from "@/components/ui/ui";
import CareOfThingsPopup from "../CareOfThingsPopup/CareOfThingsPopup";

import { arrow } from "@/images/Mainpage/Natural/natural";

export default function CareOfThingsBottomBlock({ img, title, cares }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <article className="flex flex-row items-center w-full mb-[26px] lg:self-end">
        <div className="w-[50%] flex flex-col items-center  lg:self-end lg:py-[50px]">
          <Paragraph className="font-title text-textDefault font-semibold max-w-[135px] mb-[15px] text-[15px] leading-[110%] text-center lg:min-w-[200px] lg:text-[20px]">
            {title}
          </Paragraph>
          <Anchor link={false} onClick={() => setIsOpenModal(true)}>
            <Paragraph className="text-[13px] leading-[160%]">
              Узнать больше
            </Paragraph>
            <Image src={arrow} className="mr-0" alt="визуальная стрелка" />
          </Anchor>
        </div>
        <div className="w-[50%] flex items-center justify-center ml-[15px] lg:ml-0">
          <Image
            src={img}
            alt={title}
            className="max-w-[122px] lg:min-w-[191px]"
          />
        </div>
      </article>
      {isOpenModal && (
        <CareOfThingsPopup
          cares={cares}
          title={title}
          onClick={() => setIsOpenModal(false)}
        />
      )}
    </>
  );
}
