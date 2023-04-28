import Image from "next/image";
import { soulRopeRight } from "@/images/Mainpage/Soul/soul";
import { SoulContent } from "./SoulContent/SoulContent";
import { SoulDescription } from "./SoulDescription/SoulDescription";

const Soul = () => {
  return (
    <section className="relative w-full mx-auto">
      <div className="w-[87%] text-center mx-auto lg:w-[69%]">
        <SoulDescription />
        <SoulContent />
      </div>
      <Image
        src={soulRopeRight}
        alt="Верёвочка на фоне справа"
        className="hidden absolute top-[-28%] right-0 xl:block"
      />
    </section>
  );
};
export { Soul };
