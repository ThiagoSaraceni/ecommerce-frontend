import styled from "styled-components";

import { ArrowDownIcon } from "./ArrowDownIcon";

const TextFilter = styled.h6`
  font-family: "Saira", sans-serif;
  font-size: 18px;
  color: #737380;
  font-weight: 400;
  margin-right: 20px;
`;

const Dflex = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  background-color: #ffff;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 12px 0px rgba(000000);
  li {
    list-style-type: none;
    font-family: "Saira", sans-serif;
    color: #737380;
    cursor: pointer;
  }
  li + li {
    margin-top: 4px;
  }
`;

export const FilterBy = () => {
  return (
    <>
      <DColumn>
        <Dflex>
          <TextFilter>Organizar por</TextFilter>
          <ArrowDownIcon />
        </Dflex>
        <Card>
          <ul>
            <li>Novidades</li>
            <li>Preço: Maior - menor</li>
            <li>Preço: Menor - maior</li>
          </ul>
        </Card>
      </DColumn>
    </>
  );
};
