import styled from "styled-components";

const LandingPageStyle = styled.main
`
padding: 0 42 px
`

export const LandingPage = ({children}) => {
    return ( <LandingPageStyle>{children}</LandingPageStyle> );
}
 
