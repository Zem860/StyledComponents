import styled from 'styled-components';
import Tag from '../tools/Tag';
const IntroStyle = styled.div`
  position: relative;
  padding: 64px; /* 保持內部內容對齊 */

  &::before {
    content: ""; /* 必須要有 */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%; 
    margin: 0 -64px;
    background-color: var(--second-green);
    z-index: -1; 
  }
`;

const IntroThree = styled.div
    `
display:flex;

`

const IntroImg = styled.img
`
width:460px;
height:460px;
`

const ContextBox = styled.div
    
`
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
`

const IntroSection = () => {
    return <IntroStyle>
        <IntroThree>
            <IntroImg src="https://bit.ly/2xPn7Eq" alt="" />
            <ContextBox><p>青山依舊在，幾度夕陽紅。慣看秋月春風。</p><p>一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</p><p>是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</p></ContextBox>
            <Tag>為甚麼｜<br/>選擇了做甜點。</Tag>
        </IntroThree>

    </IntroStyle>;
};

export default IntroSection;
