import { Title, Wrapper, HomepageTitle, StarText } from '../styled-Components/BodyStyle';
import { Container } from '../styled-Components/BodyStyle';
import { runLoop } from '../data/star';
import {data} from '../data/data'
const Home = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <HomepageTitle>{data.homePageTitle}</HomepageTitle>
          <Title $type="title">{data.subTitle}</Title>
          <StarText>{runLoop()}</StarText>
          <Title $type="subTitle">{data.subTitle2}</Title>
        </Container>
      </Wrapper>
    </>
  );
};

export default Home;
