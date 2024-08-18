import styled from "styled-components";

import { ArrowDownIcon } from "./ArrowDownIcon";
import { useState } from "react";

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
  max-height: ${(props) => (props.isOpen ? "200px" : "0px")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  overflow: hidden;
  background-color: #ffff;
  padding: ${(props) => (props.isOpen ? "16px" : "0 16px")};
  border-radius: 4px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
  transition: max-height 0.7s linear, opacity 0.7s linear, padding 0.7s linear;

  li {
    list-style-type: none;
    font-family: "Saira", sans-serif;
    color: #737380;
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }

  width: 100%;
`;

export const FilterBy = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <DColumn>
        <Dflex onClick={() => setIsOpen(!isOpen)}>
          <TextFilter>Organizar por</TextFilter>
          <ArrowDownIcon />
        </Dflex>
        <Card isOpen={isOpen}>
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
