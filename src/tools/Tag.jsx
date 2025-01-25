import styled from "styled-components";
import breakpoints from "../GlobalSetting/Dimension";

const TagStyle = styled.p`
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    color: var(--main-green);
    font-size: 24px;
    margin-top: -25px;

    @media ${breakpoints.smallMobile} {
        -webkit-writing-mode: horizontal-tb;
        writing-mode: horizontal-tb;
        margin-top: -160px;
        margin-bottom: 40px;
        order: 1; 
    }

`;

const Tag = ({ children, order }) => {
    return <TagStyle order={order}>{children}</TagStyle>;
};

export default Tag;
