import {styled} from 'styled-components'
import logo from '../assets/logo-all-dark.png';


export const Links = styled.p
`

  display: flex;
  align-items: center; /* 垂直置中 */
  justify-content: center; /* 水平置中 */
  color: #3F5D45;
  margin: 0; /* 移除 p 標籤的默認外邊距 */

`
const NavBarStyle = styled.nav
`
display:flex;
justify-content:space-between;
align-items:center;
position:fixed;
top:0;
left:0;
width:100%;
background-color:#FFFFFF;
padding:0 20px;
`
export const NavBar = () => {
    return ( <NavBarStyle>
        <div><img src={logo} alt="logo" /></div>
        <div style={{display:'flex', padding:'10px 15px', gap:'10px'}}>
            <Links>首頁</Links>
            <Links>甜點</Links>
            <Links>登入</Links>
        </div>
    </NavBarStyle> );
}
 

