import styled from "styled-components";
import { InputSearchIcon } from "./searchIcon";
import { useDispatch, useSelector } from "react-redux";
import { handleSearch } from "../../redux/ecommerceSlice";

const MainSearch = styled.input`
  height: 42px;
  width: 100%;
  border-radius: 8px;
  background-color: #f3f5f6;
  padding: 10px 16px 10px 40px;
  border: none;
  font-family: "Saira", sans-serif;
  font-weight: 450;
  outline: none;
`;

const ContainerInputSearch = styled.div`
  width: 352px;
  height: 42px;
  position: relative;
`;

const DivSearchIcon = styled.div`
  position: absolute;
  top: 55%;
  right: 8%;
  transform: translateY(-50%);

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const InputSeach = () => {
  const { search } = useSelector((state) => state?.ecommerce);
  console.log(search);

  const dispatch = useDispatch();

  return (
    <>
      <ContainerInputSearch>
        <MainSearch
          onChange={(e) => dispatch(handleSearch(e?.target?.value))}
          placeholder="Procurando por algo específico"
        ></MainSearch>
        <DivSearchIcon>
          <InputSearchIcon />
        </DivSearchIcon>
      </ContainerInputSearch>
    </>
  );
};
