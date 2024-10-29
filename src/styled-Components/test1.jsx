import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem;
  text-align: center;
`;

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  list-style: none;
  display: flex;
`;

const UL = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const List = styled.ul`
  padding: ${({ theme }) => theme.spacing.padding};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverText};
    background-color: ${({ theme }) => theme.colors.hoverBackground};
  }
`;

export { Nav, List, Wrapper, UL };
