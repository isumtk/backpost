import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { userDataType } from "../types/userData";

export const userData = createModel<RootModel>()({
  state: {
    username: "",
    profile: "",
    firstName: "",
    lastName: "",
    dob: "",
    twitter: "",
    instagram: "",
    github: "",
    interests: [],
    following: [],
  } as userDataType,
  reducers: {
    isRegistered: () => {},
    registerUser: () => {},
    loginUser: () => {},
    logoutUser: () => {},
  },
});
