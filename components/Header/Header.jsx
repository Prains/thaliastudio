import HeaderLogos from "./HeaderLogos/HeaderLogos";
import LinkMenu from "./LinkMenu/LinkMenu";
import SocialLinks from "./SocialLinks/SocialLinks";
import { useState } from "react";

const Header = () => {
  const [burgerShown, isBurgerShown] = useState(false);
  return (
    <header className="flex items-start justify-between w-[87%]">
      <HeaderLogos />
      <LinkMenu />
      <SocialLinks setBurgerShown={isBurgerShown} burgerShown={burgerShown} />
    </header>
  );
};

export default Header;
