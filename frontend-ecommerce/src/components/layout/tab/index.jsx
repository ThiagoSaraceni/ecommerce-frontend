import { act, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changeOption } from "../../../redux/ecommerceSlice";

const Li = styled.li`
  margin-right: 40px;
  font-size: 24px;
  font-family: "Saira", sans-serif;
  font-weight: ${(props) => (props?.active ? 500 : 300)};
  color: ${(props) => (props?.active ? "#41414D" : "#737380")};
  border-bottom: ${(props) => (props.active ? "4px solid #FFA585" : null)};
  cursor: pointer;
`;

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const Tabs = () => {
  const dispatch = useDispatch();
  const { params } = useSelector((state) => state.ecommerce);
  const active = params?.option;

  const handleChangeOption = (param) => {
    dispatch(changeOption(param));
  };

  return (
    <>
      <Ul>
        <Li active={active === 1} onClick={() => handleChangeOption(1)}>
          Todos os produtos
        </Li>
        <Li active={active === 2} onClick={() => handleChangeOption(2)}>
          Camisetas
        </Li>
        <Li active={active === 3} onClick={() => handleChangeOption(3)}>
          Canecas
        </Li>
      </Ul>
    </>
  );
};
