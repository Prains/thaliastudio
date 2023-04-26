import { Paragraph, Title } from "@/components/ui/ui";

const SoulDescription = () => {
  return (
    <>
      <Title className="text-[32px] mb-10 lg:mx-auto lg:mb-[70px] lg:text-[70px]">
        Для души и красоты
      </Title>
      <Paragraph
        defaultSize
        className="mb-[30px] lg:mx-auto lg:mb-[60px] lg:w-[625px] lg:text-[16px] lg:flex lg:justify-center"
      >
        Thalia Studio - это изделия из натуральных материалов таких, как джут и
        рафия. Это красивые сумочки, созданные с душой и любовью к своему делу.
      </Paragraph>
    </>
  );
};
export { SoulDescription };
