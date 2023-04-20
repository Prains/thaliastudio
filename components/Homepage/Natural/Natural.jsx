import { Paragraph, Title, Anchor } from "@/components/ui/ui";
import Image from "next/image";
import { arrow, jute, rafia } from "@/images/Mainpage/Natural/natural";

const Natural = () => {
  return (
    <section className="w-[87%] text-center mb-20">
      <Title className="text-[32px] mb-10">
        Натуральные материалы
      </Title>
      <article className="grid grid-row-3 justify-items-center">
        <div className="w-[220px]">
          <Image 
            className="mb-[15px]" 
            src={jute} 
            alt="Несколько бежевых ниток Джута" 
          />
          <h4 className="text-[24px] mb-2.5">Джут</h4>
        </div>
          <Anchor 
            className="mb-[30px]"
            href={"/"} 
            link
          >
            <Paragraph className="active:text-[#58FF92]">Узнать больше</Paragraph>
            <Image 
              src={arrow} 
              alt="Стрелка в ссылке"
            />
          </Anchor>
        <div className="w-[220px]">
          <Image 
            className="mb-[15px]" 
            src={rafia} 
            alt="Рафия в белой упаковке" 
          />
        </div>
          <h4 className="text-[24px] mb-2.5">Рафия</h4>
          <Anchor 
            href={"/"} 
            link
          >
            <Paragraph className="active:text-[#58FF92]">Узнать больше</Paragraph>
            <Image 
              src={arrow} 
              alt="Стрелка в ссылке"
            />
          </Anchor>
      </article>
    </section>
  );
};
export { Natural };
