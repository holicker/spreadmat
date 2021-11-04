import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../components/common/BasicDiv";
import { BasicItem } from "../components/common/BasicItem";

const TransactionPageBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  height: 100%;
  max-height: 90vh;
`;

const TransactionPageItem = styled(BasicItem)`
  width: 100%;
  border: 1px solid ${OpenColor.black};
  flex: 1;

  &.left {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  &.center {
    display: flex;
    flex-direction: column;
  }

  &.right {
    display: flex;
    flex-direction: column;
  }
  &.title {
    flex: 0 0 2rem;
  }
  &.button {
    flex: 0 0 2rem;
  }

  &.list {
    justify-content: flex-start;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }
`;

const TransactionBlock = styled(BasicItem)`
  padding: 1rem;
  flex: 0 0 5rem;
  height: 10rem;
  flex-direction: column;
`;
const Transaction = styled(BasicItem)``;

const TransactionItem = ({ onClick }) => {
  return (
    <TransactionBlock onClick={onClick}>
      <Transaction className="photo">사진</Transaction>
      <Transaction className="title">상품 제목</Transaction>
      <Transaction className="info">가격 및 정보</Transaction>
      <Transaction className="desc">내용</Transaction>
    </TransactionBlock>
  );
};

const TransactionPage = ({ match, history }) => {
  console.log({ match });
  return (
    <TransactionPageBlock>
      <TransactionPageItem className="left">
        <TransactionPageItem className="info"></TransactionPageItem>

        <TransactionPageItem className="button">
          과거 거래 목록 / 현재 거래 목록
        </TransactionPageItem>
        <TransactionPageItem className="notify"></TransactionPageItem>
      </TransactionPageItem>
      <TransactionPageItem className="center">
        <TransactionPageItem className="title">구매 관련</TransactionPageItem>

        <TransactionPageItem className="list">
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
        </TransactionPageItem>
      </TransactionPageItem>
      <TransactionPageItem className="right">
        <TransactionPageItem className="title">판매 관련</TransactionPageItem>
        <TransactionPageItem className="list">
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
        </TransactionPageItem>
      </TransactionPageItem>
    </TransactionPageBlock>
  );
};

export default TransactionPage;
