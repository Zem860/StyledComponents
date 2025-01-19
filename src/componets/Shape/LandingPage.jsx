import styled from "styled-components";
import breakpoints from "../../GlobalSetting/Dimension";
const LandingPageStyle = styled.main
`
padding:0 42px;
@media ${breakpoints.smallMobile}{
padding:0;
}
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const LandingPage = ({children}) => {
    return ( 
    <LandingPageStyle>
        <Wrapper>
        {children}
        </Wrapper>
    </LandingPageStyle> );
}
 
