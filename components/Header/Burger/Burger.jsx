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
import { url, socialLinks, tel } from "@/utils/url";
import BurgerLink from "./BurgerLink/BurgerLink";

const Burger = ({ setBurgerShown }) => {
  return (
    <section className="fixed top-0 right-0 left-0 w-full h-full bg-[#D8F8E3] flex items-center justify-between flex-col z-50">
      <div className="flex items-center justify-between w-[87%] mt-5">
        <BurgerLink shown={setBurgerShown} href={url.index}>
          <Image src={burgerLogo} alt="лого талиястудия" />
        </BurgerLink>
        <nav className="flex items-center justify-center gap-5">
          <BurgerLink shown={setBurgerShown} href={url.favourites}>
            <Image src={heart} alt="черное сердечко" />
          </BurgerLink>
          <BurgerLink shown={setBurgerShown} href={url.order}>
            <Image src={basket} alt="черная корзинка" />
          </BurgerLink>
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
        <BurgerLink shown={setBurgerShown} href={url.catalog}>
          Каталог
        </BurgerLink>
        <BurgerLink shown={setBurgerShown} href={url.novelties}>
          Новинки
        </BurgerLink>
        <BurgerLink shown={setBurgerShown} href={url.payment}>
          Оплата и доставка
        </BurgerLink>
        <BurgerLink shown={setBurgerShown} href={url.contacts}>
          Контакты
        </BurgerLink>
      </div>
      <div className="flex items-center justify-center flex-col gap-4 mb-7">
        <Link href={socialLinks.phone}>{tel}</Link>
        <div className="flex items-center justify-center gap-5">
          <SocialLink href={socialLinks.tg}>
            <Image src={telegram} alt="иконка социальной сети телеграмм" />
          </SocialLink>
          <SocialLink href={socialLinks.vk}>
            <Image src={vk} alt="иконка социальной сети вконтакте" />
          </SocialLink>
          <SocialLink href={socialLinks.ig}>
            <Image src={instagram} alt="иконка социальной сети инстаграмм" />
          </SocialLink>
          <SocialLink href={socialLinks.wa}>
            <Image src={whatsapp} alt="иконка социальной сети ватсапп" />
          </SocialLink>
        </div>
      </div>
    </section>
  );
};

export default Burger;
