
export type Action = {
  id   ?: string
  name  : string,
  icon  ?: string,
  ad    ?: string,
  danger?: boolean
}

export type PopupActionProps = {
  visible             : boolean
  type               ?: 'share'
  maskClosable       ?: boolean
  actions             : Action[]
  confirm            ?: Function
  cancel             ?: Function
}