import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0 5px;
  width: 45px;
  height: 25px;
  border: 1px solid #e1e5e9;
  border-radius: 12px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ toggled }) => (toggled ? '#B58934' : '#5F7181')};
  transform: ${({ toggled }) => (toggled ? "translateX(23px)" : "translateX(0px)")};
  transition: all 0.2s ease-in-out;
  position: absolute;
`;