import Image from "next/image";
import { rafia, textBackground } from "@/images/Mainpage/Natural/natural";
import { Paragraph } from "@/components/ui/ui";
import { useState } from "react";

const NaturalRafia = (props) => {
    // const [linkRafia, setIsLinkRafia] = useState(false);

    return (
        <div className="w-[220px] lg:w-[280px] lg:mt-[125px]">
            {
                props.isLinkRafia ? (
                    <div className="relative">
                        <Image
                            className="mb-[15px] lg:mb-[30px]" 
                            src={textBackground}
                            alt="Салатовый фон для текста"
                        />
                        <Paragraph 
                            className="w-[180px] text-[12px] absolute top-[23%] right-[9%] lg:w-[226px] lg:text-sm lg:top-[30%] lg:right-[10%]">
                                Ра́фия — род растений семейства Пальмовые, родиной которых 
                                является тропическая Африка и в особенности Мадагаскар, 
                                а также для одного вида — Центральная и Южная Америка. 
                                Достигают в высоту 16 метров.
                        </Paragraph>
                    </div>
                    ) : (
                        <Image 
                            className="mb-[15px] lg:mb-[30px]" 
                            src={rafia} 
                            alt="Рафия в белой упаковке" 
                        />) 
            }
            <h4 className="text-[24px] mb-2.5 font-title font-semibold">Рафия</h4>
        </div>
    )
}

export {NaturalRafia}