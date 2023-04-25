import React from "react";

export default function CareOfThigsPopupItem({ care, index }) {
  return (
    <li className="mb-[30px] last:mb-0 font-text text-[14px] leading-[160%]">
      <p>
        {index + 1}. {care.title}
      </p>
      <p>{care.description}</p>
    </li>
  );
}
