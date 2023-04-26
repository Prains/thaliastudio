import Image from "next/image";
import { preloaderImage } from "@/images/Preloader/PreloaderImage";

const Prealoder = () => {
  return (
    <div className="w-full h-full flex items-center justify-center absolute top-0 left-0">
      <Image
        src={preloaderImage}
        alt="Огромный крутящийся клубок джута"
        className="animate-spin"
      />
    </div>
  );
};

export default Prealoder;
