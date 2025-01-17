import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";

export const ShoppingCart = styled(FaShoppingCart)
`
cursor:pointer;

`

export const HamburgerMenu = styled(GiHamburgerMenu)`
  cursor: pointer;
  &:hover {
    color: var(--main-green); 
  }
`;
