import styled from "styled-components";

const LandingPageStyle = styled.main
`
padding:0 42px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #23272F;
`;

export const LandingPage = ({children}) => {
    return ( 
    <LandingPageStyle>
        <Wrapper>
        {children}
        </Wrapper>
    </LandingPageStyle> );
}
 
