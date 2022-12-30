<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import formConfig from "./config/form.config";
import PlForm from "../comps/pl-form/index";
import { IFormConfig } from "../comps/pl-form/types";
defineOptions({
  components: {
    PlForm,
  },
});

// 根据配置初始化表单数据对象
const initFormData = (formConfig: IFormConfig): any => {
  const formOriginalData: any = {};
  const formItems = formConfig.formItems ?? [];
  for (const item of formItems) {
    if (item.type === "datepicker") {
      formOriginalData[item.field] = [];
    } else {
      formOriginalData[item.field] = "";
    }
  }
  return formOriginalData;
};
const formData: any = ref(initFormData(formConfig));
watch(formData, (newValue) => {
  console.log('newValue',newValue);
});
</script>

<template>
  <div class="test221230">
    <h1>FormModel</h1>
    <pl-form v-bind="formConfig" v-model="formData"></pl-form>
  </div>
</template>

<style scoped>
.test221230 {
  text-align: center;
  border: 1px solid black;
  padding: 50px 100px 100px 100px;
}
h1 {
  margin-bottom: 50px;
}
</style>
