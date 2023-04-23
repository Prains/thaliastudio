import Image from "next/image";
import { clewDesktop, clewMobile } from "@/images/Mainpage/Main/Main";

const ClewImage = () => {
  return (
    <>
      <Image
        src={clewMobile}
        className="md:hidden"
        alt="длинный развязанный клубок джута"
      />
      <Image
        src={clewDesktop}
        className="hidden md:block"
        alt="длинный развязанный клубок джута"
      />
    </>
  );
};

export default ClewImage;
