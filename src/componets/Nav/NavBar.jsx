import styled from "styled-components";
import logo from "../../assets/logo-all-dark.png";
import breakpoints from "../../GlobalSetting/Dimension";
import { HamburgerMenu, ShoppingCart } from "./NavIcons";
import { useState } from "react";

export const Links = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--main-green);
  @media ${breakpoints.smallMobile} {
    width: 100%;
    border: 1px solid var(--main-green);
    cursor: pointer;
    &:hover {
      background-color: var(--main-green);
      color: white;
    }
  }
`;

const navstyle = `
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  padding: 0 42px;
`;

const NormalNavBarStyle = styled.nav`
  ${navstyle}
  @media ${breakpoints.smallMobile} {
    display: none;
  }
`;

const SmallMobileStyle = styled.nav`
  display: none;
  @media ${breakpoints.smallMobile} {
    display: block;
    ${navstyle}
    position: relative;
  }
`;

const LinkOpen = styled.div`
  display: none; /* 动态控制 display */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  background-color: #fff;

  @media ${breakpoints.smallMobile} {
    display: ${({ $isopen }) => ($isopen==="true" ? "flex" : "none")};
  }
`;

export const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <>
      <NormalNavBarStyle>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div style={{ display: "flex", padding: "10px 15px", gap: "10px" }}>
          <Links>首頁</Links>
          <Links>甜點</Links>
          <Links>登入</Links>
        </div>
      </NormalNavBarStyle>
      <SmallMobileStyle>
        <HamburgerMenu onClick={toggleMenu} />
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ShoppingCart />
      </SmallMobileStyle>
      <LinkOpen $isopen={openMenu.toString()}>
        <Links>首頁</Links>
        <Links>甜點</Links>
        <Links>登入</Links>
      </LinkOpen>
    </>
  );
};
