<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { IFormItem } from "./types";
defineOptions({
  name: "PlForm",
});
type Size = "default" | "small" | "large";
const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => [],
  },
  labelWidth: {
    type: String,
    default: "80px",
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: "10px 40px" }),
  },
  size: {
    type: String as PropType<Size>,
    default: "default",
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6, // >1920 4个
      lg: 8, // >1920 4个
      md: 12, // >1920 4个
      sm: 24, // >1920 4个
      xs: 24, // >1920 4个
    }),
  },
});
const emit = defineEmits<{
  (e: "update:modelValue", data: any): void;
}>();
const handleValueChange = (value: any, field: string): void => {
  emit("update:modelValue", { ...props.modelValue, [field]: value });
};
</script>

<template>
  <div class="pl-form">
    <el-form label-position="left" :label-width="labelWidth" :style="itemStyle">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemStyle">
              <el-input
                :size="size"
                :placeholder="item.placeholder"
                v-if="item.type === 'input' || item.type === 'password'"
                :type="item.type"
                :model-value="modelValue[`${item.field}`]"
                @update:modelValue="handleValueChange($event, item.field)"
              />
              <el-select
                v-if="item.type === 'select'"
                :size="size"
                :placeholder="item.placeholder"
                :model-value="modelValue[`${item.field}`]"
                @update:modelValue="handleValueChange($event, item.field)"
              >
                <el-option
                  v-for="option in item.options"
                  :key="option.value"
                  :value="option.value"
                  :label="option.title"
                >
                  {{ option.title }}
                </el-option>
              </el-select>
              <el-date-picker
                v-if="item.type === 'datepicker'"
                :size="size"
                v-bind="item.otherOptions"
                :model-value="modelValue[`${item.field}`]"
                @update:modelValue="handleValueChange($event, item.field)"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<style scoped>
.pl-form {
  border: 1px solid black;
  padding: 10px;
}
</style>
