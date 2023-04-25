import { useState } from "react";
import Image from "next/image";
import { Anchor, Paragraph } from "@/components/ui/ui";
import CareOfThingsPopup from "@/components/HomePage/CareOfThings/CareOfThingsPopup/CareOfThingsPopup";

import { arrow } from "@/images/Mainpage/Natural/natural";

export default function CareOfThingsTopBlock({ img, title, cares }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <article className="flex flex-row items-center w-full mb-[26px] lg:self-start">
        <div className="w-[50%] flex items-center justify-center mr-[15px]  lg:mr-0">
          <Image
            src={img}
            alt={title}
            className="max-w-[122px] lg:min-w-[191px]"
          />
        </div>

        <div className="w-[50%] flex flex-col items-center  lg:self-start lg:py-[50px]">
          <Paragraph className="font-title text-textDefault font-semibold max-w-[135px] mb-[15px] text-[15px] leading-[110%] text-center lg:min-w-[200px] lg:text-[20px]">
            {title}
          </Paragraph>
          <Anchor link={false} onClick={() => setIsOpenModal(true)}>
            <Image
              src={arrow}
              className="mr-0 scale-x-[-1]"
              alt="визуальная стрелка"
            />
            <Paragraph className="text-[13px] leading-[160%]">
              Узнать больше
            </Paragraph>
          </Anchor>
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
