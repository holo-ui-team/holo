import Loading from './loading.vue';

const loading: any = function(Vue) {
  const loadingConsTructor = Vue.extend(Loading);
  let isHavShow: boolean = false;
  let loadingDom:any;
  Vue.prototype.$loading = function(params: { text: string, type?: string, theme?: string, lock?: boolean, maskType?: string }) {
    if (isHavShow) {return}
    let { text, type = 'point', theme = 'blue', lock = true, maskType } = params;
    loadingDom = new loadingConsTructor({
      el:document.createElement('div'),
      propsData: { text, type, theme, lock, maskType },
    })
    document.body.appendChild(loadingDom.$el);
    isHavShow = true;
  }
  Vue.prototype.$hideLoading = function(){
    if (loadingDom) {
      loadingDom.isHide = true;
    }
    isHavShow = false;
  }
}

export default loading;
