(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fabuhuiyi/add-or-update"],{"278d":function(e,n,i){"use strict";i.r(n);var r=i("b672"),t=i.n(r);for(var u in r)"default"!==u&&function(e){i.d(n,e,(function(){return r[e]}))}(u);n["default"]=t.a},"341e":function(e,n,i){"use strict";(function(e){i("1481");r(i("66fd"));var n=r(i("d753"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,i("543d")["createPage"])},"83e4":function(e,n,i){},"95ac":function(e,n,i){"use strict";var r=i("83e4"),t=i.n(r);t.a},b672:function(e,n,i){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(i("a34a"));function t(e){return e&&e.__esModule?e:{default:e}}function u(e,n,i,r,t,u,a){try{var o=e[u](a),c=o.value}catch(s){return void i(s)}o.done?n(c):Promise.resolve(c).then(r,t)}function a(e){return function(){var n=this,i=arguments;return new Promise((function(r,t){var a=e.apply(n,i);function o(e){u(a,r,t,o,c,"next",e)}function c(e){u(a,r,t,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("1b74"))}.bind(null,i)).catch(i.oe)},c={data:function(){return{ruleForm:{huiyimingcheng:"",huiyishijian:"",huiyididian:"",huiyirenshu:"",fengmian:"",huiyineirong:"",zhanghao:"",xingming:"",userid:""},user:{},ro:{huiyimingcheng:!1,huiyishijian:!1,huiyididian:!1,huiyirenshu:!1,fengmian:!1,huiyineirong:!1,zhanghao:!1,xingming:!1,clicktime:!1,clicknum:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var i=this;return a(r.default.mark((function t(){var u,a,o,c;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return u=e.getStorageSync("nowTable"),t.next=3,i.$api.session(u);case 3:if(a=t.sent,i.user=a.data,i.ruleForm.zhanghao=i.user.zhanghao,i.ruleForm.xingming=i.user.xingming,i.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(i.ruleForm.refid=n.refid,i.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=15;break}return i.ruleForm.id=n.id,t.next=13,i.$api.info("fabuhuiyi",i.ruleForm.id);case 13:a=t.sent,i.ruleForm=a.data;case 15:if(!n.cross){t.next=66;break}o=e.getStorageSync("crossObj"),t.t0=r.default.keys(o);case 18:if((t.t1=t.t0()).done){t.next=66;break}if(c=t.t1.value,"huiyimingcheng"!=c){t.next=24;break}return i.ruleForm.huiyimingcheng=o[c],i.ro.huiyimingcheng=!0,t.abrupt("continue",18);case 24:if("huiyishijian"!=c){t.next=28;break}return i.ruleForm.huiyishijian=o[c],i.ro.huiyishijian=!0,t.abrupt("continue",18);case 28:if("huiyididian"!=c){t.next=32;break}return i.ruleForm.huiyididian=o[c],i.ro.huiyididian=!0,t.abrupt("continue",18);case 32:if("huiyirenshu"!=c){t.next=36;break}return i.ruleForm.huiyirenshu=o[c],i.ro.huiyirenshu=!0,t.abrupt("continue",18);case 36:if("fengmian"!=c){t.next=40;break}return i.ruleForm.fengmian=o[c],i.ro.fengmian=!0,t.abrupt("continue",18);case 40:if("huiyineirong"!=c){t.next=44;break}return i.ruleForm.huiyineirong=o[c],i.ro.huiyineirong=!0,t.abrupt("continue",18);case 44:if("zhanghao"!=c){t.next=48;break}return i.ruleForm.zhanghao=o[c],i.ro.zhanghao=!0,t.abrupt("continue",18);case 48:if("xingming"!=c){t.next=52;break}return i.ruleForm.xingming=o[c],i.ro.xingming=!0,t.abrupt("continue",18);case 52:if("clicktime"!=c){t.next=56;break}return i.ruleForm.clicktime=o[c],i.ro.clicktime=!0,t.abrupt("continue",18);case 56:if("clicknum"!=c){t.next=60;break}return i.ruleForm.clicknum=o[c],i.ro.clicknum=!0,t.abrupt("continue",18);case 60:if("userid"!=c){t.next=64;break}return i.ruleForm.userid=o[c],i.ro.userid=!0,t.abrupt("continue",18);case 64:t.next=18;break;case 66:i.styleChange();case 67:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},fengmianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.fengmian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return a(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.ruleForm.huiyirenshu||e.$validate.isIntNumer(e.ruleForm.huiyirenshu)){n.next=3;break}return e.$utils.msg("会议人数应输入整数"),n.abrupt("return");case 3:if(!e.ruleForm.clicknum||e.$validate.isIntNumer(e.ruleForm.clicknum)){n.next=6;break}return e.$utils.msg("点击次数应输入整数"),n.abrupt("return");case 6:if(!e.ruleForm.id){n.next=11;break}return n.next=9,e.$api.update("fabuhuiyi",e.ruleForm);case 9:n.next=13;break;case 11:return n.next=13,e.$api.add("fabuhuiyi",e.ruleForm);case 13:e.$utils.msgBack("提交成功");case 14:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,i=n.getFullYear(),r=n.getMonth()+1,t=n.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),r=r>9?r:"0"+r,t=t>9?t:"0"+t,"".concat(i,"-").concat(r,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,i("543d")["default"])},d753:function(e,n,i){"use strict";i.r(n);var r=i("eb27"),t=i("278d");for(var u in t)"default"!==u&&function(e){i.d(n,e,(function(){return t[e]}))}(u);i("95ac");var a,o=i("f0c5"),c=Object(o["a"])(t["default"],r["b"],r["c"],!1,null,"069dcb43",null,!1,r["a"],a);n["default"]=c.exports},eb27:function(e,n,i){"use strict";i.d(n,"b",(function(){return t})),i.d(n,"c",(function(){return u})),i.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"1b74"))}},t=function(){var e=this,n=e.$createElement;e._self._c},u=[]}},[["341e","common/runtime","common/vendor"]]]);