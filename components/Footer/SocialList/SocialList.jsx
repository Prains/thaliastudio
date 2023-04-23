import Image from "next/image";
import { telegram, vk, instagram, whatsapp } from "@/images/Icons/Icons";
import SocialLink from "../../Header/SocialLink/SocialLink";

const SocialList = () => {
  return (
    <nav className="flex items-center justify-center gap-5">
      <SocialLink href={"/"}>
        <Image src={telegram} alt="иконка социальной сети телеграмм" />
      </SocialLink>
      <SocialLink href={"/"}>
        <Image src={vk} alt="иконка социальной сети вконтакте" />
      </SocialLink>
      <SocialLink href={"/"}>
        <Image src={instagram} alt="иконка социальной сети инстаграмм" />
      </SocialLink>
      <SocialLink href={"/"}>
        <Image src={whatsapp} alt="иконка социальной сети ватсапп" />
      </SocialLink>
    </nav>
  );
};

export default SocialList;
