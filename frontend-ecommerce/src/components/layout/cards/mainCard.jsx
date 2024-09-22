import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { formatNumberWithTwoDecimals } from "../../../utils/currency";
import { URLAPIECOMMERCE, useFetchApi } from "../../../useFetchApi";
import { useNavigate } from "react-router-dom";
import Paginacao from "../../pagination/usePagination";

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

const FlexEnd = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 20px;
`;

export const Card = () => {
  const navigate = useNavigate();

  const { params, search, page } = useSelector((state) => state.ecommerce);

  const num = params?.option;

  const paramsMap = {
    1: { page: page },
    2: { filterType: "camisa", page: page },
    3: { filterType: "caneca", page: page },
    4: { orderBy: "news", page: page },
    5: { orderBy: "expensive", page: page },
    6: { orderBy: "cheap", page: page },
  };

  const URL = `${URLAPIECOMMERCE}/produtos`;

  const parametros = paramsMap[num];

  const { data, isLoading, error } = useFetchApi(URL, parametros);

  const dados = data?.data;

  const dataSearched =
    dados?.filter((item) =>
      item?.nome?.toLowerCase()?.includes(search?.toLowerCase())
    ) || null;

  return (
    <>
      <FlexEnd>
        <Paginacao totalPages={data?.totalPages} currentPage={data?.page} />
      </FlexEnd>

      <DivDflex>
        {dataSearched && dataSearched.length > 0
          ? dataSearched?.map((item) => (
              <CardContainer
                onClick={() => navigate(`/detail/${item?.id}`)}
                key={item?.id}
              >
                <CardImg src={item?.url_img} alt="My Image" />
                <CardContent>
                  <h6>{item?.nome}</h6>
                  <div></div>
                  <strong>R$ {formatNumberWithTwoDecimals(item?.preco)}</strong>
                </CardContent>
              </CardContainer>
            ))
          : data?.data?.map((item) => (
              <CardContainer
                onClick={() => navigate(`/detail/${item?.id}`)}
                key={item?.id}
              >
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
