import React from "react";

import {
  SubMenuContainer,
  MenuInnerSection,
  SubMenuListWrapper,
  SubMenuImageWrapper,
} from "./subMenuStyle";
import { Link } from "gatsby";
// import CloseIcon from "../../images/header/close.png";

export default function index({ top, menu, onClose }) {
  const { img, menus } = menu;

  const closeMenu = () => {
    onClose();
  };
  const topVal = img ? "85px" : top;
  return (
    <SubMenuContainer top={topVal}>
      {img && menus.length > 0 ? (
        <MenuInnerSection>
          {menus.map((menuObj) => (
            <SubMenuListWrapper key={menuObj.title}>
              <h6
                onKeyDown={() => console.log("menuObj", menuObj)}
                role="presentation"
                onClick={() => console.log("menuObj", menuObj)}
              >
                <Link to={menuObj.link}>{menuObj.title}</Link>
              </h6>
              <ul>
                {menuObj.menus.map((innerSubMenu) => (
                  <li
                    key={innerSubMenu.title}
                    onClick={closeMenu}
                    onKeyDown={closeMenu}
                    role="presentation"
                  >
                    <Link to={innerSubMenu.link}>{innerSubMenu.title}</Link>
                  </li>
                ))}
              </ul>
            </SubMenuListWrapper>
          ))}
          <SubMenuImageWrapper>
            <img alt={`sub menu - ${menus[0].title}`} src={img} />
          </SubMenuImageWrapper>
          {/* <div role="presentation" onKeyDown={closeMenu} onClick={closeMenu}>
            <img alt="modal close icon" className="cursor" src={CloseIcon} />
          </div> */}
        </MenuInnerSection>
      ) : (
        ""
      )}
    </SubMenuContainer>
  );
}
