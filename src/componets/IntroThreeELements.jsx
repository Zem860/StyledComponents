import styled from "styled-components";
import  Poem  from '../tools/Poem';
import Poem1 from '../tools/Poem1'
import Tag from '../tools/Tag';

const IntroThreeStyle = styled.div
    `
display:flex;
justify-content:space-between;


`

const IntroImg = styled.img
`
 width: 100%;
  max-width: 460px; 
  max-height: 460px; 
  object-fit: cover;
    aspect-ratio: 1 / 1; /* 保持圖片為正方形 */

`


const IntroThree =()=>{
    return (<IntroThreeStyle>
                <IntroImg src="https://bit.ly/2xPn7Eq" alt="" />
                <Poem><Poem1/></Poem>
                <Tag>為甚麼｜<br/><span style={{marginTop:"20px"}}>選擇了做甜點。</span></Tag>
            </IntroThreeStyle>)
}

export default IntroThree