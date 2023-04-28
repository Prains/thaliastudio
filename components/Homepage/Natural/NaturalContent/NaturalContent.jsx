import { Title } from "@/components/ui/ui";
import { NaturalContentWithImage } from "./NaturalContentWithImage/NaturalContentWithImage";

const NaturalContent = () => {
    return (
        <article className="relative w-[87%] mx-auto text-center lg:w-[69%]">
          <Title className="max-w-[550px] text-[32px] mb-10 mx-auto lg:text-[70px] lg:mb-[65px]">
            Натуральные материалы
          </Title>
          <NaturalContentWithImage/>
        </article>
    )
}
export {NaturalContent}