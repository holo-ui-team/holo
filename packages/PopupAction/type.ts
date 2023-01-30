
export type Action = {
  name  : string,
  icon  ?: string,
  ad    ?: string,
  danger?: boolean
} | string

export type PopupActionProps = {
  visible             : boolean
  type               ?: string
  maskClosable       ?: boolean
  actions             : Action[]
  confirm            ?: Function
  cancel             ?: Function
}