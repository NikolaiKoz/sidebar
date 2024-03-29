import { useState } from "react";
import { SideBarMenuItem, SideBarMenuCard } from "../types/types";
import { classNames } from "../util/class";
import { VscMenu } from "react-icons/vsc";

import SideBarMenuCardView from "./SideBarMenuCardView";
import SideBarMenuItemView from "./SideBarMenuItemView";

import "./SideBarMenu.scss"

interface SideBarMenuProps{
    items: SideBarMenuItem[];
    card: SideBarMenuCard;
}

export function SideBarMenu( {items, card}: SideBarMenuProps){

    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        setIsOpen(!isOpen);
    }


    return <div className={classNames('SideBarMenu', isOpen ? 'expanded' : 'collapsed')}>
        <div className="menuButton">
            <button className="hamburgerIcon" onClick={handleClick}>
                <VscMenu />
            </button>
        </div>
        <SideBarMenuCardView card={card} isOpen={isOpen} />
        {items.map((item) => (
            <SideBarMenuItemView key={item.id} item={item} isOpen={isOpen} />
        ))
        }
    </div>;
}