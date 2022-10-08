import { createModel } from "@rematch/core";
import { RootModel } from ".";

export const registred = createModel<RootModel>()({
  state: { status: false },
  reducers: {
    isRegistered: () => {},
    registerUser: () => {},
    loginUser: () => {},
    logoutUser: () => {},
  },
});
