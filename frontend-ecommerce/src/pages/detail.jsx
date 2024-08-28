import styled from "styled-components";
import { BackPage } from "../components/BackPage/backPage";
import {
  ShoppingBagIcon,
  ShoppingBagIconWhite,
} from "../components/ShoppingBag/ShopBagIcon";

const BgColor = styled.div`
  background-color: #f0f0f5;
  height: 100%;
  padding: 20px 160px 20px 160px;
`;

const ImgDetail = styled.img`
  height: auto;
  width: 45%;
  object-fit: cover;
  border-radius: 4px;
`;

const DisplayBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Dbetween = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45%;
`;

const InfoDetail = styled.div`
  span {
    font-size: 16px;
    color: #41414d;
    font-family: "Saira";
  }

  h4 {
    padding-top: 12px;
    font-size: 32px;
    color: #41414d;
    font-family: "Saira";
    font-weight: 300;
  }

  strong {
    padding-top: 4px;
    font-size: 20px;
    font-family: "Saira";
  }

  p {
    color: #41414d;
    font-size: 14px;
    font-family: "Saira";
    padding-top: 24px;
    padding-bottom: 58px;
  }

  .description {
    color: #737380;
  }

  h6 {
    font-size: 14px;
    color: #41414d;
    font-weight: 400;
    font-family: "Saira";
  }
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #115d8c;
  height: 44px;
  width: 100%;
  border: none;
  border-radius: 4px;
  color: #f5f5fa;
  font-size: 16px;
  font-family: "Saira";
  font-weight: 500;

  svg {
    margin-right: 12px;
  }
`;

export const Detail = () => {
  const imgTeste =
    "https://photos.enjoei.com.br/camiseta-anime-one-piece-monkey-d-luffy-ace-sabo-zoro-sanji-camisa-unissex-poliester-90832256/800x800/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8yMjM3NjIwMi83YTkxYzFjZDAzMGExNWNhZTFjNTUyYzAzNWZlYjRmMy5qcGc";

  return (
    <>
      <BgColor>
        <BackPage />
        <DisplayBetween>
          <ImgDetail src={imgTeste} />
          <Dbetween>
            <InfoDetail>
              <span>Caneca</span>
              <h4>Caneca de cerâmica rústica</h4>
              <strong>R$ 40.00</strong>
              <p>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </p>
              <strong className="description">DESCRIÇÃO</strong>
              <h6>
                Aqui vem um texto descritivo do produto, esta caixa de texto
                servirá apenas de exemplo para que simule algum texto que venha
                a ser inserido nesse campo, descrevendo tal produto.
              </h6>
            </InfoDetail>
            <Button>
              <ShoppingBagIconWhite /> ADICIONAR AO CARRINHO
            </Button>
          </Dbetween>
        </DisplayBetween>
      </BgColor>
    </>
  );
};
