import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 160px 20px 160px;
  background-color: white;
  border-radius: 10px;
  height: 80px;
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: "Saira Stencil One", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5d5d6d;
  font-size: 40px;
`;

export const MainSearch = styled.input`
  height: 42px;
  width: 352px;
  border-radius: 8px;
  background-color: #f3f5f6;
  padding: 10px 16px;
  border: none;
  font-family: "Saira", sans-serif;
  font-weight: 450;
  outline: none;
`;

export const DivDFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ButtonLogin = styled.button`
  background-color: ${(props) => (props.userId ? "#115D8C" : "#0fa958")};
  color: #ffff;
  border-radius: 6px;
  height: 42px;
  width: 25%;
  border: none;
  font-family: "Saira";
  font-size: 16px;
  font-weight: 500;
  margin-left: 60px;
  cursor: pointer;
`;
