import { InputSeach } from "../../InputSearch/inputSearch";
import { ShoppingBag } from "../../shoppingBag/shoppingBag";
import * as S from "./styles";

export const Navbar = () => {
  return (
    <S.Container>
      <S.DivDFlex>
        <S.Title>ecommerce</S.Title>
        <S.RightContainer>
          <InputSeach />
          <ShoppingBag />
        </S.RightContainer>
      </S.DivDFlex>
    </S.Container>
  );
};
