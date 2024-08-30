import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { formatNumberWithTwoDecimals } from "../../../utils/currency";
import { URLAPIECOMMERCE, useFetchApi } from "../../../useFetchApi";
import { useNavigate } from "react-router-dom";

const CardContainer = styled.div`
  width: 340px;
  overflow: hidden;
  cursor: pointer;

  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  font-family: "Saira", sans-serif;
  background-color: #ffff;
  padding: 12px;
  border-radius: 0px 0px 8px 8px;

  h6 {
    font-size: 24px;
    font-weight: 300;
    color: #41414d;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  hr {
    color: #dce2e5;
  }

  div {
    height: 1px;
    border-bottom: 2px solid #dce2e5;
  }

  strong {
    font-size: 21px;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  border-radius: 8px 8px 0 0;
`;

const DivDflex = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
`;

export const Card = () => {
  const navigate = useNavigate();

  const { params } = useSelector((state) => state.ecommerce);

  const num = params?.option;

  const paramsMap = {
    1: {},
    2: { filterType: "camisa" },
    3: { filterType: "caneca" },
    4: { orderBy: "news" },
    5: { orderBy: "expensive" },
    6: { orderBy: "cheap" },
  };

  console.log(num);

  const URL = `${URLAPIECOMMERCE}/produtos`;

  const parametros = paramsMap[num];
  console.log(parametros);

  const { data, isLoading, error } = useFetchApi(URL, parametros);

  return (
    <>
      <DivDflex>
        {data?.data?.map((item) => (
          <CardContainer onClick={() => navigate(`/detail/${item?.id}`)}>
            <CardImg src={item?.url_img} alt="My Image" />
            <CardContent>
              <h6>{item?.nome}</h6>
              <div></div>
              <strong>R$ {formatNumberWithTwoDecimals(item?.preco)}</strong>
            </CardContent>
          </CardContainer>
        ))}
      </DivDflex>
    </>
  );
};
