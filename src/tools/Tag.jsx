import styled from "styled-components";
import breakpoints from "../GlobalSetting/Dimension";


const TagStyle = styled.p`
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    color:var(--main-green) ;
    font-size: 24px;

    @media ${breakpoints.smallMobile}{
        -webkit-writing-mode:horizontal-tb;
        writing-mode: horizontal-tb;
    }
`

const Tag = ()=>{
    return (<><TagStyle>今天是個｜<br/>吃甜點的好日子。</TagStyle></>)
}
export default Tag