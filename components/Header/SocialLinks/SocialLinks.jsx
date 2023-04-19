import SocialLink from "../SocialLink/SocialLink";
import Image from "next/image";
import { basket, heart, burger } from "@/images/Icons/Icons";
import Burger from "../Burger/Burger";

const SocialLinks = ({ burgerShown, setBurgerShown }) => {
  return (
    <>
      <nav className="flex items-center justify-center gap-5 mt-5 md:mt-7">
        <SocialLink href="/favourites">
          <Image src={heart} alt="черное сердечко" />
        </SocialLink>
        <SocialLink href="/order">
          <Image src={basket} alt="черная корзинка" />
        </SocialLink>
        <Image
          src={burger}
          alt="иконка бургер меню три полоски"
          onClick={() => {
            setBurgerShown(true);
          }}
          className="md:hidden"
        />
      </nav>
      {burgerShown && <Burger setBurgerShown={setBurgerShown} />}
    </>
  );
};

export default SocialLinks;
