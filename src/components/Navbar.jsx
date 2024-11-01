import { Nav, List, UL } from '../styled-Components/HeaderStyle';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <>
      <Nav>
        <UL>
          <Link to="/">
            <List>Homepage</List>
          </Link>
          <List>About Programming Language</List>
          <Link to="/books">
            <List>Books</List>
          </Link>
        </UL>
      </Nav>
    </>
  );
};

export default NavBar;
