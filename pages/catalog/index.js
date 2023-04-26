import React from "react";
import ProductCard from "@/components/ui/ProductCard/ProductCard";

import { photo1 } from "@/images/Mainpage/Catalogue/catalogue";

const Catalog = () => {
  const testCardCatalogue = {
    id: 1,
    image: photo1,
    title: "Сумочка из джута",
    price: 7700,
  };

  const testCardCatalogue2 = {
    id: 2,
    image: photo1,
    title: "Здесь оооооочень длинное название",
    price: 9999,
  };

  return (
    <div className="grid gap-[20px] grid-cols-1 md:grid-cols-3">
      <ProductCard card={testCardCatalogue} type="catalog" />
      <ProductCard card={testCardCatalogue2} type="favorite" />
      <ProductCard card={testCardCatalogue} type="cart" />
    </div>
  );
};

export default Catalog;
