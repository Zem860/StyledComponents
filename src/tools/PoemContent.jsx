import styled from "styled-components";
import breakpoints from "../GlobalSetting/Dimension";

const PoemStyle = styled.div`
  order: ${(props) => props.order || 2}; /* 動態設置順序，默認為 1 */
  max-width: 280px;
  max-height: 280px;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
  margin-top: 70px;

  & > * {
    margin: 0 20px; /* 調整子元素間距 */
  }

  @media ${breakpoints.smallMobile} {
    max-width: 100%;
    max-height: 100%;
    -webkit-writing-mode: horizontal-tb; /* 小螢幕下橫向排列 */
    writing-mode: horizontal-tb;
    order:3;
    margin-top: 0;
  }
`;

const Poem1 = ({ order }) => {
  return (
    <PoemStyle order={order}>
      <p>青山依舊在，幾度夕陽紅。慣看秋月春風。</p>
      <p>一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</p>
      <p>是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</p>
    </PoemStyle>
  );
};

export default Poem1;
