import SocialLink from "../SocialLink/SocialLink";

const LinkMenu = () => {
  return (
    <nav className="hidden md:flex items-center justify-center gap-10 mt-7">
      <SocialLink href={"/catalog"}>Каталог</SocialLink>
      <SocialLink href={"/noveties"}>Новинки</SocialLink>
      <SocialLink href={"/delivery"}>Оплата и доставка</SocialLink>
      <SocialLink href={"/contacts"}>Контакты</SocialLink>
    </nav>
  );
};

export default LinkMenu;
