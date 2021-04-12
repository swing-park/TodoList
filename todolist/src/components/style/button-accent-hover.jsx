import styled from 'styled-components';

const ButtonAccentHover = styled.div`
  /* Auto Layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;

  width: 134px;
  height: 40px;

  /* Light Blue */

  background: #00529b;
  border-radius: 6px;
`;

const ButtonAccentHoverText = styled.div`
  /* title */
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-align: center;

  color: #ffffff;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
`;

export { ButtonAccentHover, ButtonAccentHoverText };