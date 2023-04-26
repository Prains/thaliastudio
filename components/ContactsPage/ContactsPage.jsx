import { Title, Paragraph } from "@/components/ui/ui";
import ContactLink from "@/components/ContactsPage/ContactLink/ContactLink";
import { ContactPhoneBlock } from "./ContactPhoneBlock/ContactPhoneBlock";
import { socialLinks } from "@/utils/url";

import {
  telegram as telegramImg,
  vk as vkImg,
  instagram as instagramImg,
  whatsapp as whatsappImg,
} from "@/images/Icons/icons.js";

export const ContactsPage = () => {
  const socials = [
    {
      social: "telegram",
      img: telegramImg,
      link: socialLinks.tg,
      title: "@thalia_crochetstudio",
    },
    {
      social: "vk",
      img: vkImg,
      link: socialLinks.vk,
      title: "Thalia Studio",
    },
    {
      social: "instagram",
      img: instagramImg,
      link: socialLinks.ig,
      title: "@thalia_crochetstudio",
    },
    {
      social: "whatsapp",
      img: whatsappImg,
      link: socialLinks.wa,
      title: "Natalia Leskova",
    },
  ];
  return (
    <div className="flex flex-col items-center mt-[30px] w-[87%] xl:w-[69%]">
      <Title className="text-[32px] mb-[40px] mx-auto leading-[110%] lg:text-[70px] lg:mb-[70px]">
        Контакты
      </Title>
      <Paragraph className="text-center text-[14px] leading-[130%] mb-[35px] lg:mb-[60px]">
        Для связи с нами напишите или позвоните любым удобным для Вас способом
      </Paragraph>
      <ul className="grid grid-rows-2 grid-cols-2 gap-x-[20px] gap-y-[30px] mb-[40px] md:grid-rows-1 md:grid-cols-4 xl:mb-[70px]">
        {socials.map((social, i) => (
          <ContactLink key={i} {...social} />
        ))}
      </ul>
      <ContactPhoneBlock />
    </div>
  );
};
