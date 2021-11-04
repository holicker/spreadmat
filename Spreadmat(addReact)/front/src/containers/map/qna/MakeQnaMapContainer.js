import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MakeQnaMap from "../../../components/map/qna/MakeQnaMap";
import { changeField, initialize } from "../../../modules/write";

const MakeQnaMapContainer = () => {
  const { title, body } = useSelector(({ write }) => ({
    title: write.qna.title,
    body: write.qna.body,
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

  return <MakeQnaMap onChangeField={onChangeField} title={title} body={body} />;
};

export default MakeQnaMapContainer;
