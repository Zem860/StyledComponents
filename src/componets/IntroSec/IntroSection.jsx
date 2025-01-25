import styled from 'styled-components'
import breakpoints from '../../GlobalSetting/Dimension'
import IntroContents from './IntroContents'


 const Style = styled.section

`
    margin: 0 -42px;
    background-color:#EAF0ED;
    margin-bottom: 70px;
    @media ${breakpoints.smallMobile}{
        margin: 0;
        margin-bottom: 180px;
    }
`

const IntroSection = ({configure})=>{
    const order = Number(configure) === 1? [1,2,3]:[3,2,1];
    const imgUrl = Number(configure) === 1? 'https://bit.ly/2xPn7Eq':'https://bit.ly/2zzAQS4';
    const spanSentence = Number(configure) === 1? '選擇了做甜點':'一定要吃甜點';

    return <Style>
            <IntroContents imgUrl={imgUrl} order={order} spanSentence={spanSentence}/>
            </Style>

}

export default IntroSection