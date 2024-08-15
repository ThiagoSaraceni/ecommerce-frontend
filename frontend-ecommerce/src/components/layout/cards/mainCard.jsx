import styled from "styled-components";

const CardContainer = styled.div`
  width: 300px;
  border-radius: 8px;
  overflow: hidden;
`;

const CardContent = styled.div`
  font-family: "Saira", sans-serif;
  background-color: #ffff;
  padding: 12px;
  h6 {
    font-size: 24px;
    font-weight: 300;
    color: #41414d;
  }

  hr {
    color: #dce2e5;
  }

  div {
    height: 1px;
    border-bottom: 2px solid #dce2e5;
  }

  strong {
    font-size: 21px;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
`;

export const Card = () => {
  const imgUrl =
    "https://images.tcdn.com.br/img/img_prod/460977/caneca_sao_paulo_fotebol_clube_tricolor_logo_ev_87707_1_1c91a5552fb2eec5106b763949520dda.jpeg";
  return (
    <>
      <CardContainer>
        <CardImg src={imgUrl} alt="My Image" />
        <CardContent>
          <h6>Caneca São Paulo FC</h6>
          <div></div>
          <strong>R$ 40,00</strong>
        </CardContent>
      </CardContainer>
    </>
  );
};
