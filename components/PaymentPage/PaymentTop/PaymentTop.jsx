import Image from "next/image";
import PaymentBlock from "../PaymentBlock/PaymentBlock";
import { clew } from "@/images/PaymentPage/payment";

const PaymentTop = ({ data }) => {
  return (
    <div className="lg:flex items-center justify-center lg:gap-24 w-full">
      <div className="lg:w-[355px]">
        {data.map(({ title, text }) => {
          return <PaymentBlock title={title} text={text} key={title} />;
        })}
      </div>
      <Image
        src={clew}
        alt="Огромный клубок в зеленом кольце"
        className="hidden lg:block"
      />
    </div>
  );
};

export default PaymentTop;
