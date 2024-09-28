import React, { useState } from "react";
import styled from "styled-components";
import { RegressIcon } from "./regressIcon";
import { StraightIcon } from "./straightIcon";
import { useDispatch, useSelector } from "react-redux";
import { handlePageChange } from "../../redux/ecommerceSlice";

const StyledPagination = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

const BtnPage = styled.div`
  li {
    list-style-type: none;
  }

  button {
    padding: 10px 16px;
    border-radius: 8px;
    border: none;
    background-color: ${(props) => (props.active ? "#f5f5fa" : "#e9e9f0")};
    border: ${(props) => (props.active ? "1px solid #ffa585" : "none")};
    font-family: "Saira";
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => (props?.active ? "#ffa585" : "#737380")};
    cursor: pointer;
  }
`;

const ContainerBtn = styled.div`
  padding: 10px 16px;
  border-radius: 8px;
  border: ${(props) => (props.clicked ? "1px solid #ffa585" : "none")};
  background-color: #e9e9f0;
  font-family: "Saira";
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.clicked ? "#ffa585" : "#737380")};
  cursor: pointer;
`;

const ContainerBtnStraight = styled.div`
  padding: 10px 16px;
  border-radius: 8px;
  border: ${(props) => (props.click ? "1px solid #ffa585" : "none")};
  background-color: #e9e9f0;
  font-family: "Saira";
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.click ? "#ffa585" : "#737380")};
  cursor: pointer;
`;

const Pagination = ({ totalPages = 5, currentPage = 1 }) => {
  const [clicked, setClicked] = useState(false);
  const [click, setClick] = useState(false);

  const { page } = useSelector((state) => state.ecommerce);
  const dispatch = useDispatch();

  const handlePagination = (newPage) => dispatch(handlePageChange(newPage));

  const handlePageStraight = (page) =>
    page >= totalPages ? null : dispatch(handlePageChange(page + 1));

  const handlePageBack = (page) =>
    page < 2 ? null : dispatch(handlePageChange(page - 1));

  return (
    <StyledPagination>
      {Array.from({ length: totalPages }).map((_, index) => (
        <BtnPage active={currentPage === index + 1} key={index}>
          <li>
            <button onClick={() => handlePagination(index + 1)}>
              {index + 1}
            </button>
          </li>
        </BtnPage>
      ))}
      <ContainerBtn
        clicked={clicked}
        onClick={() => handlePageBack(page)}
        onMouseDown={() => setClicked(true)}
        onMouseUp={() => setClicked(false)}
      >
        <RegressIcon />
      </ContainerBtn>

      <ContainerBtnStraight
        click={click}
        onClick={() => handlePageStraight(page)}
        onMouseDown={() => setClick(true)}
        onMouseUp={() => setClick(false)}
      >
        <StraightIcon />
      </ContainerBtnStraight>
    </StyledPagination>
  );
};

export default Pagination;
