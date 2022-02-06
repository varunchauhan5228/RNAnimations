import {DASHBOARD_DATA, ONE_GET_DATA} from '../actions/type';
const INITIAL_STATE = {
  data: [],
  loading: false,
  screenName: 'One Screen display',
  counter: 0,
};

const DashBoardReducer = (state = INITIAL_STATE, actions) => {
  const {type, payload} = actions;
  switch (type) {
    case ONE_GET_DATA:
      return {...state, screenName: payload};
    case DASHBOARD_DATA:
      return {...state, data: payload};
    default:
      return {
        ...state,
      };
  }
};

export default DashBoardReducer;
