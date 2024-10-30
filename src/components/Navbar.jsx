import { Nav, List, UL } from '../styled-Components/test1';

const NavBar = () => {
  return (
    <>
      <Nav>
        <UL>
          <List>Home Page</List>
          <List>About Programming Language</List>
          <List>Latest Blog</List>
        </UL>
      </Nav>
    </>
  );
};

export default NavBar;
