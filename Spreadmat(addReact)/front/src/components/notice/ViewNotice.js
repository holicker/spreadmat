import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import BasicButton from "../common/BasicButton";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";

const ViewNoticeBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  width: 80%;
  flex-direction: column;
`;

const ViewNoticeItem = styled(BasicItem)`
  flex: 1;

  &.noticeTitle {
    flex: 0 0 3rem;
  }
  &.noticeInfo {
    flex: 0 0 1rem;
  }
  &.noticeContent {
    flex: 1;
  }
  &.noticeButton {
    flex: 0 0 2rem;
  }
`;

const ViewNotice = () => {
  return (
    <ViewNoticeBlock>
      <ViewNoticeItem className="noticeTitle">공지</ViewNoticeItem>
      <ViewNoticeItem className="noticeInfo">날짜 등등</ViewNoticeItem>
      <ViewNoticeItem className="noticeContent">내용</ViewNoticeItem>
      <ViewNoticeItem className="noticeButton">
        <BasicButton to="/notice">뒤로 가기</BasicButton>

        <BasicButton to="/notice">수정</BasicButton>

        <BasicButton to="/notice">삭제</BasicButton>

        <BasicButton to="/notice">비활성화/활성화 토글</BasicButton>
      </ViewNoticeItem>
    </ViewNoticeBlock>
  );
};

export default ViewNotice;
