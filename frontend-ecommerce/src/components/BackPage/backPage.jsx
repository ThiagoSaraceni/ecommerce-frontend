import styled from "styled-components";
import { BackPageIcon } from "./backPageIcon";

const DivBackPage = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 22px;

  svg {
    height: 34px;
    width: 34px;
  }

  strong {
    margin-left: 15px;
    color: #617480;
    font-size: 20px;
    font-family: "Saira";
    font-weight: 500;
  }
`;

export const BackPage = () => {
  return (
    <DivBackPage>
      <BackPageIcon />
      <strong>Voltar</strong>
    </DivBackPage>
  );
};
