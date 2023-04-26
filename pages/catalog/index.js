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

  return (
    <div className="grid gap-[20px] grid-cols-3">
      <ProductCard card={testCardCatalogue} type="catalog" />
      <ProductCard card={testCardCatalogue} type="favorite" />
      <ProductCard card={testCardCatalogue} type="cart" />
    </div>
  );
};

export default Catalog;
