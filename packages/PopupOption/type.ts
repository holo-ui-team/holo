export type Option = { name: string, desc?: string } | string | number

export type PopupOptionProps = {
  visible             : boolean
  maskClosable       ?: boolean
  title               : string
  subTitle           ?: string
  single             ?: boolean
  multiColumn        ?: boolean
  default            ?: Option[]
  options             : Option[]
  confirm            ?: Function
  cancel             ?: Function
}