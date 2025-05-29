import { store } from "@pkgs/utils/store";

export interface IAppProvider {
  isFontReady: boolean;
  isThemeReady: boolean;
  isInitReady: boolean;
}

const initialAppProviderState: IAppProvider = {
  isFontReady: false,
  isThemeReady: false,
  isInitReady: false,
};
const useAppProviderState = store(
  initialAppProviderState
);

export default useAppProviderState;
