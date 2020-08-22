import { IActionType } from "./interfaces";
import { store } from "./store/index";

export function dispacthAction<T extends IActionType>(action: T) {
  if (action as IActionType) {
    store.dispatch(action);
  }
  return store.dispatch<{ type: string }>(action);
}

export const isMobile = () =>
  navigator.appVersion.toString().toLowerCase().includes("iphone") ||
  navigator.appVersion.toString().toLowerCase().includes("android");

export const isIPad = () =>
  navigator.appVersion.toString().toLowerCase().includes("ipad");
