import Image from "next/image";
import { burgerLogo } from "@/images/Logo/Logo";
import SocialLink from "../SocialLink/SocialLink";
import { heart, basket, close } from "@/images/Icons/Icons";

const Burger = ({ setBurgerShown }) => {
  return (
    <section className="fixed top-0 right-0 left-0 w-full h-full bg-[#D8F8E3] flex items-center justify-center flex-col">
      <div className="flex items-center justify-between w-[87%]">
        <Image src={burgerLogo} alt="лого талиястудия" />
        <nav className="flex items-center justify-center gap-5">
          <SocialLink href="/favourites">
            <Image src={heart} alt="черное сердечко" />
          </SocialLink>
          <SocialLink href="/order">
            <Image src={basket} alt="черная корзинка" />
          </SocialLink>
          <Image
            src={close}
            alt="черный крестик"
            onClick={() => {
              setBurgerShown(false);
            }}
          />
        </nav>
      </div>
      <div className="flex items-center justify-center gap-5 flex-col">
        <SocialLink href={"/catalog"}>Каталог</SocialLink>
        <SocialLink href={"/noveties"}>Новинки</SocialLink>
        <SocialLink href={"/delivery"}>Оплата и доставка</SocialLink>
        <SocialLink href={"/contacts"}>Контакты</SocialLink>
      </div>
      <div>
        <p></p>
        <div>

        </div>
      </div>
    </section>
  );
};

export default Burger;
