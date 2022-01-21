export type TopNotificationModel = {
  isOpen: boolean;
  message: string | undefined;
};

export enum OpenNavEnum {
  LEFT = "leftNav",
  RIGHT = "rightNav",
}

export interface SystemState {
  drawerOpen: boolean;
  loadingUser: boolean;
  fetchUserError: string | null;
  targetPage: string;
  openNav: OpenNavEnum | undefined;
  leftBarOpened: boolean;
  lookupSearchActive: boolean;
  rightBarLoading: boolean;
  isMessageSearching: boolean;
  messageSearchValue: string;
  isNewInteractionStarted: boolean;
  topNotification: TopNotificationModel;
}
export const OPEN_DRAWER = "OPEN_DRAWER";
export const CLOSE_DRAWER = "CLOSE_DRAWER";
export const TOGGLE_DRAWER = "TOGGLE_DRAWER";
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILED = "FETCH_USER_FAILED";
export const HELP_PAGE_STATE = "HELP_PAGE_STATE";
export const UPDATE_MAIN_CONTENT = "UPDATE_MAIN_CONTENT";
export const UPDATE_OPEN_NAV = "UPDATE_OPEN_NAV";
export const UPDATE_ACTIVE_RIGHT_NAV_ITEM = "UPDATE_ACTIVE_RIGHT_NAV_ITEM";
export const UPDATE_LEFT_NAV_CONTENT = "UPDATE_LEFT_NAV_CONTENT";
export const UPDATE_INTERACTION_OBJECT = "UPDATE_INTERACTION_OBJECT";
export const UPDATE_SELECTED_INTERACTION_NEW =
  "UPDATE_SELECTED_INTERACTION_NEW";
export const UPDATE_SELECTED_INTERACTION = "UPDATE_SELECTED_INTERACTION";
export const UPDATE_HISTORY_INTERACTION = "UPDATE_HISTORY_INTERACTION";
export const UPDATE_SELECTED_INTERACTION_CONTEXT =
  "UPDATE_SELECTED_INTERACTION_CONTEXT";
export const UPDATE_OPEN_LEFT_BAR_ACCORDION = "UPDATE_OPEN_LEFT_BAR_ACCORDION";
export const UPDATE_LEFT_BAR = "UPDATE_LEFT_BAR";
export const LOOKUP_SEARCH_STATUS = "LOOKUP_SEARCH_STATUS";
export const CHANGE_EMAIL_VIEW = "CHANGE_EMAIL_VIEW";
export const CHANGE_LEFT_BAR_EMAIL_VIEW = "CHANGE_LEFT_BAR_EMAIL_VIEW";
export const UPDATE_STALE_DATA = "UPDATE_STALE_DATA";
export const SET_MIDDLEPANE_LOADING = "SET_MIDDLEPANE_LOADING";
export const SET_RIGHTBAR_LOADING = "SET_RIGHTBAR_LOADING";
export const SET_MESSAGE_SEARCHING = "SET_MESSAGE_SEARCHING";
export const SET_MESSAGE_SEARCH_VALUE = "SET_MESSAGE_SEARCH_VALUE";
export const SET_NEW_INTERACTION = "SET_NEW_INTERACTION";
export const UPDATE_TOP_NOTIFICATION = "UPDATE_TOP_NOTIFICATION";
export interface SetRightBarLoad {
  type: typeof SET_RIGHTBAR_LOADING;
  rightBarLoading: boolean;
}
export interface UpdateLeftBar {
  type: typeof UPDATE_LEFT_BAR;
  leftBarOpened: boolean;
}
export interface UpdateLookupSearchStatus {
  type: typeof LOOKUP_SEARCH_STATUS;
  lookupSearchActive: boolean;
}

export interface OpenDrawerAction {
  type: typeof OPEN_DRAWER;
}

export interface CloseDrawerAction {
  type: typeof CLOSE_DRAWER;
}

export interface ToggleDrawerAction {
  type: typeof TOGGLE_DRAWER;
  drawerOpen: boolean;
}

export interface FetchUserRequestAction {
  type: typeof FETCH_USER_REQUEST;
}

export interface FetchUserFailedAction {
  type: typeof FETCH_USER_FAILED;
  error: string;
}

export interface UpdateHelpPageValueAction {
  type: typeof HELP_PAGE_STATE;
  targetPage: string;
}

export interface UpdateOpenNav {
  type: typeof UPDATE_OPEN_NAV;
  openNav: OpenNavEnum | undefined;
}

export interface UpdatMessageSearchingStatus {
  type: typeof SET_MESSAGE_SEARCHING;
  isMessageSearching: boolean;
}

export interface UpdatMessageSearchValue {
  type: typeof SET_MESSAGE_SEARCH_VALUE;
  messageSearchValue: string;
}
export interface SetNewInteraction {
  type: typeof SET_NEW_INTERACTION;
  isNewInteractionStarted: boolean;
}
export interface UpdateTopNotification {
  type: typeof UPDATE_TOP_NOTIFICATION;
  payload: TopNotificationModel;
}

export type SystemAction =
  | OpenDrawerAction
  | CloseDrawerAction
  | ToggleDrawerAction
  | FetchUserRequestAction
  | FetchUserFailedAction
  | UpdateHelpPageValueAction
  | UpdateOpenNav
  | UpdateLeftBar
  | UpdateLookupSearchStatus
  | SetRightBarLoad
  | UpdatMessageSearchingStatus
  | UpdatMessageSearchValue
  | SetNewInteraction
  | UpdateTopNotification;
