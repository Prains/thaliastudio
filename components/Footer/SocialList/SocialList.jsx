import Image from "next/image";
import { telegram, vk, instagram, whatsapp } from "@/images/Icons/Icons";
import SocialLink from "../../Header/SocialLink/SocialLink";
import { socialLinks } from "@/utils/url";

const SocialList = () => {
  return (
    <nav className="flex items-center justify-center gap-5">
      <SocialLink href={socialLinks.tg} className="w-[30px]">
        <Image src={telegram} alt="иконка социальной сети телеграмм" />
      </SocialLink>
      <SocialLink href={socialLinks.vk} className="w-[30px]">
        <Image src={vk} alt="иконка социальной сети вконтакте" />
      </SocialLink>
      <SocialLink href={socialLinks.ig} className="w-[30px]">
        <Image src={instagram} alt="иконка социальной сети инстаграмм" />
      </SocialLink>
      <SocialLink href={socialLinks.wa} className="w-[30px]">
        <Image src={whatsapp} alt="иконка социальной сети ватсапп" />
      </SocialLink>
    </nav>
  );
};

export default SocialList;
