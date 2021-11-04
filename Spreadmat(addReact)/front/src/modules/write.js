import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const INITIALIZE = "write/INITIALIZE";
const CHANGE_FIELD = "write/CHANGE_FIELD";

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  })
);

const initialState = {
  notice: {
    title: ``,
    body: ``,
  },
  qna: {
    title: ``,
    body: ``,
  },
  review: {
    title: ``,
    body: ``,
  },
  describe: {
    title: ``,
    body: ``,
  },
  qnareply: {
    title: ``,
    body: ``,
  },
  reviewreply: {
    title: ``,
    body: ``,
  },
};

const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState,

    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
  },
  initialState
);

export default write;
