import PaymentBlock from "../PaymentBlock/PaymentBlock";

const PaymentBottom = ({ data }) => {
  return (
    <article className="lg:w-[880px]">
      {data.map(({ title, text }) => {
        return <PaymentBlock title={title} text={text} key={title} />;
      })}
    </article>
  );
};

export default PaymentBottom;
