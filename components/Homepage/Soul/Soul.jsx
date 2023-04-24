import Image from "next/image";
import { soulRopeRight } from "@/images/Mainpage/Soul/soul";
import { SoulContent } from "./SoulContent/SoulContent";
import { SoulDescription } from "./SoulDescription/SoulDescription";

const Soul = () => {
  return (
    <section className="w-[87%] text-center lg:w-[69%]">
      <div className="relative">
        <SoulDescription/>
        <SoulContent/>
      </div>
      <Image
        src={soulRopeRight}
        alt="Верёвочка на фоне справа"
        className="hidden absolute top-[65%] right-0 xl:block"
      />
    </section>
  );
};
export { Soul };
