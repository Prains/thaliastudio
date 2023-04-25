import Image from "next/image";
import { materailRight, materailLeft  } from "@/images/Mainpage/Natural/natural";
import { NaturalContent } from "./NaturalContent/NaturalContent";

const Natural = () => {
  return (
    <section className="relative w-[87%] text-center mx-auto lg:w-[69%]">  
      <NaturalContent/>
      <Image
        src={materailLeft}
        alt="Верёвочка на фоне слева"
        className="hidden absolute top-[-25%] left-[-23%] xl:block"
      />
      <Image
        src={materailRight}
        alt="Верёвочка на фоне справа"
        className="hidden absolute top-[-65%] right-[-28%] xl:block"
      />
    </section>
  );
};
export { Natural };
