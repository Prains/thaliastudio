import { NaturalCenter } from "../NaturalCenter/NaturalCenter";
import { NaturalLink } from "../NaturalLink/NaturalLink";
import { useState } from "react";
import { NaturalJute } from "./NaturalJute/NaturalJute";
import { NaturalRafia } from "./NaturalRafia/NaturalRafia";

const NaturalContentWithImage = () => {
    const [isLinkJute, setIsLinkJute] = useState(false);
    const [isLinkRafia, setIsLinkRafia] = useState(false);

    const handleClickJute = () => {
        setIsLinkJute((isLinkJute) => !isLinkJute)
    }
    const handleClickRafia = () => {
        setIsLinkRafia((isLinkRafia) => !isLinkRafia)
    }

    return (
        <article className="grid grid-row-3 justify-items-center gap-x-[200px] mx-auto lg:grid-cols-3 lg:w-[69%]">
            <div className="lg:mr-[60px]">
                <NaturalJute isLinkJute={isLinkJute}/>
                <NaturalLink onClick={handleClickJute} changeTextLink={isLinkJute}/>
            </div>
            <NaturalCenter/>
            <div className="lg:ml-[60px]">
                <NaturalRafia isLinkRafia={isLinkRafia}/>
                <NaturalLink onClick={handleClickRafia} changeTextLink={isLinkRafia}/>
            </div>
        </article>
    )
}
export {NaturalContentWithImage}