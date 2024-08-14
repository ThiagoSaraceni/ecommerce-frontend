import styled from "styled-components";

const Li = styled.li`
  margin-right: 40px;
  font-size: 24px;
  font-family: "Saira", sans-serif;
  font-weight: ${(props) => (props?.active ? 500 : 300)};
  color: ${(props) => (props?.active ? "#41414D" : "#737380")};
  border-bottom: ${(props) => (props.active ? "4px solid #FFA585" : null)};
`;

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const Tabs = () => {
  return (
    <>
      <Ul>
        <Li active={true}>Todos os produtos</Li>
        <Li>Camisetas</Li>
        <Li>Canecas</Li>
      </Ul>
    </>
  );
};
