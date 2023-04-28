import Image from "next/image";
import { rafia } from "@/images/Mainpage/Natural/natural";
import { Paragraph } from "@/components/ui/ui";

const NaturalRafia = (props) => {

    return (
        <article className="w-[220px] lg:w-[280px] lg:mt-[125px]">
            {
                props.isLinkRafia ? (
                    <div className="mx-auto w-[220px] h-[302px] rounded-[300px] border border-[#D8F8E3] border-[3px] mb-[15px] lg:mb-[30px] lg:w-[280px] lg:h-[386px]">
                        <div className="mt-[8px] mx-auto relative bg-[#D8F8E3] w-[204px] h-[282px] rounded-[300px] border border-[#282828] border-opacity-20 lg:w-[262px] lg:h-[360px]">
                            <Paragraph 
                                className="w-[180px] text-[12px] absolute top-[23%] right-[6%] lg:w-[226px] lg:text-sm lg:top-[30%] lg:right-[7%]">
                                    Ра́фия — род растений семейства Пальмовые, родиной которых 
                                    является тропическая Африка и в особенности Мадагаскар, 
                                    а также для одного вида — Центральная и Южная Америка. 
                                    Достигают в высоту 16 метров.
                            </Paragraph>
                        </div>
                  </div>
                    ) : (
                        <Image 
                            className="mb-[15px] lg:mb-[30px]" 
                            src={rafia} 
                            alt="Рафия в белой упаковке" 
                        />) 
            }
            <h4 className="text-[24px] mb-2.5 font-title font-semibold">Рафия</h4>
        </article>
    )
}

export {NaturalRafia}