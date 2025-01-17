import styled from 'styled-components';
import { facebook, line, logo } from '../../tools/SvgIcon';
import Tag from '../../tools/Tag';
import breakpoints from '../../GlobalSetting/Dimension';
const FooterStyle = styled.div`
  padding: 30px 100px;
  background-color: var(--second-green);
  display: flex;
  align-items: flex-start; /* 左对齐内容 */
  justify-content: space-between;
  height: 100%;
`;

const ImgStyle = styled.img`
  width: ${(props) => props.width || "32px"};
  height: ${(props) => props.height || "32px"};
  margin-bottom: ${(props) => props.$paddingBottom || "0"}; /* 用 margin 替代 padding */
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; /* 增加垂直间距 */
`;

const Claim = styled.div`display: flex; flex-direction: column;justify-content: space-between;
  height: 100%; /* 确保容器有高度以拉开内容 */
  @media ${breakpoints.smallMobile}{
    display: none;
  }
  `


const SocialIcons = styled.div`
  display: flex;
  gap: 10px; /* 增加图标之间的间距 */
  padding-top: 10px; /* 增加与其他内容的间距 */
`;

const Footer = () => {
    return (
      <FooterStyle>
        <Contact>
          {/* Logo 图片 */}
          <ImgStyle
            width="171px"
            height="26.6px"
            $paddingBottom="100px" // 动态调整间距
            src={logo}
            alt="Logo Icon"
          />
          {/* 联系方式 */}
          <Contact>
            <div>
            <p>07-1234-5678</p>
            <p>sweetaste@email.com</p>
            <p>800 高雄市新興區幸福路 520 號</p>
            </div>
          </Contact>
          {/* 社交图标 */}
          <SocialIcons>
            <ImgStyle src={facebook} alt="Facebook Icon" />
            <ImgStyle src={line} alt="Line Icon" />
          </SocialIcons>
        </Contact>
        <Claim>
            <Tag/>
            <p style={{textAlign:'right', paddingTop:'50px', color:'var(--main-green)'}}>© 2018 Sweetaste* All Rights Reserved</p>
        </Claim>
      </FooterStyle>
    );
  };
  
  

export default Footer;
