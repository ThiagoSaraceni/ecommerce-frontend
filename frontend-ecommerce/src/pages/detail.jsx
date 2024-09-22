import toast, { Toaster } from "react-hot-toast";
import styled from "styled-components";
import { BackPage } from "../components/BackPage/backPage";
import { URLAPIECOMMERCE, useFetchApi, useFetchApiPost } from "../useFetchApi";
import { formatNumberWithTwoDecimals } from "../utils/currency";
import { capitalizeFirstLetter } from "../utils/text";
import { useParams } from "react-router-dom";
import { ShoppingBagIconWhite } from "../components/shoppingBag/shoppingBagIcon";
import { useDispatch, useSelector } from "react-redux";
import { handleRefreshCart } from "../redux/ecommerceSlice";

const BgColor = styled.div`
  background-color: #f0f0f5;
  min-height: calc(100vh - 80px);
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
  const { userId, refreshCart } = useSelector((state) => state.ecommerce);
  const { id } = useParams();
  const { data } = useFetchApi(`${URLAPIECOMMERCE}/produtos/${id}`);

  const dispatch = useDispatch();

  const resetShoppingBag = () => dispatch(handleRefreshCart(true));

  const handleAddToCart = async () => {
    const addToCart = {
      clienteId: userId,
      produtoId: id,
      quantidade: 1,
    };

    const { response } = await useFetchApiPost(
      `${URLAPIECOMMERCE}add`,
      addToCart
    );

    if (response.status === 200) {
      resetShoppingBag();
      return toast.success("Produto adicionado ao carrinho");
    }
  };

  return (
    <BgColor>
      <Toaster />
      <BackPage />
      <DisplayBetween>
        <ImgDetail src={data?.url_img} />
        <Dbetween>
          <InfoDetail>
            <span>{capitalizeFirstLetter(data?.categoria)}</span>
            <h4>{data?.nome}</h4>
            <strong>R$ {formatNumberWithTwoDecimals(data?.preco)}</strong>
            <p>
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </p>
            <strong className="description">DESCRIÇÃO</strong>
            <h6>{data?.descricao}</h6>
          </InfoDetail>
          <Button onClick={handleAddToCart}>
            <ShoppingBagIconWhite /> ADICIONAR AO CARRINHO
          </Button>
        </Dbetween>
      </DisplayBetween>
    </BgColor>
  );
};
