import styled from "styled-components";
import { ShoppingBagIcon } from "./shoppingBagIcon";

const ContainerShoppingBag = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
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
  const quantity = 12;
  return (
    <ContainerShoppingBag>
      <ShoppingBagIcon />
      <QntProduct>
        <LabelQuantity>{quantity}</LabelQuantity>
      </QntProduct>
    </ContainerShoppingBag>
  );
};
