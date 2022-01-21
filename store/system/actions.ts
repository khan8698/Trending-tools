import {
  LOOKUP_SEARCH_STATUS,
  OpenNavEnum,
  SET_RIGHTBAR_LOADING,
  SystemAction,
  TopNotificationModel,
  UpdateTopNotification,
  UPDATE_LEFT_BAR,
  UPDATE_OPEN_NAV,
  UPDATE_TOP_NOTIFICATION,
} from "./types";

export function openDrawer(): SystemAction {
  return {
    type: "OPEN_DRAWER",
  };
}

export function closeDrawer(): SystemAction {
  return {
    type: "CLOSE_DRAWER",
  };
}

export function toggleDrawer(drawerOpen: boolean): SystemAction {
  return {
    type: "TOGGLE_DRAWER",
    drawerOpen: drawerOpen,
  };
}

export function fetchUserRequest(): SystemAction {
  return {
    type: "FETCH_USER_REQUEST",
  };
}

export function fetchUserFailure(error: string): SystemAction {
  return {
    type: "FETCH_USER_FAILED",
    error,
  };
}

export function updateOpenNav(openNav: OpenNavEnum | undefined): SystemAction {
  return {
    type: UPDATE_OPEN_NAV,
    openNav,
  };
}

export function updateLeftBar(leftBarOpened: boolean) {
  return {
    type: UPDATE_LEFT_BAR,
    leftBarOpened,
  };
}

export function updateLookUpSearchStatus(lookupSearchActive: boolean) {
  return {
    type: LOOKUP_SEARCH_STATUS,
    lookupSearchActive,
  };
}

export function setRightBarLoading(rightBarLoading: boolean): SystemAction {
  return {
    type: SET_RIGHTBAR_LOADING,
    rightBarLoading,
  };
}

export function updateTopNotification(
  payload: TopNotificationModel
): UpdateTopNotification {
  return { type: UPDATE_TOP_NOTIFICATION, payload };
}
