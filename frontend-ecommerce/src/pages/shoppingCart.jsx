import styled from "styled-components";
import { BackPage } from "../components/BackPage/backPage";
import { CardShoppingCart } from "../components/layout/CardCartShopping";
import { TrashIcon } from "../components/Trash/trashIcon";

const BgColor = styled.div`
  background-color: #f0f0f5;
  min-height: 100vh;
  padding: 20px 160px 20px 160px;
`;

const TextInfo = styled.div`
  margin-bottom: 23px;
  h4 {
    font-size: 24px;
    font-weight: 500;
    font-family: "Saira";
    color: #41414d;
  }

  span {
    color: #41414d;
    font-size: 16px;
    font-weight: 400;
    font-family: "Saira";
  }

  strong {
    font-family: "Saira";
  }
`;

const CardCart = styled.div`
  height: 200px;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  text-overflow: ellipsis;

  img {
    width: 30%;
    height: 211px;
    object-fit: cover;
  }
`;

const TextCardCart = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  padding-left: 31px;
  padding-right: 21px;
  background-color: white;
  overflow: hidden;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  text-overflow: ellipsis;

  h4 {
    font-size: 20px;
    color: #41414d;
    font-family: "Saira";
    font-weight: 400;
    padding-bottom: 12px;
  }
  p {
    color: #41414d;
    font-family: "Saira";
    font-size: 12px;
  }
`;

const Container = styled.div`
  display: flex;

  .carrinho {
    width: 80%;
  }
`;

const DFlexBetween = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    font-size: 20px;
    color: #41414d;
    font-family: "Saira";
    font-weight: 400;
    padding-bottom: 12px;
  }

  svg {
    cursor: pointer;
  }
`;

const DFlexEnd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-bottom: 12px;

  font-family: "Saira";

  select {
    border-color: #a8a8b3;
    border-radius: 8px;
    padding: 8px 8px 8px 12px;
    font-size: 16px;
    color: #737380;
    outline: none;
  }

  strong {
    font-size: 16px;
    color: #09090a;
  }
`;

export const ShoppingCartPage = () => {
  return (
    <>
      <BgColor>
        <Container>
          <div className="carrinho">
            <BackPage />
            <TextInfo>
              <h4>SEU CARRINHO</h4>
              <span>
                Total(3 produtos) <strong>R$ 161,00</strong>
              </span>
            </TextInfo>
            <CardCart>
              <img src="https://www.leveshoes.com.br/wp-content/uploads/2022/07/IMG-20220727-WA0029.jpg" />
              <TextCardCart>
                <DFlexBetween>
                  <h4>Caneca de cerâmica rústica</h4>
                  <TrashIcon />
                </DFlexBetween>
                <p>
                  Aqui vem um texto descritivo do produto, esta caixa de texto
                  servirá apenas de exemplo para que simule algum texto que
                  venha a ser inserido nesse campo, descrevendo tal produto.
                </p>
                <DFlexEnd>
                  <select name="select">
                    <option value="valor1">1</option>
                    <option value="valor2">2</option>
                    <option value="valor3">3</option>
                    <option value="valor3">4</option>
                    <option value="valor3">5</option>
                  </select>

                  <strong>R$ 41,00</strong>
                </DFlexEnd>
              </TextCardCart>
            </CardCart>
          </div>
          <CardShoppingCart />
        </Container>
      </BgColor>
    </>
  );
};
