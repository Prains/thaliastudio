import Image from "next/image";
import { preloaderImage } from "@/images/Preloader/PreloaderImage";

const Prealoder = () => {
  return (
    <Image
      src={preloaderImage}
      alt="Огромный крутящийся клубок джута"
      className="animate-spin"
    />
  );
};

export default Prealoder;
