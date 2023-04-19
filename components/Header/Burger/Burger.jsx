import Image from "next/image";
import { burgerLogo } from "@/images/Logo/Logo";
import SocialLink from "../SocialLink/SocialLink";
import {
  heart,
  basket,
  close,
  telegram,
  vk,
  instagram,
  whatsapp,
} from "@/images/Icons/Icons";
import Link from "next/link";

const Burger = ({ setBurgerShown }) => {
  return (
    <section className="fixed top-0 right-0 left-0 w-full h-full bg-[#D8F8E3] flex items-center justify-between flex-col">
      <div className="flex items-center justify-between w-[87%] mt-5">
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
      <div className="flex items-center justify-center flex-col gap-4 mb-7">
        <Link href="tel:+7 916 142 14 53">7 916 142 14 53</Link>
        <div className="flex items-center justify-center gap-5">
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
        </div>
      </div>
    </section>
  );
};

export default Burger;
