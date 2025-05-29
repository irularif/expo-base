import { InputProps, RadioGroupProps } from "antd";
import { FormikConfig, FormikProps } from "formik";
import { TextProps, ViewProps } from "react-native";

export type IFormConfig<T> = Omit<FormikConfig<T>, "onSubmit">;

type IInputProps = InputProps | RadioGroupProps;

export interface IFieldRef {
  name: string;
  ref: any;
}

export interface IFormContext {
  isRefExist: (name: string) => boolean;
  addRef: (name: string) => (ref: any) => void;
  nextField: () => void;
}

export interface IField<T> extends Omit<IInputProps, "form" | "type"> {
  name: string;
  type?: "textarea" | "number" | "select" | "radio-group" | "password";
  formik?: FormikProps<T> | UseFormikProps<T>;
  label?: string;
  className?: string;
  labelProps?: Omit<TextProps, "children">;
  rootProps?: Omit<ViewProps, "children">;
  info?: ReactNode;
}

export type IChangeEvent = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;
