import styled,{css} from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 96px 0 128px;
  background-color: transparent;

  @media (max-width: 767px) {
    padding: 48px 16px 80px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1080px;

  @media (max-width: 1279px) {
    max-width: 944px;
  }

  @media (max-width: 1023px) {
    max-width: 688px;
  }

  @media (max-width: 767px) {
    max-width: 480px;
  }
`;

const HomepageTitle = styled.h1`
  font-size: 5rem;
  font-weight:bold;
`

const Title = styled.h2`

  font-size: 17px;
  font-weight: 600;


  ${({ $type }) => $type === "title" && css`
    color: black;
    text-shadow: 1px 1px 2px cyan;
  `}

  ${({ $type }) => $type === "subTitle" && css`
    border: 1px solid #404756;
    color: #F6F7F9;
    background-color: #23272F;
  `}
`;



export {Wrapper, Container, Title,HomepageTitle}