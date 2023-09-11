import { atom, selector } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const idTokenState = atom({
  key: "idTokenState",
  default: "",
});

export const isAuthenticated = selector({
  key: "isAuthenticated",
  get: ({ get }) => {
    let access_token = localStorage?.getItem("isAuthenticated");
    return access_token ? true : false;
  },
});

export const isAuthenticatedState = atom({
  key: "isAuthenticatedState",
  default: false,
});

export const loadingState = atom({
  key: "loadingState",
  default: true,
});

export const userProfileState = atom({
  key: "userProfileState",
  default: {},
});
