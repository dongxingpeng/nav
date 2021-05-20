<template>
  <div>
    <Form
      ref="form"
      :model="model"
      :size="form.size"
      :inline="form.inline"
      :label-position="form.labelPosition"
      class="demo-form-inline"
    >
      <FormItem
        v-for="item in form.config"
        :label="item.label"
        :prop="item.prop"
        :key="item.prop"
      >
        <Input
          v-if="item.type == ('text' || 'textarea')"
          v-model="model[item.prop]"
          :type="item.type"
          :placeholder="item.placeholder || '请输入内容'"
        />
        <Select
          v-if="item.type == ('select' || 'Select')"
          v-model="model[item.prop]"
          :placeholder="item.placeholder || '请选择'"
        >
          <Option
            v-for="opt in item.option"
            :key="opt.label"
            :label="opt.lable"
            :value="opt.value"
          ></Option>
        </Select>
        <CheckboxGroup
          v-if="item.type == ('checkbox' || 'checkBox')"
          @change="checkChange(item.prop)"
          v-model="model[item.prop]"
        >
          <Checkbox
            v-for="check in item.option"
            :key="check.value"
            :label="check.value"
            >{{ check.label }}</Checkbox
          >
        </CheckboxGroup>
        <RadioGroup
          v-if="item.type == ('radio' || 'Radio')"
          v-model="model[item.prop]"
        >
          <Radio
            v-for="opt in item.option"
            :key="opt.label"
            :label="opt.value"
            >{{ opt.label }}</Radio
          >
        </RadioGroup>
        <DatePicker
          v-if="dateType.indexOf(item.type) > 0"
          v-model="model[item.prop]"
          :placeholder="item.placeholder || '选择日期'"
          :format="item.format"
          :value-format="item.valueFormat"
          :type="item.type"
          :start-placeholder="item.startPlaceholder"
          :end-placeholder="item.endPlaceholder"
          :default-time="item.defaultTime"
        ></DatePicker>
        <TimePicker
          v-if="item.type == ('time' || 'Time')"
          v-model="model[item.prop]"
          :placeholder="item.placeholder || '选择时间'"
          :is-range="item.isRange || 'false'"
          :range-separator="item.rangeSeparator"
          :start-placeholder="item.startPlaceholder"
          :end-placeholder="item.endPlaceholder"
        ></TimePicker>
      </FormItem>

      <FormItem :style="{ textAlign: form.direction }">
        <Button type="primary" size="small" @click="handleSubmit">提交</Button>
        <Button type="primary" plain size="small" @click="handleReset"
          >重置</Button
        >
      </FormItem>
    </Form>
  </div>
</template>
<script>
import {
  Form,
  FormItem,
  Input,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Button,
  Select,
  Option,
  DatePicker,
  TimePicker,
} from "element-ui";
export default {
  name: "FormCommon",
  components: {
    Form,
    FormItem,
    Input,
    Checkbox,
    CheckboxGroup,
    Radio,
    RadioGroup,
    Button,
    Select,
    Option,
    DatePicker,
    TimePicker,
  },
  data() {
    return {
      dateType: "year,month,date,week,datetime,datetimerange,daterange",
    };
  },
  props: {
    model: {
      type: Object,
      default: function () {
        return {};
      },
    },
    form: {
      type: Object,
      default: function () {
        return {
          config: {
            type: Array,
            default: function () {
              return [];
            },
          },
          size: {
            type: String,
            default: "",
          },

          inline: {
            type: Boolean,
            default: false,
          },

          labelPosition: {
            type: String,
            default: "right",
          },
          direction: {
            type: String,
            default: "center",
          },
        };
      },
    },
    button: {
      type: Object,
      default: function () {
        return {
          submit: "提交",
          reset: "重置",
        };
      },
    },
  },
  methods: {
    handleSubmit() {
      console.log(this.model);
      console.log(this.$refs.form);
    },
    handleReset() {
      this.$refs.form.resetFields();
    },
    handleInput(e) {
      this.forms.name = e;
    },
    checkChange(prop) {
      console.log(prop);
    },
  },
};
</script>
