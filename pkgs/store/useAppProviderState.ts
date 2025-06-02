import { store } from "@pkgs/utils/store";

export interface IUseAppProviderState {
  isFontReady: boolean;
  isThemeReady: boolean;
  isInitReady: boolean;
}

const initialAppProviderState: IUseAppProviderState = {
  isFontReady: false,
  isThemeReady: false,
  isInitReady: false,
};
const useAppProviderState = store(
  initialAppProviderState
);

export default useAppProviderState;
