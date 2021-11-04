import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import BasicButton from "../../common/BasicButton";
import { BasicDiv } from "../../common/BasicDiv";
import { BasicItem } from "../../common/BasicItem";

const ListQnaMapBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ListQnaMapItem = styled.div`
  margin: 1rem 1rem;
  flex-direction: column;
  display: flex;
`;

const ListQnaComponent = styled(BasicItem)`
  &.head {
  }
  &.title {
  }
  &.info {
  }
  &.desc {
    height: 100px;
  }
`;

const QnaItem = () => {
  return (
    <ListQnaMapItem>
      <ListQnaComponent className="head" onClick>
        <ListQnaComponent className="title">질문 제목</ListQnaComponent>
        <ListQnaComponent className="info">날짜 등 정보</ListQnaComponent>
      </ListQnaComponent>
      <ListQnaComponent className="desc">내용</ListQnaComponent>
    </ListQnaMapItem>
  );
};

const ListQnaMap = ({ match }) => {
  return (
    <ListQnaMapBlock>
      <BasicButton to={match.url + "/write"}>질문 작성</BasicButton>
      <QnaItem />
      <QnaItem />
      <QnaItem />
      <QnaItem />
      <QnaItem />
      <QnaItem />
      <QnaItem />
    </ListQnaMapBlock>
  );
};

export default ListQnaMap;
