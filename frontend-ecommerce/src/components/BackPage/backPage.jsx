import styled from "styled-components";
import { BackPageIcon } from "./backPageIcon";
import { useNavigate } from "react-router-dom";

const DivBackPage = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 22px;

  svg {
    height: 28px;
    width: 28px;
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
  const navigate = useNavigate();

  return (
    <DivBackPage onClick={() => navigate(`/home`)}>
      <BackPageIcon />
      <strong>Voltar</strong>
    </DivBackPage>
  );
};
