import React from "react";
import Image from "next/image";
import { Anchor } from "@/components/ui/ui";

export default function ContactLink({ img, link, title, social }) {
  return (
    <li className="w-[130px] h-[130px] bg-buttonGreen flex items-center flex-col rounded-b-[50%] xl:w-[200px] xl:h-[200px]">
      <Image
        className="w-[50px] h-[50px] mt-[15px] mb-[5px] xl:w-[100px] xl:h-[100px] xl:mb-[10px]"
        src={img}
        alt={"Изображение " + social}
      />
      <Anchor
        href={link}
        className="!text-[11px] leading-[120%] xl:!text-[14px]"
      >
        {title}
      </Anchor>
    </li>
  );
}
