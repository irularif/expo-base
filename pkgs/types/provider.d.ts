import { AppTheme } from "@pkgs/stores/config";
import { FontSource } from "expo-font";
import type { ReactNode } from "react";

export interface IProvider {
  children?: ReactNode;
  onAppReady?: () => Promise<void>;
  config?: {
    fonts?: Record<string, FontSource>;
    preventAutoHide?: boolean;
    colorScheme?: AppTheme;
  };
}

export interface IAppProvider extends IProvider {
  setIsReady: () => void;
}
