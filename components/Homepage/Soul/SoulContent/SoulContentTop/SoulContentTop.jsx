import { Paragraph } from "@/components/ui/ui";
import Image from "next/image";
import { soulJute } from "@/images/Mainpage/Soul/soul";

const SoulContentTop = () => {
    return (
        <div className="w-[220px] lg:flex lg:items-center lg:gap-x-[100px] lg:w-[590px] lg:relative lg:right-[-180px]">
            <Image 
            className="mb-[25px]" 
            src={soulJute} 
            alt="Бежево-серые нитки Джута" 
            />
            <div className="lg:w-[190px] lg:text-left lg:relative lg:top-[-40px]">
                <h4 className="font-title font-semibold text-[24px] mb-2.5 lg:text-[30px]">
                    Джут
                </h4>
                <Paragraph 
                    defaultSize 
                    className="mb-[30px]"
                >
                    Натуральное волокно из Юго-Восточной Азии
                </Paragraph>
            </div>
        </div>
    )
}
export {SoulContentTop}