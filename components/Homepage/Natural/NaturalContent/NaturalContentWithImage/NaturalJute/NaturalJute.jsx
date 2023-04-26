import Image from "next/image";
import { jute, textBackground } from "@/images/Mainpage/Natural/natural";
import { Paragraph } from "@/components/ui/ui";

const NaturalJute = (props) => {
  return (
    <div className="w-[220px] lg:w-[280px] lg:mt-[125px]">
      {props.isLinkJute ? (
        <div className="relative">
          <Image
            className="mb-[15px] lg:mb-[30px]"
            src={textBackground}
            alt="Салатовый фон для текста"
          />
          {/* избавиться от изображения, сделать ксс беграунд */}
          <Paragraph className="w-[180px] text-[12px] absolute top-[15%] right-[9%] lg:w-[226px] lg:text-sm lg:top-[22%] lg:right-[10%]">
            Джут — натуральное текстильное волокно, изготавливаемое из растений
            одноимённого рода. Из этих волокон производят преимущественно мешки,
            канаты, ковры, мебельные материи и прочее. Джут применяется в смеси
            с абельмошевым волокном для грубых тканей, например мешечной.
          </Paragraph>
        </div>
      ) : (
        <Image
          className="mb-[15px] lg:mb-[30px]"
          src={jute}
          alt="Несколько бежевых ниток Джута"
        />
      )}
      <h4 className="text-[24px] mb-2.5 font-title font-semibold">Джут</h4>
    </div>
  );
};
export { NaturalJute };
