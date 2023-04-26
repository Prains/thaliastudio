import { Paragraph, Anchor } from "@/components/ui/ui";
import Image from "next/image";
import { arrow } from "@/images/Mainpage/Natural/natural";

const NaturalLink = ({ onClick, changeTextLink }) => {
  const classForImage = changeTextLink ? "scale-x-[-1]" : null;

  return (
    <Anchor
      className="mb-[30px] mx-auto"
      href={"/"}
      link={false}
      onClick={onClick}
    >
      {changeTextLink ? "Скрыть инфо" : "Узнать больше"}
      <Image className={classForImage} src={arrow} alt="Стрелка в ссылке" />
    </Anchor>
  );
};
export { NaturalLink };
