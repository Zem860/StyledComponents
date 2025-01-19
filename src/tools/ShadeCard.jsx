import styled from "styled-components"

import breakpoints from "../GlobalSetting/Dimension";


const CardStyle = styled.div
    `
position:relative;
width:260px;
height:256px;
background-image: url(${({ $cardImg }) => $cardImg});
background-position:center;
background-size:cover;
background-repeat:no-repeat;
z-index:0;
display:flex;
justify-content:center;
align-items:center;
writing-mode:vertical-rl;


&::before{
  content:"";
  position: absolute;
  top:0;
  left:0;
  background-color:var(--main-green);
  opacity:0.6;
  width: 100%;
  height: 100%;
  z-index: 1;

}
  &:hover{
    cursor:pointer;
    &::before{
  
  background-color:var(--shade-yellow);
    }
  span {
      color: var(--main-green); /* 鼠標懸停時文字變為黑色 */
    }
  }

    span {
    position: relative; /* 確保文字位於色卡之上 */
    z-index: 2; /* 文字層級最高 */
    color:white
  };

  @media ${breakpoints.smallMobile}{
    flex: 1; /* 子元素平均分配空間 */
    height:180px;

  
  }
`;

const ShadeCard = ({ $cardImg, $word }) => {
    return <CardStyle $cardImg={$cardImg} $word={$word}>
        <span>{$word}</span>
    </CardStyle>
}

export default ShadeCard;