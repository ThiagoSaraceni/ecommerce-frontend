import { act, useState } from "react";
import styled from "styled-components";

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
  const [active, setActive] = useState("1");

  return (
    <>
      <Ul>
        <Li active={active === "1"} onClick={() => setActive("1")}>
          Todos os produtos
        </Li>
        <Li active={active === "2"} onClick={() => setActive("2")}>
          Camisetas
        </Li>
        <Li active={active === "3"} onClick={() => setActive("3")}>
          Canecas
        </Li>
      </Ul>
    </>
  );
};
