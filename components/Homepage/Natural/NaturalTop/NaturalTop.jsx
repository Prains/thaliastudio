import { Paragraph, Title, Anchor } from "@/components/ui/ui";
import Image from "next/image";
import { arrow, jute, rafia } from "@/images/Mainpage/Natural/natural";
import { NaturalCenter } from "./NaturalCenter/NaturalCenter";
import { NaturalLink } from "./NaturalLink/NaturalLink";
const NaturalTop = () => {
    return (
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
              <NaturalLink/>
            </div>
            <NaturalCenter/>
            <div className="lg:ml-[60px]">
              <div className="w-[220px] lg:w-[280px] lg:mt-[125px]">
                <Image 
                  className="mb-[15px] lg:mb-[30px]" 
                  src={rafia} 
                  alt="Рафия в белой упаковке" 
                />
                <h4 className="text-[24px] mb-2.5 font-title font-semibold">Рафия</h4>
              </div>
              <NaturalLink/>
            </div>
          </article>
      </div>
    )
}
export {NaturalTop}