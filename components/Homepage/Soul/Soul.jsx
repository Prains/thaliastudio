import Image from "next/image";
import { soulRopeRight } from "@/images/Mainpage/Soul/soul";
import { SoulContent } from "./SoulContent/SoulContent";
import { SoulDescription } from "./SoulDescription/SoulDescription";

const Soul = () => {
  return (
    <section className="relative w-[87%] text-center lg:w-[69%]">
      <SoulDescription />
      <SoulContent />
      <Image
        src={soulRopeRight}
        alt="Верёвочка на фоне справа"
        className="hidden absolute top-[-28%] right-[-28%] xl:block"
      />
    </section>
  );
};
export { Soul };
