const { Title } = require("@/components/ui/ui");
import Image from "next/image";
import { jute, rafia } from "@/images/Mainpage/Soul/soul";
import { LinkMore } from "./LinkMore";

const Natural = () => {
  return (
    <div className="w-[87%] text-center mb-20">
      <Title className="text-[32px] mb-10">Натуральные материалы</Title>
      <div className="grid grid-row-3 justify-items-center">
        <div className="w-[220px] mb-[30px]">
          <Image className="mb-[15px]" src={jute} alt="Джут" />
          <h4 className="text-[24px] mb-2.5">Джут</h4>
          <LinkMore />
        </div>
        <div className="w-[220px]">
          <Image className="mb-[15px]" src={rafia} alt="Рафия" />
          <h4 className="text-[24px] mb-2.5">Рафия</h4>
          <LinkMore />
        </div>
      </div>
    </div>
  );
};
export { Natural };
