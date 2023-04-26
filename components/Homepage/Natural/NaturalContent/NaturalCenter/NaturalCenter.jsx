import Image from "next/image";
import { materailTop, materailBottom } from "@/images/Mainpage/Natural/natural";

const NaturalCenter = () => {
    return (
        <div className="hidden lg:block lg:h-[610px] lg:w-[205px]">
            <Image
                src={materailTop}
                alt="Шматочек веревки"
                className="mb-[60px]"
            />
            <Image
                src={materailBottom}
                alt="Разноцветные нитки"
            />
        </div>
  )
}
export {NaturalCenter}