import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { BackPage } from "../components/BackPage/backPage";
import { CardShoppingCart } from "../components/layout/CardCartShopping";
import { TrashIcon } from "../components/Trash/trashIcon";
import {
  URLAPIECOMMERCE,
  useFetchApi,
  useFetchApiDelete,
} from "../useFetchApi";
import { handleRefreshCart } from "../redux/ecommerceSlice";

const BgColor = styled.div`
  background-color: #f0f0f5;
  min-height: calc(100vh - 80px);
  padding: 20px 160px 20px 160px;
`;

const TextInfo = styled.div`
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
  margin-top: 20px;
  height: 250px;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  text-overflow: ellipsis;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  width: 95%;
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
    width: 70%;
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
  const dispatch = useDispatch();
  const [productDelete, setProductDelete] = useState("");
  const { userId, refreshCart } = useSelector((state) => state.ecommerce);

  const getIdProduct = (id) => setProductDelete(id);

  const setFalseRefresh = () => dispatch(handleRefreshCart(false));
  const setTrueRefresh = () => dispatch(handleRefreshCart(true));

  useEffect(() => {
    if (refreshCart) {
      setFalseRefresh();
    }
  }, [dispatch, refreshCart]);

  const { data, isLoading } = useFetchApi(
    `${URLAPIECOMMERCE}/incart/${userId}`,
    {},
    refreshCart
  );

  const totProd = data?.data?.length;

  let somaPrice = 0;
  data?.data?.map((item) => {
    somaPrice += item?.preco;
  });

  useEffect(() => {
    const deleteProduct = async () => {
      if (productDelete !== "") {
        const queryParams = { clienteId: userId, produtoId: productDelete };
        const { result } = await useFetchApiDelete(
          `${URLAPIECOMMERCE}/delete`,
          queryParams
        );
        if (result?.success === true) {
          setTrueRefresh();
        }
        setProductDelete("");
      }
    };

    deleteProduct();
  }, [productDelete]);

  return (
    <BgColor>
      <Container>
        <div className="carrinho">
          <BackPage />
          <TextInfo>
            <h4>SEU CARRINHO</h4>
            <span>
              {`Total(${totProd} ${totProd > 1 ? "produtos" : "produto"})`}
              <strong>&nbsp;{somaPrice.toFixed(2)}</strong>
            </span>
          </TextInfo>
          {!isLoading ? (
            data?.data?.map((item) => (
              <CardCart>
                <img src={item?.url_img} />
                <TextCardCart>
                  <DFlexBetween>
                    <h4>{item?.nome}</h4>
                    <div onClick={() => getIdProduct(item?.id)}>
                      <TrashIcon />
                    </div>
                  </DFlexBetween>
                  <p>{item?.descricao}</p>
                  <DFlexEnd>
                    <select name="select">
                      <option value="valor1">1</option>
                      <option value="valor2">2</option>
                      <option value="valor3">3</option>
                      <option value="valor3">4</option>
                      <option value="valor3">5</option>
                    </select>

                    <strong>R$ {item?.preco}</strong>
                  </DFlexEnd>
                </TextCardCart>
              </CardCart>
            ))
          ) : (
            <>
              <h4>Carregando dados....</h4>
            </>
          )}
        </div>
        <CardShoppingCart totalCart={somaPrice} />
      </Container>
    </BgColor>
  );
};
