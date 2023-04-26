import FooterTitle from "./FooterTitle/FooterTitle";
import FooterLink from "./FooterLink/FooterLink";
import { url } from "@/utils/url";

const FooterList = () => {
  return (
    <nav className="flex items-start justify-between w-full lg:my-[30px] lg:justify-center lg:gap-11">
      <ul className="flex items-start justify-center gap-[10px] flex-col w-1/2">
        <FooterTitle href={url.catalog}>Каталог</FooterTitle>
        <FooterLink href={url.catalog}>Сумки и аксессуары</FooterLink>
        <FooterLink href={url.catalog}>Функциональный декор</FooterLink>
        <FooterLink href={url.novelties}>Новинки</FooterLink>
      </ul>
      <ul className="flex items-start justify-center gap-[10px] flex-col">
        <FooterTitle href={url.payment}>Оплата и доставка</FooterTitle>
        <FooterLink href={url.return}>Обмен и возврат</FooterLink>
        <FooterLink href={url.contacts}>Контакты</FooterLink>
      </ul>
    </nav>
  );
};

export default FooterList;
