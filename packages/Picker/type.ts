import { PropDate } from '@/_helper/date-helper'

export type Option = { name: string; desc?: string } | string | number

export type PickerProps = {
  visible             : boolean;
  options             : Array<Option[]>;
  maskClosable       ?: boolean;
  auto               ?: boolean;
  default            ?: Array<Option>;
  change             ?: Function;
  confirm            ?: Function;
  cancel             ?: Function;
}

export type DatePickerProps = PickerProps & {
  default            ?: PropDate;
  min                ?: PropDate;
  max                ?: PropDate;
  format             ?: string;
}