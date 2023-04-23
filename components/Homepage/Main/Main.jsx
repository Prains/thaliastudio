import { Button } from "@/components/ui/ui";
import Image from "next/image";
import { arrowright } from "@/images/Icons/Icons";
import ClewImage from "./ClewImage/ClewImage";

const Main = () => {
  return (
    <section className="flex items-center justify-center flex-col">
      <h1 className="font-title text-3xl text-center lg:mb-[-10px] md:text-7xl">
        Мастерская <br />
        вязаного уюта
      </h1>
      <ClewImage />
      <Button href={"/"}>
        Перейти в каталог
        <Image src={arrowright} alt="черная стрелочка направо" />
      </Button>
    </section>
  );
};

export default Main;
