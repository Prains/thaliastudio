import { Title } from "@/components/ui/ui";
import PaymentTop from "./PaymentTop/PaymentTop";
import PaymentBottom from "./PaymentBottom/PaymentBottom";

const PaymentPage = () => {
  const top = [
    {
      title: "Сроки изготовления",
      text: "Каждое изделие вяжется по Вашему заказу, срок изготовления составляет от 7 до 20 дней с учетом текущих заказов. Но по возможности мы стараемся связать изделие как можно быстрее.",
    },
    {
      title: "Оплата",
      text: "Оплата на сайте 100% с помощью банковской карты. Возможна оплата 2 частями: 50% во время заказа и 50% по готовности изделия, для этого напишите нам любым удобным способом по WhatsApp, VKontakte, в Telegram или Instagram.",
    },
  ];

  const bottom = [
    {
      title: "Доставка по миру",
      text: "Доставляем с помощью курьерской службы СДЭК и Почтой России. Стоимость рассчитывается индивидуально, исходя из удаленности Вашего города от г.Москва. Для расчета стоимости доставки напишите нам по WhatsApp, VKontakte, в Telegram или Instagram.",
    },
    {
      title: "Доставка по Москве",
      text: "Доставку Ваших заказов по Москве может осуществить курьер, стоимость доставки - 200 руб. Возможен самовыоз по предварительной договоренности, для этого напишите нам по WhatsApp, VKontakte, в Telegram или Instagram.",
    },
  ];

  return (
    <section className="flex items-center justify-center mt-[30px] w-[87%] mx-auto flex-col mb-20 lg:mb-[150px] lg:w-[69%]">
      <Title defaultSize className="w-[280px] text-center mb-10 md:w-max">
        Оплата и доставка
      </Title>
      <PaymentTop data={top} />
      <PaymentBottom data={bottom} />
    </section>
  );
};

export default PaymentPage;
