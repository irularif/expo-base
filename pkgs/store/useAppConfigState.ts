import { AppColorScheme } from "@pkgs/constants/Theme";
import { storeWithLocalStorage } from "@pkgs/utils/store";

export interface IAppConfig {
  colorScheme?: AppColorScheme;
}

const initialAppConfigState: IAppConfig = {
  colorScheme: undefined, // Default to undefined to allow system preference
};
const useAppConfigState = storeWithLocalStorage(
  "appConfig",
  initialAppConfigState
);

export default useAppConfigState;
