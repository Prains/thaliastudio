import { Paragraph, Title, Anchor } from "@/components/ui/ui";
import Image from "next/image";
import { arrow, jute, rafia, materailTop, materailBottom, materailRight, materailLeft  } from "@/images/Mainpage/Natural/natural";

const Natural = () => {
  return (
    <section className="w-[87%] text-center mx-auto lg:w-[69%]">  
      <div className="relative">
        <Title className="text-[32px] mb-10 mx-auto lg:text-[70px] lg:mb-[65px]">
          Натуральные материалы
        </Title>
        <article className="grid grid-row-3 justify-items-center gap-x-[200px] mx-auto lg:grid-cols-3 lg:w-[69%]">
          <div className="lg:mr-[60px]">
            <div className="w-[220px] lg:w-[280px] lg:mt-[125px]">
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
          <div className="hidden lg:block lg:h-[610px] lg:w-[205px]">
            <Image
              src={materailTop}
              alt="Шматочек веревки"
              className="mb-[60px]"
            />
            <Image
              src={materailBottom}
              alt="Разноцветные нитки"
            />
          </div>
          <div className="lg:ml-[60px]">
            <div className="w-[220px] lg:w-[280px] lg:mt-[125px]">
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
