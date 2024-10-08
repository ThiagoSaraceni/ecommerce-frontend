import styled from "styled-components";
import { Tabs } from "../components/layout/tab/index.jsx";
import { FilterBy } from "../components/layout/filter/index.jsx";
import { Card } from "../components/layout/cards/mainCard.jsx";

const BgColor = styled.div`
  background-color: #f0f0f5;
  height: 100%;
  padding: 20px 160px 20px 160px;
`;

const DSpaceBetween = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const Home = () => (
  <BgColor>
    <DSpaceBetween>
      <Tabs />
      <FilterBy />
    </DSpaceBetween>
    <Card />
  </BgColor>
);
