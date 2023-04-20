import { Paragraph, Title } from "@/components/ui/ui";
import Image from "next/image";
import { soulJute, soulRafia, soulHandmade } from "@/images/Mainpage/Soul/soul";
const Soul = () => {
  return (
    <section className="w-[87%] text-center mb-20">
      <Title className="text-[32px] mb-10">
        Для души и красоты
      </Title>
      <Paragraph 
        defaultSize 
        className="mb-[30px]"
      >
        Thalia Studio - это изделия из натуральных материалов таких, как джут и
        рафия. Это красивые сумочки, созданные с душой и любовью к своему делу.
      </Paragraph>
      <article className="grid grid-row-3 justify-items-center">
        <div className="w-[220px]">
          <Image 
            className="mb-[25px]" 
            src={soulJute} 
            alt="Бежево-серые нитки Джута" 
          />
          <h4 className="text-[24px] mb-2.5">
            Джут
          </h4>
          <Paragraph 
            defaultSize 
            className="mb-[30px]"
          >
            Натуральное волокно из Юго-Восточной Азии
          </Paragraph>
        </div>
        <div className="w-[220px]">
          <Image 
            className="mb-[25px]" 
            src={soulHandmade} 
            alt="Печенье и сумка ручной работы" 
          />
          <h4 className="text-[24px] mb-[30px]">
            Ручная работа
          </h4>
        </div>
        <div className="w-[220px]">
          <Image 
            className="mb-[25px]" 
            src={soulRafia} 
            alt="Бежевые волокна рафии" 
          />
          <h4 className="text-[24px] mb-2.5">
            Рафия
          </h4>
          <Paragraph 
            defaultSize 
          >
            Натуральное волокно из листьев пальмы
          </Paragraph>
        </div>
      </article>
    </section>
  );
};
export { Soul };
