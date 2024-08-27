import React, { useState } from "react";
import styled from "styled-components";
import { URLAPIECOMMERCE, useFetchApi } from "../../../useFetchApi";
import { useSelector } from "react-redux";

const CardContainer = styled.div`
  width: 340px;
  overflow: hidden;
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
  function formatNumberWithTwoDecimals(num) {
    let numStr = num.toString();
    if (numStr.includes(".")) {
      let [integerPart, decimalPart] = numStr.split(".");
      if (decimalPart.length < 2) {
        decimalPart = decimalPart.padEnd(2, "0");
      }
      return `${integerPart}.${decimalPart}`;
    } else {
      return `${numStr}.00`;
    }
  }

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
          <CardContainer>
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
