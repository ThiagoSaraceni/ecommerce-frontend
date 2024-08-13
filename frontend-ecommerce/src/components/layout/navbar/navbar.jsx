import { InputSeach } from "../../inputSearch";
import { ShoppingBag } from "../../shoppingBag";
import * as S from "./styles";

export const Navbar = () => {
  return (
    <>
      <S.Container>
        <S.DivDFlex>
          <S.Title>ecommerce</S.Title>
          <S.RightContainer>
            <InputSeach />
            <ShoppingBag />
          </S.RightContainer>
        </S.DivDFlex>
      </S.Container>
    </>
  );
};
