import { Paragraph, Title } from "@/components/ui/ui";
import Image from "next/image";
import { soulJute, soulRafia, soulHandmade, soulRopeRight } from "@/images/Mainpage/Soul/soul";
const Soul = () => {
  return (
    <section className="w-[87%] text-center mb-20 md:w-[69%] ">
      <Title className="text-[32px] mb-10 md:mx-auto md:mb-[70px] md:text-[70px]">
        Для души и красоты
      </Title>
      <Paragraph 
        defaultSize 
        className="mb-[30px] md:mx-auto md:mb-[70px] md:w-[625px] md:text-[16px] md:flex md:justify-center"
      >
        Thalia Studio - это изделия из натуральных материалов таких, как джут и
        рафия. Это красивые сумочки, созданные с душой и любовью к своему делу.
      </Paragraph>
      <article className="grid grid-row-3 justify-items-center">
        <div className="w-[220px] md:flex md:items-center md:gap-x-[100px] md:w-[590px] md:relative md:right-[-180px]">
          <Image 
            className="mb-[25px]" 
            src={soulJute} 
            alt="Бежево-серые нитки Джута" 
          />
          <div className="md:w-[190px] md:text-left md:relative md:top-[-25px]">
            <h4 className="font-title font-semibold text-[24px] mb-2.5 md:text-[30px]">
              Джут
            </h4>
            <Paragraph 
              defaultSize 
              className="mb-[30px]"
            >
              Натуральное волокно из Юго-Восточной Азии
            </Paragraph>
          </div>
        </div>
        <div className="md:flex md:relative md:top-[-180px] md:right-[180px]">
          <Image 
            className="mb-[25px] w-[220px] md:relative md:right-[-80px] md:top-[115px] md:text-left" 
            src={soulHandmade} 
            alt="Печенье и сумка ручной работы" 
          />
          <h4 className="font-title leading-[130%] font-semibold text-[24px] mb-[30px] md:text-[30px] md:relative md:right-[190px] md:top-[35px] md:w-[178px] md:text-left">
            Ручная работа
          </h4>
        </div>
        <div className="w-[220px] md:w-[409px] md:flex md:items-center md:relative md:top-[-395px] md:right-[-275px]">
          <Image 
            className="mb-[25px] w-[220px]" 
            src={soulRafia} 
            alt="Бежевые волокна рафии" 
          />
          <div className="md:w-[190px] md:relative md:top-[165px] md:right-[310px] md:text-left">
            <h4 className="font-title font-semibold text-[24px] mb-2.5 md:text-[30px]">
              Рафия
            </h4>
            <Paragraph 
              defaultSize 
            >
              Натуральное волокно из листьев пальмы
            </Paragraph>
          </div>
        </div>
      </article>
      <Image
        src={soulRopeRight}
        alt="Верёвочка на фоне справа"
        className="hidden absolute top-[-35%] right-0 lg:block"
      />
    </section>
  );
};
export { Soul };
