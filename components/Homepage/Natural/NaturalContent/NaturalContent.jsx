import { Title } from "@/components/ui/ui";
import { NaturalContentWithImage } from "./NaturalContentWithImage/NaturalContentWithImage";

const NaturalContent = () => {
    return (
        <div className="relative">
          <Title className="max-w-[550px] text-[32px] mb-10 mx-auto lg:text-[70px] lg:mb-[65px]">
            Натуральные материалы
          </Title>
          <NaturalContentWithImage/>
        </div>
    )
}
export {NaturalContent}