import Image from "next/image";
import { materailRight, materailLeft  } from "@/images/Mainpage/Natural/natural";
import { NaturalContent } from "./NaturalContent/NaturalContent";

const Natural = () => {
  return (
    <section className="relative w-full mx-auto">  
      <NaturalContent/>
      <Image
        src={materailLeft}
        alt="Верёвочка на фоне слева"
        className="hidden absolute top-[-25%] left-0 xl:block"
      />
      <Image
        src={materailRight}
        alt="Верёвочка на фоне справа"
        className="hidden absolute top-[-65%] right-0 xl:block"
      />
    </section>
  );
};
export { Natural };
