import {DASHBOARD_DATA} from './type';
import {sendGetRequest} from '../../network/networkRequest';

export const dashboardAsyncAction = async (dispatch) => {
  const response = await callDashboardApi(dispatch);
  // console.log('response ====>1', response.data);
  dispatch(dashboardData(response.data));
};

const callDashboardApi = async (dispatch) =>
  sendGetRequest('https://gorest.co.in/public/v1/posts', null, dispatch);

const dashboardData = (value) => ({
  type: DASHBOARD_DATA,
  payload: value,
});
