import { Paragraph, Title } from "@/components/ui/ui";
import Image from "next/image";
import { soulJute, soulRafia, soulHandmade, soulRopeRight } from "@/images/Mainpage/Soul/soul";
const Soul = () => {
  return (
    <section className="w-[87%] text-center lg:w-[69%]">
      <div className="relative">
        <Title className="text-[32px] mb-10 lg:mx-auto lg:mb-[70px] lg:text-[70px]">
          Для души и красоты
        </Title>
        <Paragraph 
          defaultSize 
          className="mb-[30px] lg:mx-auto lg:mb-[60px] lg:w-[625px] lg:text-[16px] lg:flex lg:justify-center"
        >
          Thalia Studio - это изделия из натуральных материалов таких, как джут и
          рафия. Это красивые сумочки, созданные с душой и любовью к своему делу.
        </Paragraph>
        <article className="grid grid-row-3 justify-items-center">
          <div className="w-[220px] lg:flex lg:items-center lg:gap-x-[100px] lg:w-[590px] lg:relative lg:right-[-180px]">
            <Image 
              className="mb-[25px]" 
              src={soulJute} 
              alt="Бежево-серые нитки Джута" 
            />
            <div className="lg:w-[190px] lg:text-left lg:relative lg:top-[-40px]">
              <h4 className="font-title font-semibold text-[24px] mb-2.5 lg:text-[30px]">
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
          <div className="lg:flex lg:relative lg:top-[-195px] lg:right-[200px]">
            <Image 
              className="mb-[25px] w-[220px] mx-auto lg:w-[300px] lg:relative lg:right-[-80px] lg:top-[115px] lg:text-left" 
              src={soulHandmade} 
              alt="Печенье и сумка ручной работы" 
            />
            <h4 className="font-title leading-[130%] font-semibold text-[24px] mb-[30px] lg:text-[30px] lg:relative lg:right-[270px] lg:top-[0px] lg:w-[178px] lg:text-left">
              Ручная работа
            </h4>
          </div>
          <div className="lg:flex lg:items-center lg:relative lg:top-[-520px] lg:right-[-385px]">
            <Image 
              className="mb-[25px] w-[220px] mx-auto lg:w-[300px]" 
              src={soulRafia} 
              alt="Бежевые волокна рафии" 
            />
            <div className="lg:w-[190px] lg:relative lg:top-[220px] lg:right-[430px] lg:text-left">
              <h4 className="font-title font-semibold text-[24px] mb-2.5 lg:text-[30px]">
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
      </div>
      <Image
        src={soulRopeRight}
        alt="Верёвочка на фоне справа"
        className="hidden absolute top-[65%] right-0 lg:block"
      />
    </section>
  );
};
export { Soul };
