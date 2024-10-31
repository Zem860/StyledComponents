import { Nav, List, UL } from '../styled-Components/HeaderStyle';

const NavBar = () => {
  return (
    <>
      <Nav>
        <UL>
          <List>HomePage</List>
          <List>About Programming Language</List>
          <List>Books</List>
        </UL>
      </Nav>
    </>
  );
};

export default NavBar;
