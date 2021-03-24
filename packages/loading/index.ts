import Loading from './loading.vue';

const loading: any = function(Vue) {
  const loadingConsTructor = Vue.extend(Loading);
  let isHavShow: boolean = false;
  Vue.prototype.$loading = function(params: { text: string, type?: string, theme?: string, lock?: boolean, maskType?: string }) {
    if (isHavShow) {return}
    let { text, type = 'point', theme = 'blue', lock = true, maskType = 'white' } = params;
    const loadingDom = new loadingConsTructor({
      el:document.createElement('div'),
      propsData: { text, type, theme, lock, maskType },
    })
    document.body.appendChild(loadingDom.$el);
    isHavShow = true;
    // setTimeout(()=>{toastDom.isShow = false; isHavShow = false;}, duration)
  }
}

export default loading;
