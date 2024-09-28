import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";

import { ShoppingBag } from "../../shoppingBag/shoppingBag";
import { handleUserId } from "../../../redux/ecommerceSlice";
import { InputSeach } from "../../InputSearch/inputSearch";

export const Navbar = () => {
  const { userId } = useSelector((state) => state.ecommerce);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUser = () => {
    if (userId) {
      localStorage.removeItem("userId");
      dispatch(handleUserId(null));
    }
    return navigate("/");
  };

  return (
    <S.Container>
      <S.DivDFlex>
        <S.Title>ecommerce</S.Title>
        <S.RightContainer>
          <InputSeach />
          <ShoppingBag />
          <S.ButtonLogin userId={userId} onClick={handleUser}>
            {userId ? "Logout" : "Login"}
          </S.ButtonLogin>
        </S.RightContainer>
      </S.DivDFlex>
    </S.Container>
  );
};
