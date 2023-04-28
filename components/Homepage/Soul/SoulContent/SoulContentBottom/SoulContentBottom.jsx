import { Paragraph } from "@/components/ui/ui";
import Image from "next/image";
import { soulRafia } from "@/images/Mainpage/Soul/soul";

const SoulContentBottom = () => {
  return (
    <article className="lg:flex lg:flex-col lg:items-center lg:relative lg:top-[-520px] lg:right-[-290px]">
      <Image
        className="mb-[25px] w-[220px] mx-auto lg:w-[300px]"
        src={soulRafia}
        alt="Бежевые волокна рафии"
      />
      <div className="lg:w-[190px] lg:relative lg:top-[-50px] lg:right-[180px] lg:text-left">
        <h4 className="font-title font-semibold text-[24px] mb-2.5 lg:text-[30px]">
          Рафия
        </h4>
        <Paragraph defaultSize>Натуральное волокно из листьев пальмы</Paragraph>
      </div>
    </article>
  );
};
export { SoulContentBottom };
