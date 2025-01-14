import styled from "styled-components";
const HeaderStyle = styled.header
`
display:flex;
width:100%;
justify-content:center;
`
const TestHeader = ({children}) => {
    return ( <HeaderStyle>{children}</HeaderStyle> );
}
 
export default TestHeader;