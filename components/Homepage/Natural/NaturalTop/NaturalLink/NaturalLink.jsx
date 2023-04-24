import { Paragraph, Anchor } from "@/components/ui/ui";
import Image from "next/image";
import { arrow } from "@/images/Mainpage/Natural/natural";
const NaturalLink = () => {
    return (
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
    )
}
export {NaturalLink}