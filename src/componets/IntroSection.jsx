import styled from 'styled-components';
import IntroThree from './IntroThreeELements';
const IntroStyle = styled.div`
  position: relative;
  margin-bottom: 30px;
  &::before {
    content: ""; /* 必須要有 */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 90%; 
    margin: 20px -64px;
    background-color: var(--second-green);
    z-index: -1; 
  }
`;

const IntroSection = () => {
    return (<>
    <IntroStyle>
    <IntroThree/>
    </IntroStyle>
    <IntroStyle>
    <IntroThree/>
    </IntroStyle>
    
    </>)
    
    
     
    
   
};

export default IntroSection;
