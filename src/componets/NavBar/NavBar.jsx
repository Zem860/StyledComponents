import styled from "styled-components";
const NavBarStyle = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: orange;
  display: flex;
  align-items: center; 
  justify-content: flex-end;
`;
const NavBar = ({children}) => {
    return ( <NavBarStyle >{children}</NavBarStyle> );
}
 
export {NavBar};
