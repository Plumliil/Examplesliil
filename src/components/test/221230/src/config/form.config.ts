import { IFormConfig } from "../../comps/pl-form/types";
const formConfig: IFormConfig = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "姓名",
      placeholder: "请输入姓名...",
    },
    {
      field: "password",
      type: "password",
      label: "密码",
      placeholder: "请输入密码...",
    },
    {
      field: "sex",
      type: "select",
      label: "性别",
      placeholder: "请选择性别...",
      options: [
        { title: "男", value: "man" },
        { title: "女", value: "woman" },
      ],
    },
    {
      type: "datepicker",
      field: "term",
      label: "学年",
      otherOptions: {
        type: "daterange",
        startPlaceholder: "请选择开始日期",
        endPlaceholder: "请选择结束日期",
      },
    },
  ],
  colLayout: {
    span: 24,
  },
  labelWidth: "80px",
  itemStyle: {
    padding: "5px 10px",
    maxWidth:'400px'
  },
  size:'large'
};

export default formConfig;
