import OpenColor from "open-color";
import React from "react";
import { Route } from "react-router";
import styled from "styled-components";
import BasicButton from "../components/common/BasicButton";
import { BasicDiv } from "../components/common/BasicDiv";
import { BasicItem } from "../components/common/BasicItem";
import RegisterMerchandise from "../components/merchandise/RegisterMerchandise";
import VeiwMerchandise from "../components/merchandise/ViewMerchandise";
const MerchandisePageBlock = styled(BasicDiv)`
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  height: 100%;
  max-height: 100vh;
  width: 100%;
`;

let displayNone = true;

const MerchandisePageItem = styled(BasicItem)`

  border: 1px solid ${OpenColor.black};

  &.left {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    overflow: auto;
  }

  &.right {
    display:flex;
    flex-direction: column;
    flex: 2;
  }
`;
const MerchandiseBlock = styled(BasicItem)`
  padding: 1rem;
  flex: 0 0 14rem;
  height: 10rem;
  flex-direction: column;
`;
const Merchandise = styled(BasicItem)``;

const MerchandiseItem = ({ onClick }) => {
  return (
    <MerchandiseBlock onClick={onClick}>
      <Merchandise className="photo">사진</Merchandise>
      <Merchandise className="title">상품 제목</Merchandise>
      <Merchandise className="info">가격 및 정보</Merchandise>
      <Merchandise className="desc">내용</Merchandise>
    </MerchandiseBlock>
  );
};

const MerchandisePage = ({ match, history }) => {
  const GoView = (merchandiseId) => {
    history.push(match.url + `/view/${merchandiseId}`);
  };

  return (
    <MerchandisePageBlock>
      <MerchandisePageItem className="left">
        <MerchandiseItem onClick={() => GoView("1")} />
        <MerchandiseItem onClick={() => GoView("2")} />
        <MerchandiseItem onClick={() => GoView("3")} />
        <MerchandiseItem onClick={() => GoView("4")} />
        <MerchandiseItem onClick={() => GoView("5")} />
        <MerchandiseItem onClick={() => GoView("6")} />
        <MerchandiseItem onClick={() => GoView("7")} />
        <MerchandiseItem onClick={() => GoView("8")} />
        <MerchandiseItem onClick={() => GoView("9")} />
      </MerchandisePageItem>
      <MerchandisePageItem className="right">
        <Route
          component={VeiwMerchandise}
          path={match.url + "/view/:merchandiseId"}
        />
        <Route component={RegisterMerchandise} path={match.url + "/register"} />
      </MerchandisePageItem>

      <MerchandisePageItem className="button" displayNone={displayNone}>
        <BasicButton to={match.url + "/register"}>상품추가</BasicButton>
      </MerchandisePageItem>
    </MerchandisePageBlock>
  );
};

export default MerchandisePage;
