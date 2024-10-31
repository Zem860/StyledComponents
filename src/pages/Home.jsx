import { Title, Wrapper, HomepageTitle } from '../styled-Components/BodyStyle';
import { Container } from '../styled-Components/BodyStyle';
import { Starthing } from '../data/star';
import {data} from '../data/data'
const Home = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <HomepageTitle>{data.HomepageTitle}</HomepageTitle>
          <Title $type="title">{data.subTitle}</Title>
          <Starthing />
        </Container>
      </Wrapper>
    </>
  );
};

export default Home;
