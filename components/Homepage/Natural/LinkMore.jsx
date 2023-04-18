import Image from "next/image"
import { arrow, pointLine } from "@/components/images/icons/Icons.js"

const LinkMore = () => {
    return (
        <div className="grid grid-row-2 justify-items-center text-center">
            <a href="/" className="flex align-center justify-center mb-[5px] hover:underline active:text-[#58FF92]">
                <p className="cursor-pointer font-text text-[14px] mr-[14px]">Узнать больше</p>
                <Image className="w-[16px]" src={arrow} alt="Стрелочка"/>
            </a>
            <Image className="w-[135px]" src={pointLine} alt="Точки ссылки"/>
        </div>
    )
}
export {LinkMore}