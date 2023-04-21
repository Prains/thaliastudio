import FooterTitle from "./FooterTitle/FooterTitle";
import FooterLink from "./FooterLink/FooterLink";

const FooterList = () => {
  return (
    <nav className="flex items-start justify-between w-full">
      <ul className="flex items-start justify-center gap-[10px] flex-col w-1/2">
        <FooterTitle>Каталог</FooterTitle>
        <FooterLink>Сумки и аксессуары</FooterLink>
        <FooterLink>Функциональный декор</FooterLink>
        <FooterLink>Новинки</FooterLink>
      </ul>
      <ul className="flex items-start justify-center gap-[10px] flex-col">
        <FooterTitle>Оплата и доставка</FooterTitle>
        <FooterLink>Обмен и возврат</FooterLink>
        <FooterLink>Контакты</FooterLink>
      </ul>
    </nav>
  );
};

export default FooterList;
