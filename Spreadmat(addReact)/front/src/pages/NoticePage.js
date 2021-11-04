import OpenColor from "open-color";
import React from "react";
import { Route } from "react-router";
import styled from "styled-components";
import { BasicDiv } from "../components/common/BasicDiv";
import { BasicItem } from "../components/common/BasicItem";
import Responsive from "../components/common/Responsive";
import ListNotice from "../components/notice/ListNotice";
import ViewNotice from "../components/notice/ViewNotice";
import WriteNotice from "../components/notice/WriteNotice";
import WriteNoticeContainer from "../containers/notice/WriteNoticeContainer";

const NoticePageBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  height: 100%;
`;

const NoticePageWrapper = styled(Responsive)`
  display: flex;
  background-color: white;
  width: 70%;
  height: 100%;
  flex-direction: column;
`;

const NoticePageItem = styled(BasicItem)`
  &.center {
    flex: 0 0 3rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  &.title {
    font-size: 2rem;
  }
  &.content {
    flex: 1;
  }
`;

const NoticeItemBlock = styled(BasicItem)``;

const NoticePage = ({ match }) => {
  return (
    <NoticePageBlock>
      <NoticePageWrapper>
        <NoticePageItem className="center">
          <NoticePageItem className="title">공지사항</NoticePageItem>
        </NoticePageItem>
        <NoticePageItem className="content">
          <Route component={ListNotice} path={match.path} exact />
          <Route component={ViewNotice} path={match.path + "/view"} />
          <Route
            component={WriteNoticeContainer}
            path={match.path + "/write"}
          />
        </NoticePageItem>
      </NoticePageWrapper>
    </NoticePageBlock>
  );
};

export default NoticePage;
