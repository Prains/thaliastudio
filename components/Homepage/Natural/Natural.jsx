import { Paragraph, Title, Anchor } from "@/components/ui/ui";
import Image from "next/image";
import { arrow, jute, rafia, materailTop, materailBottom, materailRight, materailLeft  } from "@/images/Mainpage/Natural/natural";

const Natural = () => {
  return (
    <section className="w-[87%] text-center mx-auto lg:w-[69%]">  
      <div className="relative">
        <Title className="text-[32px] mb-10 mx-auto lg:text-[70px] lg:mb-[185px]">
          Натуральные материалы
        </Title>
        <article className="grid grid-row-3 justify-items-center lg:w-[69%] lg:flex lg:gap-[320px]">
          <div>
            <div className="w-[220px] lg:w-[280px]">
              <Image 
                className="mb-[15px] lg:mb-[30px]" 
                src={jute} 
                alt="Несколько бежевых ниток Джута" 
              />
              <h4 className="text-[24px] mb-2.5 font-title font-semibold">Джут</h4>
            </div>
            <Anchor 
              className="mb-[30px] mx-auto"
              href={"/"} 
              link
            >
              <Paragraph className="active:text-[#58FF92]">Узнать больше</Paragraph>
              <Image 
                src={arrow} 
                alt="Стрелка в ссылке"
              />
            </Anchor>
          </div>
          {/* <div className="hidden absolute top-[0px] lg:block">
            <Image
              src={materailTop}
              alt="Шматочек веревки"
              className="hidden absolute top-[270px] right-[370px] lg:block"
            />
            <Image
              src={materailBottom}
              alt="Разноцветные нитки"
              className="hidden absolute top-[270px] right-[370px] lg:block"
            />
          </div> */}
          <div>
            <div className="w-[220px] lg:w-[280px]">
              <Image 
                className="mb-[15px] lg:mb-[30px]" 
                src={rafia} 
                alt="Рафия в белой упаковке" 
              />
              <h4 className="text-[24px] mb-2.5 font-title font-semibold">Рафия</h4>
            </div>
            <Anchor 
              className="mx-auto"
              href={"/"} 
              link
            >
              <Paragraph className="active:text-[#58FF92]">Узнать больше</Paragraph>
              <Image 
                src={arrow} 
                alt="Стрелка в ссылке"
              />
            </Anchor>
          </div>
        </article>
    </div>
      <Image
        src={materailLeft}
        alt="Верёвочка на фоне слева"
        className="hidden absolute top-[420%] left-0 lg:block"
      />
      <Image
        src={materailRight}
        alt="Верёвочка на фоне справа"
        className="hidden absolute top-[380%] right-0 lg:block"
      />
    </section>
  );
};
export { Natural };
