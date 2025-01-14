import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const UlStyle = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LinkStyle = styled(NavLink).attrs(() => ({
    exact: undefined, // 確保不傳遞 exact
}))`
    padding: 10px 20px;
    text-decoration: none;
  `;

const Links = () => {
    return (

        <UlStyle>
        <LinkStyle to="/" exact>
            Home
        </LinkStyle>
            <LinkStyle to="/test" exact>
                Test
            </LinkStyle>
        </UlStyle>
    );
}

export { Links };