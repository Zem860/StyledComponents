import styled from "styled-components";

const BannerStyle = styled.div`
  width: 100%;
  height: 70vh;
  background-image: url(${({ $imgUrl }) => $imgUrl}); /* 確保正確接收 imgUrl */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Banner = ({ $imgUrl }) => {
  return <BannerStyle $imgUrl={$imgUrl} />;
};

export default Banner;
