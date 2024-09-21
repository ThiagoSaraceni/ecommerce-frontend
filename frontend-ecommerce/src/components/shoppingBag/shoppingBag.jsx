import styled from "styled-components";
import { ShoppingBagIcon } from "./shoppingBagIcon";
import { useNavigate } from "react-router-dom";
import { URLAPIECOMMERCE, useFetchApi } from "../../useFetchApi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handleRefreshCart } from "../../redux/ecommerceSlice";

const ContainerShoppingBag = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;
`;

const QntProduct = styled.div`
  background-color: #de3838;
  border-radius: 200px;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 17px;
  left: 12px;
`;

const LabelQuantity = styled.b`
  position: absolute;
  color: white;
  font-family: "Saira", sans-serif;
  font-size: 14px;
  font-weight: 500;
  left: ${({ children }) => (children.toString().length > 1 ? "3px" : "6px")};
  //O que estiver dentro da Label quantity vai ser o childreen
  //Mesma coisa de se fazer isso.
  //  left: (props) => (props.children.toString().length > 1 ? "3px" : "6px");
`;

export const ShoppingBag = () => {
  const { userId, refreshCart } = useSelector((state) => state.ecommerce);

  const { data } = useFetchApi(
    `${URLAPIECOMMERCE}/quantity/${userId}`,
    {},
    refreshCart
  );

  const navigate = useNavigate();

  console.log({ refreshCart });

  const dispatch = useDispatch();

  const setFalseRefresh = () => dispatch(handleRefreshCart(false));

  useEffect(() => {
    if (refreshCart) {
      setFalseRefresh();
    }
  }, [dispatch, refreshCart]);

  console.log(data?.count);

  return (
    <ContainerShoppingBag onClick={() => navigate(`/cart`)}>
      <ShoppingBagIcon />
      <QntProduct>
        <LabelQuantity>{userId ? data?.count : 0}</LabelQuantity>
      </QntProduct>
    </ContainerShoppingBag>
  );
};
