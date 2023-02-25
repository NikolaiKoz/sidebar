import { useState } from "react";
import { SideBarMenuItem, SideBarMenuCard } from "../types/types";
import { classNames } from "../util/class";
import { VscMenu } from "react-icons/vsc";

interface SideBarMenuProps{
    items: SideBarMenuItem[];
    card: SideBarMenuCard;
}

export function SideBarMenu( {items, card}: SideBarMenuProps){

    const [isOpen, setIsOpen] = useState<boolean>(true);
    return <div className={classNames('SideBarMenu', isOpen ? 'expanded' : 'collapsed')}>
        <div className="menuBotton">
            <button>
                <VscMenu />
            </button>
        </div>
    </div>;
}