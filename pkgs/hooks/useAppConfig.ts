import { AppColorScheme } from "@pkgs/constants/Theme";
import useAppConfigState from "@pkgs/store/useAppConfigState";
import { useCallback } from "react";

const useAppConfig = () => {
  const appConfig = useAppConfigState();
  const setColorScheme = useCallback((scheme: AppColorScheme) => {
    useAppConfigState.setState((prev) => ({
      ...prev,
      colorScheme: scheme,
    }));
  }, []);

  return {
    ...appConfig,
    setColorScheme,
  };
};

export default useAppConfig;
