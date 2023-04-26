import { arrow } from "@/images/Mainpage/Natural/natural";
import Image from "next/image";
import { Paragraph, Anchor } from "@/components/ui/ui";

const NoveltyPriceAndLink = () => {
    return (
        <article className="w-[280px] mx-auto mt-[20px] mb-[30px] flex items-center justify-between lg:mt-[40px] lg:mb-[40px]">
            <Paragraph className="text-[20px] text-[#282828] opacity-70">8500 р</Paragraph>
            <Anchor 
                href={"/"} 
                link={false}
            >
                <Paragraph 
                    className="active:text-[#58FF92]"
                >
                    Следующее
                </Paragraph>   
                <Image 
                    src={arrow} 
                    alt="Стрелка в ссылке"
                />
            </Anchor>
        </article>
    )
}
export {NoveltyPriceAndLink}