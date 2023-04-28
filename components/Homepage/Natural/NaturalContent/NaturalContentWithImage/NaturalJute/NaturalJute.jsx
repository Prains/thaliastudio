import Image from "next/image";
import { jute, textBackground } from "@/images/Mainpage/Natural/natural";
import { Paragraph } from "@/components/ui/ui";

const NaturalJute = (props) => {
  return (
    <article className="w-[220px] lg:w-[280px] lg:mt-[125px]">
      {props.isLinkJute ? (
        <div className="mx-auto w-[220px] h-[302px] rounded-[300px] border border-[#D8F8E3] border-[3px] mb-[15px] lg:mb-[30px] lg:w-[280px] lg:h-[386px]">
          <div className="mt-[8px] mx-auto relative bg-[#D8F8E3] w-[204px] h-[282px] rounded-[300px] border border-[#282828] border-opacity-20 lg:w-[262px] lg:h-[360px]">
            <Paragraph className="w-[180px] text-[12px] absolute top-[13%] right-[6%] lg:w-[226px] lg:text-sm lg:top-[20%] lg:right-[7%]">
                  Джут — натуральное текстильное волокно, изготавливаемое из растений
                  одноимённого рода. Из этих волокон производят преимущественно мешки,
                  канаты, ковры, мебельные материи и прочее. Джут применяется в смеси
                  с абельмошевым волокном для грубых тканей, например мешечной.
            </Paragraph>
          </div>
        </div>
      ) : (
        <Image
          className="mb-[15px] lg:mb-[30px]"
          src={jute}
          alt="Несколько бежевых ниток Джута"
        />
      )}
      <h4 className="text-[24px] mb-2.5 font-title font-semibold">Джут</h4>
    </article>
  );
};
export { NaturalJute };
