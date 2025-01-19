import ShadeCard from "../tools/ShadeCard";
import styled from 'styled-components'
import breakpoints from "../GlobalSetting/Dimension";
const ShadCardSection = styled.section
`
display:flex;
justify-content:center;
align-items:center;
margin-top:-70px;
padding-bottom:100px;
@media ${breakpoints.smallMobile}{
justify-content:space-around;
padding:0;
margin:0;
}
`

export const ShadeCardSection = ()=>{
    return<ShadCardSection>
    <ShadeCard $cardImg={'https://bit.ly/2R5tqwD'} $word={`本日精選`} />
    <ShadeCard $cardImg={'https://bit.ly/2Dwoxd7'} $word={`人氣推薦`} />
    <ShadeCard $cardImg={'https://bit.ly/2OUteif'} $word={`新品上市`} />
    
    </ShadCardSection>

}
