import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import BasicButton from "../common/BasicButton";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";
import { LinkButton } from "../common/LinkButton";

const ListNoticeBlock = styled(BasicDiv)`
  margin: 0px 5px;
  background-color: ${OpenColor.blue[1]};
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ListNoticeItem = styled(BasicItem)`
  &.addbutton {
    justify-content: right;
  }

  a {
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
  }
`;

const NoticeItem = ({ ...props }) => {
  return (
    <ListNoticeItem>
      <LinkButton {...props}>제목1</LinkButton>
      <p>내용</p>
    </ListNoticeItem>
  );
};

const ListNotice = () => {
  return (
    <ListNoticeBlock>
      <ListNoticeItem className="addbutton">
        <BasicButton to="/notice/write">공지 등록</BasicButton>
      </ListNoticeItem>
      <NoticeItem to="/notice/view" />
      <NoticeItem to="/notice/view" />
      <NoticeItem to="/notice/view" />
      <NoticeItem to="/notice/view" />
      <NoticeItem to="/notice/view" />
    </ListNoticeBlock>
  );
};

export default ListNotice;
