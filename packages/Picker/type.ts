export type Option = { name: string, desc?: string } | string | number

export type PopupOptionProps = {
  visible             : boolean
  maskClosable       ?: boolean
  options             : Array<Option[]>
  default            ?: Array<Option[]>
  confirm            ?: Function
  cancel             ?: Function
}