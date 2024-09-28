import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { InputSearchIcon } from "./searchIcon";
import { handleSearch } from "../../redux/ecommerceSlice";

const MainSearch = styled.input`
  height: 42px;
  width: 100%;
  border-radius: 8px;
  background-color: #f3f5f6;
  border: none;
  font-family: "Saira", sans-serif;
  font-weight: 450;
  outline: none;
  font-size: 9px;
  padding: 5px 20px;

  @media (min-width: 768px) {
    font-size: 13px;
    padding: 10px 16px 10px 40px;
  }
`;

const ContainerInputSearch = styled.div`
  width: 250px;
  height: 42px;
  position: relative;
  padding-left: 14px;

  @media (min-width: 768px) {
    width: 352px;
    height: 42px;
    position: relative;
  }
`;

const DivSearchIcon = styled.div`
  position: absolute;
  top: 55%;
  right: 8%;
  transform: translateY(-50%);

  svg {
    width: 50%;
    height: 50%;
  }

  @media (min-width: 768px) {
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const InputSeach = () => {
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
