import React from "react";
import { Title, Paragraph } from "@/components/ui/ui";

export const ContactsPage = () => {
  return (
    <div className="flex flex-col items-center w-[87%] xl:w-[69%]">
      <Title className="text-[32px] mb-[40px] mx-auto lg:text-[70px] lg:mb-[70px]">
        Контакты
      </Title>
      <Paragraph className="text-center text-[14px] leading-[130%] mb-[35px] lg:mb-[60px]">
        Для связи с нами напишите или позвоните любым удобным для Вас способом
      </Paragraph>
      <div className="grid grid-rows-2 grid-cols-2">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
};
