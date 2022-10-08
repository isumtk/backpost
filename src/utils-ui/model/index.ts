import { init, Models, RematchDispatch, RematchRootState } from "@rematch/core";

import { registred } from "./registred";
import { userData } from "./userdata";

export interface RootModel extends Models<RootModel> {
  registred: typeof registred;
  userData: typeof userData;
}

export const models: RootModel = { registred, userData };

export const store = init({
  models,
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
