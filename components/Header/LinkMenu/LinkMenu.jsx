import SocialLink from "../SocialLink/SocialLink";
import { url } from "@/utils/url";

const LinkMenu = () => {
  return (
    <nav className="hidden md:flex items-center justify-center gap-10 mt-7">
      <SocialLink href={url.catalog}>Каталог</SocialLink>
      <SocialLink href={url.novelties}>Новинки</SocialLink>
      <SocialLink href={url.payment}>Оплата и доставка</SocialLink>
      <SocialLink href={url.contacts}>Контакты</SocialLink>
    </nav>
  );
};

export default LinkMenu;
