import styled from'styled-components'
const FormStyle = styled.form`
 width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: gray;
  box-sizing: border-box; /* 確保 padding 和邊框計算在寬度內 */
`

const TestForm = ({children}) => {
    return ( <FormStyle>{children}</FormStyle> );
}
 
export default TestForm;