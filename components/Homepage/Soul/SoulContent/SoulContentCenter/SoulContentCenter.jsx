import Image from "next/image";
import { soulHandmade } from "@/images/Mainpage/Soul/soul";

const SoulContentCenter = () => {
    return (
        <div className="lg:flex lg:relative lg:top-[-195px] lg:right-[200px]">
            <Image 
            className="mb-[25px] w-[220px] mx-auto lg:w-[300px] lg:relative lg:right-[-80px] lg:top-[115px] lg:text-left" 
            src={soulHandmade} 
            alt="Печенье и сумка ручной работы" 
            />
            <h4 className="font-title leading-[130%] font-semibold text-[24px] mb-[30px] lg:text-[30px] lg:relative lg:right-[270px] lg:top-[0px] lg:w-[178px] lg:text-left">
                Ручная работа
            </h4>
        </div>
    )
}
export { SoulContentCenter }