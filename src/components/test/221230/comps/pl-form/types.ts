interface ISelectOption {
  title: string;
  value: string;
}
// interface IColLayout {
//   xl: number; // >1920 4个
//   lg: number; // >1920 4个
//   md: number; // >1920 4个
//   sm: number; // >1920 4个
//   xs: number; // >1920 4个
//   span?: number;
// }
// export interface Props {
//   modelValue: Object;
//   formItems: IFormItem[] | any;
//   labelWidth?: string;
//   itemStyle?: string;
//   colLayout?: any;
// }
export interface IFormItem {
  field: string;
  type: string;
  label: string;
  placeholder?: string;
  options?: ISelectOption[];
  otherOptions?: any;
}

export interface IFormConfig {
  formItems: IFormItem[] | any;
  labelWidth?: string;
  itemStyle?: any;
  colLayout?: any;
  isHidden?: boolean;
}
