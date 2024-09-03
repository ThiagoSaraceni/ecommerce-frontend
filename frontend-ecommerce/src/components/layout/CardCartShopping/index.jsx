import styled from "styled-components";

const Card = styled.div`
  background-color: #ffff;
  width: 30%;
  margin-left: 20px;
  padding: 0px 24px 0px 24px;

  h4 {
    color: #41414d;
    font-size: 20px;
    font-weight: 600;
    font-family: "Saira";
    padding: 16px 0px 29px 0px;
  }

  .dflex-space-between {
    display: flex;
    justify-content: space-between;
  }

  div {
    padding-bottom: 12px;
    span {
      font-size: 16px;
      font-family: "Saira";
      color: #41414d;
    }
  }

  .barra {
    height: 1px;
    border-bottom: 2px solid #dce2e5;
  }

  strong {
    padding-top: 10px;
    font-size: 16px;
    font-family: "Saira";
    color: #41414d;
    padding-bottom: 30px;
  }

  button {
    background-color: #51b853;
    color: #ffff;
    border: none;
    border-radius: 4px;
    padding: 10px;
    width: 100%;
    font-family: "Saira";
    font-size: 16px;
    cursor: pointer;
  }
`;

const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 280px;
  padding-bottom: 12px;

  ul {
    list-style-type: none;
  }

  li {
    color: #737380;
    font-size: 14px;
    font-family: "Saira";
    cursor: pointer;
    text-decoration: underline;
    margin-top: 12px;
    width: fit-content;
  }
`;

export const CardShoppingCart = () => {
  return (
    <Card>
      <h4>RESUMO DO PEDIDO</h4>
      <div className="dflex-space-between">
        <span>Subtotal de produtos</span>
        <span>R$ 161,00</span>
      </div>
      <div className="dflex-space-between">
        <span>Entrega</span>
        <span>R$ 40,00</span>
      </div>
      <div className="barra"></div>
      <div className="dflex-space-between">
        <strong>Total</strong>
        <strong>R$ 201,00</strong>
      </div>
      <button>FINALIZAR COMPRA</button>
      <InfoCard>
        <ul>
          <li>AJUDA</li>
          <li>REMBOLSOS</li>
          <li>ENTREGAS E FRETES</li>
          <li>TROCAR E DEVOLUÇÕES</li>
        </ul>
      </InfoCard>
    </Card>
  );
};
