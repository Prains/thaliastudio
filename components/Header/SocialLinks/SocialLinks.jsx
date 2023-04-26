import SocialLink from "../SocialLink/SocialLink";
import Image from "next/image";
import { basket, heart, burger } from "@/images/icons/icons";
import Burger from "../Burger/Burger";
import { url } from "@/utils/url";

const SocialLinks = ({ burgerShown, setBurgerShown }) => {
  return (
    <>
      <nav className="flex items-center justify-center gap-5 mt-5 md:mt-7">
        <SocialLink href={url.favourites}>
          <Image src={heart} alt="черное сердечко" className="cursor-pointer" />
        </SocialLink>
        <SocialLink href={url.order}>
          <Image
            src={basket}
            alt="черная корзинка"
            className="cursor-pointer"
          />
        </SocialLink>
        <Image
          src={burger}
          alt="иконка бургер меню три полоски"
          onClick={() => {
            setBurgerShown(true);
          }}
          className="md:hidden cursor-pointer"
        />
      </nav>
      {burgerShown && <Burger setBurgerShown={setBurgerShown} />}
    </>
  );
};

export default SocialLinks;
