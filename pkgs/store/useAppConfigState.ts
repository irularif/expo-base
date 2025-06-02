import { AppColorScheme } from "@pkgs/constants/Theme";
import { storeWithLocalStorage } from "@pkgs/utils/store";

export interface IUseAppConfigState {
  colorScheme?: AppColorScheme;
}

const initialAppConfigState: IUseAppConfigState = {
  colorScheme: undefined, // Default to undefined to allow system preference
};
const useAppConfigState = storeWithLocalStorage(
  "appConfig",
  initialAppConfigState
);

export default useAppConfigState;
