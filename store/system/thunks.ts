import axios from 'axios';
import { batch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { AppAction, AppState } from '..';
import {
  changeEmailView,
  changeLeftBarEmailView,
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
  // setAgentPerformance,
} from './actions';
import { EmailViewEnum } from './types';
// import { getTimeInMilliSeconds } from '../../lib/utils/agent-desktop';
// import { performanceApi } from '../../services/agent';

export function fetchUser(): ThunkAction<Promise<void>, AppState, undefined, AppAction> {
  return async (dispatch) => {
    dispatch(fetchUserRequest());

    try {
      const { data } = await axios.get('http://59f8db64d4d1700012b76310.mockapi.io/users/2');
      dispatch(fetchUserSuccess(data));
    } catch (err) {
      dispatch(fetchUserFailure(err.message));
    }
  };
}

export function updateEmailViewFromLeftNav(
  view: EmailViewEnum
): ThunkAction<void, AppState, undefined, AppAction> {
  return (dispatch) => {
    batch(() => {
      dispatch(changeLeftBarEmailView(view));
      dispatch(changeEmailView(view));
    });
  };
}

// export function getAgentPerformance(
//   requestData?: any
// ): ThunkAction<Promise<void>, AppState, undefined, AppAction> {
//   return async (dispatch) => {
//     try {
//       const { response } = await performanceApi.getInfo(requestData);
//       response && dispatch(setAgentPerformance(response));
//     } catch (err) {
//       console.error(err);
//       return err;

//       // dispatch(setAgentPerformance(err.message));
//       // throw err;
//     }
//   };
// }
