import { Title } from "@/components/ui/ui";
import PaymentTop from "./PaymentTop/PaymentTop";
import PaymentBottom from "./PaymentBottom/PaymentBottom";

const PaymentPage = ({ top, bottom, title }) => {
  return (
    <section className="flex items-center justify-center mt-[30px] w-[87%] mx-auto flex-col mb-20 lg:mb-[150px] lg:w-[69%]">
      <Title defaultSize className="w-[280px] text-center mb-10 md:w-max">
        {title}
      </Title>
      <PaymentTop data={top} />
      <PaymentBottom data={bottom} />
    </section>
  );
};

export default PaymentPage;
