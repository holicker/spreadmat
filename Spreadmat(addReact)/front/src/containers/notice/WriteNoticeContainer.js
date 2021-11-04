import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WriteNotice from "../../components/notice/WriteNotice";
import { changeField, initialize } from "../../modules/write";

const WriteNoticeContainer = () => {
  const { title, body } = useSelector(({ write }) => ({
    title: write.notice.title,
    body: write.notice.body,
  }));

  const dispatch = useDispatch();
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <WriteNotice onChangeField={onChangeField} title={title} body={body} />
  );
};

export default WriteNoticeContainer;
