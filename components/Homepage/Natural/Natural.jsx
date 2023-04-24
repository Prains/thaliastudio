import Image from "next/image";
import { materailRight, materailLeft  } from "@/images/Mainpage/Natural/natural";
import { NaturalContent } from "./NaturalContent/NaturalContent";

const Natural = () => {
  return (
    <section className="w-[87%] text-center mx-auto lg:w-[69%]">  
      <NaturalContent/>
      <Image
        src={materailLeft}
        alt="Верёвочка на фоне слева"
        className="hidden absolute top-[360%] left-0 xl:block"
      />
      <Image
        src={materailRight}
        alt="Верёвочка на фоне справа"
        className="hidden absolute top-[325%] right-0 xl:block"
      />
    </section>
  );
};
export { Natural };
