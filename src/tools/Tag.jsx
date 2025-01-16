import styled from "styled-components";

const TagStyle = styled.p`
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    color:var(--main-green) ;
    font-size: 24px;
`

const Tag = ()=>{
    return (<><TagStyle>今天是個｜<br/>吃甜點的好日子。</TagStyle></>)
}
export default Tag