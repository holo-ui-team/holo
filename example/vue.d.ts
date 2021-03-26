import Vue from "vue";

declare module "vue/types/vue" {
  // 写或者不写，程序都能正常运行，只是不写的话，vscode 会提示找不到对象
  interface Vue {
    $toast: any,
    $loading: any,
    $hideLoading: any,
  }
}