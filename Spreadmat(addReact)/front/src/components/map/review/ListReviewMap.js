import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import BasicButton from "../../common/BasicButton";
import { BasicDiv } from "../../common/BasicDiv";
import { BasicItem } from "../../common/BasicItem";

const ListReviewMapBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ListReviewMapItem = styled.div`
  margin: 1rem 1rem;
  height: 9rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

const ListReviewComponent = styled(BasicItem)`
  color: ${OpenColor.gray[9]};
  background-color: ${OpenColor.pink[2]};
  &.photo {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 7;
  }
  &.title {
    grid-column-start: 4;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  &.info {
    grid-column-start: 4;
    grid-column-end: 8;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  &.desc {
    grid-column-start: 4;
    grid-column-end: 8;
    grid-row-start: 3;
    grid-row-end: 8;
  }
`;

const ReviewItem = () => {
  return (
    <ListReviewMapItem>
      <ListReviewComponent className="photo">사진</ListReviewComponent>
      <ListReviewComponent className="title">리뷰 제목</ListReviewComponent>
      <ListReviewComponent className="info">별점 등 정보</ListReviewComponent>
      <ListReviewComponent className="desc">내용</ListReviewComponent>
    </ListReviewMapItem>
  );
};

const ListReviewMap = ({ match }) => {
  const { vendorid } = match.params;
  return (
    <ListReviewMapBlock>
      {vendorid}의 별점 통계
      <BasicButton to={match.url + "/write"}>리뷰 작성</BasicButton>
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </ListReviewMapBlock>
  );
};

export default ListReviewMap;
