import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";
import BasicButton from "../common/BasicButton";

const RegisterMerchandiseBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

const RegisterMerchandiseItem = styled(BasicItem)`
  flex: 1;

  &.photo {
    flex: 0 0 20rem;
  }
  &.title {
    flex: 0 0 3rem;
  }
  &.info {
    flex: 0 0 2rem;
  }
  &.desc {
    flex: 1 0 3rem;
  }
  &.button {
    flex: 0 0 2rem;
  }
`;

const RegisterMerchandise = ({ match, history }) => {
  const BackButtonClick = () => {
    history.goBack();
  };
  return (
    <RegisterMerchandiseBlock>
      <RegisterMerchandiseItem className="photo">사진</RegisterMerchandiseItem>
      <RegisterMerchandiseItem className="title">제목</RegisterMerchandiseItem>
      <RegisterMerchandiseItem className="info">
        가격 등 정보
      </RegisterMerchandiseItem>
      <RegisterMerchandiseItem className="desc">
        ddd
        <br />
        ddd
        <br />
        ddd
        <br />
        ddd
        <br />
        ddd
        <br />
        ddd
        <br />
        ddd
        <br />
        ddd
        <br />
        ddd
        <br />
        ddd
        <br />
        ddd
        <br />
        ddd
        <br />
        ddd
        <br />
        ddd
        <br />
      </RegisterMerchandiseItem>

      <RegisterMerchandiseItem className="button">
        <BasicButton onClick={() => BackButtonClick()}>뒤로가기</BasicButton>
        <BasicButton>거래요청</BasicButton>
        <BasicButton>수정하기</BasicButton>
        <BasicButton>삭제하기</BasicButton>
        <BasicButton>물품 숨기기</BasicButton>
      </RegisterMerchandiseItem>
    </RegisterMerchandiseBlock>
  );
};

export default RegisterMerchandise;
