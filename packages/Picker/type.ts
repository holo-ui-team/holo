export type Option = { name: string, desc?: string } | string | number

export type PickerProps = {
  visible             : boolean
  maskClosable       ?: boolean
  type               ?: string
  options             : Array<Option[]>
  default            ?: Array<Option[]>
  change             ?: Function
  confirm            ?: Function
  cancel             ?: Function
}