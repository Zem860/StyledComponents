import styled from "styled-components";
export const LineBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px; /* 控制子元素之间的间距 */
`;

export const Input = styled.input`
  height: 30px; /* 明确设置高度 */
  padding: 5px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  height: 30px; /* 保持与输入框一致 */
  padding: 5px 10px;
  box-sizing: border-box;
`;

export const Select = styled.select`
  height: 30px; /* 保持与输入框一致 */
  padding: 5px 10px;
  box-sizing: border-box;
`;
