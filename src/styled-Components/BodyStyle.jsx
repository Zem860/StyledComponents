import styled, { css, keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 96px 0 128px;
  background-color: ${({ theme }) => theme.colors.third};

  @media (max-width: 767px) {
    padding: 48px 16px 80px;
  }
`;
const Container = styled.div`
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
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;

  ${({ $type }) =>
    $type === 'title' &&
    css`
      color: black;
      text-shadow: 1px 1px 2px cyan;
      margin-bottom: 2rem;
    `}

  ${({ $type }) =>
    $type === 'subTitle' &&
    css`
      margin-top: 2rem;
      border: 1px solid #404756;
      color: #f6f7f9;
      background-color: #23272f;
    `}
`;

// 定義 RGB 變化動畫
const rgbAnimation = keyframes`
  0% {
    color: black;
  }
  10% {
    color:rgb(255,0,0);
  }
  20% {
    color:rgb(255, 191, 95);
  }
  30%{
    color:rgb(238, 255, 0);
  }
  40% {
    color:  rgb(0,255,0);
  }
  50% {
    color: cyan;
  }
  60%{
    color:rgb(0,0,255);
  }
  80% {
    color:rgb(99, 0, 165);
  }
  100%{
    color:rgb(0, 0, 0);
  }
`;

const StarText = styled.pre`
  font-size: 1.5rem;
  animation: ${rgbAnimation} 10s infinite linear;
`;

export { Wrapper, Container, Title, HomepageTitle, StarText };
