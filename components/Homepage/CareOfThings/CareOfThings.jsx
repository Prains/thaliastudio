import React from "react";
import Image from "next/image";
import { Button, Paragraph, Title } from "@/components/ui/ui";
import CareOfThingsTopBlock from "@/components/Homepage/CareOfThings/CareOfThingsTopBlock/CareOfThingsTopBlock";
import CareOfThingsBottomBlock from "@/components/Homepage/CareOfThings/CareOfThingsBottomBlock/CareOfThingsBottomBlock";
import { jute, raffia } from "@/images/Mainpage/CareOfThings/careOfThings";
import { arrow } from "@/images/Mainpage/Natural/natural";

export default function CareOfThings() {
  const items = [
    {
      title: "Уход за вещами из джута",
      img: jute,
      cares: [
        {
          title: "Сухая чистка.",
          description:
            "Вытряхните изделие, почистите щеткой или пропылесосьте.",
        },
        {
          title: "Стирка в стиральной машине.",
          description:
            "Джут хорошо впитывает влагу и становится очень тяжелым при стирке, практически каменным, поэтому чтоб не испортить барабан машины в ней можно стирать только небольшие вещи, которые связаны без каната (небольшие коврики, сервировочные салфетки, сумки, эко губки, небольшие корзинки и т.д.). ",
        },
      ],
    },
    {
      title: "Уход за вещами из рафии",
      img: raffia,
      cares: [
        {
          title: "Сухая чистка.",
          description:
            "Вытряхните изделие, почистите щеткой или пропылесосьте.",
        },
        {
          title: "Стирка в стиральной машине.",
          description:
            "Джут хорошо впитывает влагу и становится очень тяжелым при стирке, практически каменным, поэтому чтоб не испортить барабан машины в ней можно стирать только небольшие вещи, которые связаны без каната (небольшие коврики, сервировочные салфетки, сумки, эко губки, небольшие корзинки и т.д.).",
        },
      ],
    },
  ];

  return (
    <section className="w-[87%] xl:w-[69%] mb-[80px] xl:mb-[150px]">
      <Title className="text-[32px] mb-10 mx-auto text-center lg:text-[70px] lg:mb-[65px]">
        Уход за вещами
      </Title>
      <div className="flex items-center flex-col mx-auto sm:w-[70%] md:w-[60%] md:mx-auto xl:h-[382px] xl:w-[100%] xl:flex-row">
        <CareOfThingsTopBlock {...items[0]} />
        <CareOfThingsBottomBlock {...items[1]} />
      </div>
      <Button href="/" className="mx-auto">
        <Paragraph>Перейти в каталог</Paragraph>
        <Image src={arrow} alt="стрелочка для перехода в каталог" />
      </Button>
    </section>
  );
}
