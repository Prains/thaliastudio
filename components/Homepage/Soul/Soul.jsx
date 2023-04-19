const { Title } = require("@/components/ui/ui"); // импортировать как модуль ES6
import Image from "next/image";
import { soulJute, soulRafia, soulHandmade } from "@/images/Icons/Icons"; // неправильная структура иконок

const Soul = () => {
  return (
    <section className="w-[87%] text-center mb-20">
      <Title className="text-[32px] mb-10">Для души и красоты</Title>
      <p className="text-[14px] mb-[30px]">
        Thalia Studio - это изделия из натуральных материалов таких, как джут и
        рафия. Это красивые сумочки, созданные с душой и любовью к своему делу.
      </p>
      {/*использовать параграф из ui kit*/}
      <div className="grid grid-row-3 justify-items-center">
        <div className="w-[220px]">
          <Image className="mb-[25px]" src={soulJute} alt="Джут" />
          <h4 className="text-[24px] mb-2.5">Джут</h4>
          <p className="font-text text-[14px] mb-[30px]">
            Натуральное волокно из Юго-Восточной Азии
          </p>
        </div>
        <div className="w-[220px]">
          <Image className="mb-[25px]" src={soulHandmade} alt="Ручная работа" />
          {/* неподробный и не детальный атрибут alt*/}
          <h4 className="text-[24px] mb-[30px]">Ручная работа</h4>
        </div>
        <div className="w-[220px]">
          <Image className="mb-[25px]" src={soulRafia} alt="Рафия" />
          {/* неподробный и не детальный атрибут alt*/}
          <h4 className="text-[24px] mb-2.5">Рафия</h4>
          <p className="font-text text-[14px]">
            Натуральное волокно из листьев пальмы
          </p>
        </div>
      </div>
      {/*адаптировать под другие устройства */}
    </section>
  );
};
export { Soul };
