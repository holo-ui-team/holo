(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{330:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(0);function s(e,t){const n=e.options.name,s=function(e){const t=document.querySelector("."+e);if(t)return t;const n=document.createElement("div");n.className=e;const i=document.querySelector("#app")||document.body;return i&&i.appendChild(n),n}(n);return new i.a({el:s,data:{props:t},render(t){return t("div",{class:n},[t(e,{props:this.props,ref:"myChild"})])}})}},369:function(e,t,n){},370:function(e,t,n){},418:function(e,t,n){"use strict";n(369)},419:function(e,t,n){"use strict";n(370)},428:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(28),l=n(330),o=n(177),c=n(104),a=i.a.extend({name:"OPopupOption",components:{Radio:o.a,PopupBox:c.a,Button:s.a},props:{visible:{type:Boolean,required:!0},maskClosable:{type:Boolean,default:!0},title:{type:String,required:!0,default:"标题"},subTitle:{type:String},single:{type:Boolean},multiColumn:{type:Boolean},default:{type:Array,default:()=>[]},options:{type:Array,required:!0,validator:e=>{let t=!0;return e.forEach(e=>{"object"==typeof e&&void 0===e.name&&(t=!1)}),t}},confirm:{type:Function},cancel:{type:Function}},computed:{selectedValues(){return this.selected.map(e=>"object"==typeof e?e.name:e)},optionsClass(){return{single:this.single,multiple:!this.single&&!this.multiColumn,"multi-lines":!this.single&&this.multiColumn}},radioStyle(){const e={size:"medium",gap:12};return this.multiColumn||(e.size="large",e.gap=16),e}},data:()=>({selected:[],isFirst:!0}),methods:{handleConfirm(){this.handleCancel(),this.confirm?this.confirm(this.selected):this.$emit("confirm",this.selected)},handleCancel(){this.cancel?this.cancel():this.$emit("cancel")},getOptionName:e=>"object"==typeof e?e.name.toString():e.toString(),isSelected(e){let t=!0;return t="object"==typeof e?Object.values(this.selectedValues).includes(e.name):this.selected.includes(e),t},handleSelected(e){this.isSelected(e)?this.cancelSelected(e):this.addSelected(e),this.$emit("click",this.selected),this.single&&this.handleConfirm()},getSelectedIndex(e){let t=-1;return t="object"==typeof e?Object.values(this.selectedValues).indexOf(e.name):this.selected.indexOf(e),t},cancelSelected(e){const t=this.getSelectedIndex(e);t>=0&&this.selected.splice(t,1)},addSelected(e){this.single?this.selected=[e]:this.selected.push(e)},clear(){if(this.selected=[],this.isFirst=!0,!this.single)for(const e in this.$refs.radio)this.$refs.radio[e].clear()},setDefault(){this.default.length&&(this.selected=this.default)}},watch:{visible(e,t){e&&e!==t&&this.isFirst&&(this.$nextTick(()=>{this.setDefault()}),this.isFirst=!1)}}}),r=(n(418),n(5)),u=Object(r.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("PopupBox",{attrs:{visible:e.visible,maskClosable:e.maskClosable,title:e.title,subTitle:e.subTitle},on:{"update:visible":function(t){e.visible=t},cancel:e.handleCancel}},[n("div",{staticClass:"popup-option-wrapper",class:{"multi-wrapper":!e.single}},[e._l(e.options,(function(t,i){return n("div",{key:i,staticClass:"popup-option",class:e.optionsClass,on:{click:function(n){return e.handleSelected(t)}}},[e.single?n("div",{staticClass:"single-option holo-icon",class:{active:e.isSelected(t)}},[n("div",{staticClass:"text"},[e._v(" "+e._s(e.getOptionName(t))+" ")])]):n("div",{staticClass:"multi-option"},[n("Radio",{ref:"radio",refInFor:!0,attrs:{label:e.getOptionName(t),size:e.radioStyle.size,gap:e.radioStyle.gap,default:e.isSelected(t)}}),e._v(" "),!e.multiColumn&&t.desc?n("p",{staticClass:"desc"},[e._v(e._s(t.desc))]):e._e()],1)])})),e._v(" "),e.single?e._e():n("Button",{on:{click:e.handleConfirm}},[e._v("确定")])],2)])}),[],!1,null,"ac2a0b98",null).exports;var p={install:function(e){e.prototype.$popupOption=function(e){const t=Object(l.a)(u,{visible:!1,options:[],title:"标题"});t.props={...e,confirm:t=>{console.log(t),e.confirm&&e.confirm(t)},cancel:()=>{t.props&&(t.props.visible=!1,t.$el.remove()),e.cancel&&e.cancel()},visible:!0}}}};i.a.use(p);var d=i.a.extend({name:"PopupOptionDemo",components:{OButton:s.a},props:{currentDemo:{type:Number}},mounted(){},methods:{handlePopupOption(e){this.$popupOption({title:"请选择",subTitle:"你可以不写我的",options:["西瓜","凤梨","老虎"],...e,confirm(e){console.log("selected",e)}})}}}),m=(n(419),Object(r.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[0===e.currentDemo?n("section",[e._v("\n    单选：\n\n    "),n("OButton",{attrs:{size:"small"},on:{click:function(t){return e.handlePopupOption({single:!0})}}},[e._v("点击")])],1):e._e(),e._v(" "),4===e.currentDemo?n("section",[e._v("\n    单选（默认选中）：\n\n    "),n("OButton",{attrs:{size:"small"},on:{click:function(t){return e.handlePopupOption({single:!0,default:["凤梨"]})}}},[e._v("点击")])],1):e._e(),e._v(" "),3===e.currentDemo?n("section",[e._v("\n    多选：\n\n    "),n("OButton",{attrs:{size:"small"},on:{click:function(t){return e.handlePopupOption({subTitle:""})}}},[e._v("点击")])],1):e._e(),e._v(" "),5===e.currentDemo?n("section",[e._v("\n    多选（默认选中）：\n\n    "),n("OButton",{attrs:{size:"small"},on:{click:function(t){return e.handlePopupOption({subTitle:"",default:["凤梨","老虎"]})}}},[e._v("点击")])],1):e._e(),e._v(" "),1===e.currentDemo?n("section",[e._v("\n    多选：（显示补充说明）\n\n    "),n("OButton",{attrs:{size:"small"},on:{click:function(t){return e.handlePopupOption({subTitle:"",options:[{name:"选项1",desc:"我是个冇得表情的描述"},{name:"选项2",desc:"我是个冇得表情的描述"},{name:"选项3",desc:"我是个冇得表情的描述"},{name:"选项4",desc:"我是个冇得表情的描述"},{name:"选项5",desc:"我是个冇得表情的描述"}]})}}},[e._v("点击")])],1):e._e(),e._v(" "),2===e.currentDemo?n("section",[e._v("\n\n    多选：（多行选项）\n\n    "),n("OButton",{attrs:{size:"small"},on:{click:function(t){return e.handlePopupOption({multiColumn:!0,subTitle:""})}}},[e._v("点击")])],1):e._e()])}),[],!1,null,"2c64b3f8",null));t.default=m.exports}}]);