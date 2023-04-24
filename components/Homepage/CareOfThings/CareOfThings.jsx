import React from "react";
import Image from "next/image";
import { Button, Paragraph, Title } from "@/components/ui/ui";
import ThingsFromJute from "@/components/Homepage/CareOfThings/ThingsFromJute/ThingsFromJute";
import ThingsFromRaffia from "@/components/Homepage/CareOfThings/ThingsFromRaffia/ThingsFromRaffia";
import { jute, raffia } from "@/images/Mainpage/CareOfThings/careOfThings";
import { arrow } from "@/images/Mainpage/Natural/natural";

export default function CareOfThings() {
  const items = [
    {
      title: "Уход за вещами из джута",
      link: "/",
      img: jute,
    },
    {
      title: "Уход за вещами из рафии",
      link: "/",
      img: raffia,
    },
  ];

  return (
    <section className="w-[87%] xl:w-[69%] mb-[80px] xl:mb-[150px]">
      <Title
        defaultSize
        className="mb-[40px] text-center md:mb-[50px] lg:mb-[70px]"
      >
        Уход за вещами
      </Title>
      <div className="flex items-center flex-col mx-auto sm:w-[70%] md:w-[60%] md:mx-auto xl:h-[382px] xl:w-[100%] xl:flex-row">
        <ThingsFromJute {...items[0]} />
        <ThingsFromRaffia {...items[1]} />
      </div>
      <Button href="/" className="mx-auto">
        <Paragraph>Перейти в каталог</Paragraph>
        <Image src={arrow} alt="стрелочка для перехода в каталог" />
      </Button>
    </section>
  );
}
