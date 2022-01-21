import { AppAction } from "..";
import {
  CLOSE_DRAWER,
  FETCH_USER_FAILED,
  FETCH_USER_REQUEST,
  HELP_PAGE_STATE,
  LOOKUP_SEARCH_STATUS,
  OPEN_DRAWER,
  SET_MESSAGE_SEARCHING,
  SET_MESSAGE_SEARCH_VALUE,
  SET_NEW_INTERACTION,
  SET_RIGHTBAR_LOADING,
  SystemState,
  TOGGLE_DRAWER,
  UPDATE_LEFT_BAR,
  UPDATE_OPEN_NAV,
  UPDATE_TOP_NOTIFICATION,
} from "./types";

const initialState: SystemState = {
  drawerOpen: false,
  fetchUserError: null,
  loadingUser: false,
  targetPage: "",
  openNav: undefined,
  leftBarOpened: true,
  lookupSearchActive: false,
  rightBarLoading: false,
  isMessageSearching: false,
  messageSearchValue: "",
  isNewInteractionStarted: false,
  topNotification: {
    isOpen: false,
    message: undefined,
  },
};

export function systemReducer(
  state = initialState,
  action: AppAction
): SystemState {
  switch (action.type) {
    case OPEN_DRAWER: {
      return {
        ...state,
        drawerOpen: true,
      };
    }

    case CLOSE_DRAWER: {
      return {
        ...state,
        drawerOpen: false,
      };
    }

    case TOGGLE_DRAWER: {
      return {
        ...state,
        drawerOpen: action.drawerOpen,
      };
    }

    case FETCH_USER_REQUEST: {
      return {
        ...state,
        loadingUser: true,
        fetchUserError: null,
      };
    }

    case FETCH_USER_FAILED: {
      return {
        ...state,
        loadingUser: false,
        fetchUserError: action.error,
      };
    }

    case HELP_PAGE_STATE: {
      return {
        ...state,
        loadingUser: false,
        targetPage: action.targetPage,
      };
    }
    case UPDATE_OPEN_NAV: {
      return {
        ...state,
        openNav: action.openNav,
      };
    }
    case UPDATE_LEFT_BAR: {
      return {
        ...state,
        leftBarOpened: action.leftBarOpened,
      };
    }
    case LOOKUP_SEARCH_STATUS: {
      return {
        ...state,
        lookupSearchActive: action.lookupSearchActive,
      };
    }
    case SET_RIGHTBAR_LOADING: {
      return {
        ...state,
        rightBarLoading: action.rightBarLoading,
      };
    }
    case SET_MESSAGE_SEARCHING: {
      return {
        ...state,
        isMessageSearching: action.isMessageSearching,
      };
    }
    case SET_MESSAGE_SEARCH_VALUE: {
      return {
        ...state,
        messageSearchValue: action.messageSearchValue,
      };
    }
    case SET_NEW_INTERACTION: {
      return {
        ...state,
        isNewInteractionStarted: action.isNewInteractionStarted,
      };
    }

    case UPDATE_TOP_NOTIFICATION: {
      return {
        ...state,
        topNotification: {
          isOpen: action.payload.isOpen,
          message: action.payload.message,
        },
      };
    }

    default:
      return state;
  }
}
