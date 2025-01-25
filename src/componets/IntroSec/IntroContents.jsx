import styled from "styled-components";
import Poem from "../../tools/PoemContent";
import breakpoints from "../../GlobalSetting/Dimension";
import Tag from "../../tools/Tag";
const Sect = styled.div`
display:flex;
justify-content: space-between;
@media ${breakpoints.smallMobile}{
    flex-direction:column;
    justify-content: center;
    align-items: center;
}
`

const IntroImage = styled.img
`
order: ${(props) => props.order || 1}; /* 動態設置順序，默認為 1 */
width: 100%;
max-width:460px;
max-height:460px;
aspect-ratio:1/1;
margin: -25px 0;
  @media ${breakpoints.smallMobile} {
    order: 2; /* 小螢幕順序固定為第一個 */
    margin: 0;
  }
`

const IntroContents = ({order, imgUrl, spanSentence}) => {
    return (
        <>
        <Sect>
        <IntroImage order={order[0]} src={imgUrl}/>
        <Poem /> 
        <Tag order={order[2]}>為甚麼 &#8212;&#8212;<br/><span style={{marginTop:"25px"}}>{spanSentence}</span></Tag>
        </Sect>
        </>
    )

}

export default IntroContents;