import styled from 'styled-components'

const LandingPageStyle = styled.div
`
  padding: 30px 20px;
  width: 100%;  /* 確保寬度不會超出屏幕 */
  box-sizing: border-box; /* 包括 padding 在內的寬度計算 */
`

export const LandingPage = ({children}) => {
    return ( <LandingPageStyle>{children}</LandingPageStyle> );
}
 
export default LandingPage;