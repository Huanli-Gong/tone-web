(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[5006],{59e3:function(w){w.exports={code_wrapper:"code_wrapper___3eANK"}},69183:function(w){w.exports={cover:"cover___3PIkw"}},27692:function(w){w.exports={form_row:"form_row___2OHoq",page_body_nav:"page_body_nav___3fjrQ",content:"content___1JHhA",ItemRow:"ItemRow___3Pd62",label:"label___3ze5r",text:"text___3XHaA",end:"end___3T4C2",edit:"edit___1o3_X"}},11002:function(w){w.exports={ConsoleDrawer_content:"ConsoleDrawer_content___3vESK"}},67090:function(w){w.exports={ItemRow:"ItemRow___1zdJT",label:"label___2A0Xc",text:"text___2oRv7",end:"end___24qet"}},3229:function(w){w.exports={ellipsis:"ellipsis___1UnIi"}},17638:function(w){w.exports={ArrowSolidGrey:"ArrowSolidGrey___3yVpA",ArrowSolidBlue:"ArrowSolidBlue___3eVb8",TemplateItemBlue:"TemplateItemBlue___1xj-Q",TemplateItemGrey:"TemplateItemGrey___Ej_ai"}},41170:function(w){w.exports={popover_group:"popover_group___j2Kz6",job_compare:"job_compare___3XF0q",title:"title___3eiur",job_card:"job_card___1MV_c",job_index:"job_index___24peF",job_detail:"job_detail___37loK",job_id:"job_id___6_EU3",job_creator:"job_creator___3dH-U",remove_active:"remove_active___1zgwl",remove:"remove___i7J9x",job_delete:"job_delete___2EJje",job_group:"job_group___3L14X",job_group_title:"job_group_title___crAIG",job_item:"job_item___2Yq-b",job_item_span:"job_item_span___31i5J",delete:"delete___3vces",operate:"operate___264-O",popover_job:"popover_job___TPuXS",hrefUrl:"hrefUrl___fKrDG",row_table:"row_table___fqOAE",question_icon:"question_icon___39kbo"}},17286:function(w,ve,r){"use strict";var we=r(61679),Pe=r.n(we),Ge=r(4974),se=r.n(Ge),Fe=r(51935),de=r.n(Fe),fe=r(48304),J=r(59e3),he=r.n(J),me=r(52454);ve.Z=function(U){var $=U.code,E=U.onChange,F=U.readOnly,R=F===void 0?!1:F,p=U.mode,d=p===void 0?"shell":p;return(0,me.jsx)(fe.fk,{value:$,className:he().code_wrapper,options:{theme:"monokai",keyMap:"sublime",lineNumbers:d==="yaml",mode:d,readOnly:R},onBeforeChange:function(m,z,Re){return E(Re)}})}},22911:function(w,ve,r){"use strict";r.d(ve,{Z:function(){return De}});var we=r(57359),Pe=r(34423),Ge=r(46721),se=r(94867),Fe=r(8281),de=r(58591),fe=r(69230),J=r(33821),he=r(67448),me=r(47548),U=r(35832),$=r(32326),E=r(39190),F=r(22374),R=r(24812),p=r(22812);function d(pe){return(0,p.WY)("/api/auth/user/",{params:pe})}var c=r(69183),m=r.n(c),z=r(52454),Re=function(ae){var le=ae.confirm,T=ae.onConfirm,et=ae.value,tt=ae.page_size,g=ae.mode,Oe=g===void 0?"multiple":g,je=(0,R.UO)(),Y=je.ws_id,nt=(0,F.useState)([]),Je=(0,E.Z)(nt,2),Se=Je[0],D=Je[1],e=(0,F.useState)(),Ae=(0,E.Z)(e,2),Me=Ae[0],rt=Ae[1],Ye=(0,F.useState)(),Ze=(0,E.Z)(Ye,2),Be=Ze[0],Te=Ze[1],We=(0,F.useState)(!0),_e=(0,E.Z)(We,2),ke=_e[0],Ue=_e[1],$e=(0,F.useState)(!1),X=(0,E.Z)($e,2),Ke=X[0],He=X[1],ge=function(){var K=(0,$.Z)((0,U.Z)().mark(function Ne(Ie){var be,ze,Le;return(0,U.Z)().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:if(be=Ie&&Ie.replace(/\s*/g,""),!(Me&&Me==be)){te.next=3;break}return te.abrupt("return");case 3:return rt(be),Ue(!0),te.next=7,d({ws_id:Y,keyword:be,page_size:tt||10,page_num:1});case 7:ze=te.sent,Le=ze.data,D(Array.isArray(Le)?Le:[]),Ue(!1);case 11:case"end":return te.stop()}},Ne)}));return function(Ie){return K.apply(this,arguments)}}();(0,F.useEffect)(function(){ge()},[]);var Xe=function(){ge()};return(0,z.jsxs)("div",{style:{padding:8},children:[(0,z.jsx)("div",{className:m().cover,onClick:function(){Ke||le==null||le()}}),(0,z.jsx)(J.Z,{mode:Oe,allowClear:!0,notFoundContent:ke?(0,z.jsx)(me.Z,{size:"small"}):"Not Found",filterOption:!1,showSearch:!0,onSearch:ge,style:{width:"100%"},onChange:function(Ne){return Te(Ne)},onDeselect:Xe,onClear:Xe,showArrow:!1,autoFocus:!0,value:Be,onFocus:function(){He(!0)},onBlur:function(){setTimeout(function(){He(!1)},200)},options:Se==null?void 0:Se.map(function(K){return{label:K.last_name,value:K.id}})}),(0,z.jsx)(de.Z,{style:{marginTop:"10px",marginBottom:"4px"}}),(0,z.jsxs)(Pe.Z,{children:[(0,z.jsx)(se.Z,{onClick:function(){le==null||le(),T(Be)},type:"link",size:"small",style:{width:75},children:(0,z.jsx)(p._H,{id:"operation.search"})}),(0,z.jsx)(se.Z,{type:"text",onClick:function(){le==null||le(),Te(void 0),T(void 0),ge()},size:"small",style:{width:75,border:"none"},children:(0,z.jsx)(p._H,{id:"operation.reset"})})]})]})},De=Re},54533:function(w,ve,r){"use strict";r.r(ve),r.d(ve,{default:function(){return ni}});var we=r(67448),Pe=r(47548),Ge=r(46721),se=r(94867),Fe=r(31650),de=r(25100),fe=r(14320),J=r(53479),he=r(89963),me=r(70077),U=r(51937),$=r(34516),E=r(35832),F=r(32326),R=r(39190),p=r(41428),d=r(22374),c=r(97939),m=r(22812),z=r(526),Re=r(88018),De=r(58414),pe=r(90846),ae=r(56511),le=r(57359),T=r(34423),et=r(20693),tt=r(3278),g=r(65790),Oe=r(17187),je=r(93329),Y=r(39935),nt=function(n){return(0,m.WY)("/api/plan/result/detail/",{params:n})},Je=function(n){return(0,m.WY)("/api/plan/result/detail/",{data:n,method:"post"})},Se=r(27692),D=r.n(Se),e=r(52454),Ae=function(n){var a=n.name,t=a===void 0?"":a,l=n.children;return(0,e.jsxs)("div",{style:{width:"100%",display:"flex"},children:[(0,e.jsx)("div",{style:{width:100,marginRight:8,textAlign:"right"},children:(0,e.jsx)("b",{children:t})}),(0,e.jsx)("div",{style:{width:"calc(100% - 100px - 8px)"},children:l})]})},Me=(0,d.forwardRef)(function(i,n){var a,t,l,o,C,Z,h,I,O,y,j,k,A,v,x,L,V,ce,lt=(0,m.YB)(),u=lt.formatMessage,ue=Oe.Z.useForm(),Ve=(0,R.Z)(ue,1),G=Ve[0],M=(0,d.useState)(!1),Q=(0,R.Z)(M,2),q=Q[0],oe=Q[1],xe=(0,d.useState)(!1),ot=(0,R.Z)(xe,2),B=ot[0],bn=ot[1],ri=(0,d.useState)(!1),yn=(0,R.Z)(ri,2),Cn=yn[0],ft=yn[1],ii=(0,d.useState)(""),En=(0,R.Z)(ii,2),ai=En[0],li=En[1],oi=(0,d.useState)({}),Pn=(0,R.Z)(oi,2),s=Pn[0],On=Pn[1],Sn=s.kernel_info,st=Sn===void 0?{}:Sn,Zn=s.rpm_info,ht=Zn===void 0?{}:Zn,In=s.build_pkg_info,Ee=In===void 0?{}:In;(0,d.useImperativeHandle)(n,function(){return{show:function(){var ne=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",re=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};bn(!0),On(re)}}});var si=function(){var ee=(0,F.Z)((0,E.Z)().mark(function ne(re){var ie;return(0,E.Z)().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.prev=0,oe(!0),W.next=4,Je(re);case 4:if(W.t0=W.sent,W.t0){W.next=7;break}W.t0={};case 7:ie=W.t0,ie.code===200?(ft(!1),li(re.note)):(0,Y.EV)(ie.code,ie.msg),oe(!1),W.next=15;break;case 12:W.prev=12,W.t1=W.catch(0),oe(!1);case 15:case"end":return W.stop()}},ne,null,[[0,12]])}));return function(re){return ee.apply(this,arguments)}}(),di=function(){bn(!1),On({}),ft(!1)},pi=function(){ft(!0)},ci=function(){ft(!1)},ui=function(){G.validateFields().then(function(){var ne=(0,F.Z)((0,E.Z)().mark(function re(ie){return(0,E.Z)().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:i==null||i.callback({data:ie.note,editFn:si});case 1:case"end":return W.stop()}},re)}));return function(re){return ne.apply(this,arguments)}}())},vi=function(){return(0,e.jsx)(e.Fragment,{children:Cn?(0,e.jsx)("div",{style:{marginTop:-4},children:(0,e.jsxs)(Oe.Z,{form:G,layout:"inline",children:[(0,e.jsx)(Oe.Z.Item,{name:"note",rules:[{required:!0,message:u({id:"plan.note.message"})},{max:500,message:u({id:"plan.note.max"})}],children:(0,e.jsx)(tt.Z,{size:"small",style:{width:200},placeholder:u({id:"please.enter"})})}),(0,e.jsx)(Oe.Z.Item,{children:(0,e.jsxs)(T.Z,{children:[(0,e.jsx)(se.Z,{onClick:ci,size:"small",children:(0,e.jsx)(m._H,{id:"operation.cancel"})}),(0,e.jsx)(se.Z,{onClick:ui,size:"small",type:"primary",children:(0,e.jsx)(m._H,{id:"operation.ok"})})]})})]})}):(0,e.jsx)(je.Z,{onClick:pi,style:{marginLeft:8,color:"#1890ff"}})})},f=function(ne){var re=ne.label,ie=ne.text,qe=ne.type;return ie?(0,e.jsxs)("div",{className:D().ItemRow,children:[(0,e.jsx)("div",{className:D().label,children:re}),(0,e.jsxs)("div",{className:"".concat(D().text," ").concat(D()[qe]),children:[Cn&&qe==="edit"?null:(0,Y.CB)(ie)?(0,e.jsx)("a",{target:"__blank",href:ie,children:ie}):qe==="edit"&&ai||ie,qe==="edit"?(0,e.jsx)(vi,{}):null]})]}):(0,e.jsx)(e.Fragment,{})};return(0,e.jsx)(De.Z,{maskStyle:{opacity:0,animation:"unset"},maskClosable:!0,keyboard:!1,title:(0,e.jsx)(m._H,{id:"plan.configuration"}),width:900,onClose:q?function(){}:di,visible:B,footer:null,children:(0,e.jsxs)("div",{children:[(0,e.jsxs)(J.Z,{className:D().form_row,children:[(0,e.jsx)("div",{className:D().page_body_nav,children:(0,e.jsx)("span",{children:(0,e.jsx)(m._H,{id:"plan.basic.info"})})}),(0,e.jsxs)("div",{className:D().content,children:[(0,e.jsx)(f,{label:u({id:"plan.name"}),text:s==null?void 0:s.name}),(0,e.jsx)(f,{label:u({id:"plan.creator_name"}),text:s.creator_name}),(0,e.jsx)(f,{label:u({id:"plan.project_name"}),text:s.project_name}),(0,e.jsx)(f,{label:u({id:"plan.description"}),text:(s==null?void 0:s.description)||u({id:"plan.width.out"})}),(0,e.jsx)(f,{label:u({id:"plan.notice_name"}),text:(s==null||(a=s.plan_config_info)===null||a===void 0?void 0:a.notice_name)||((s==null||(t=s.plan_config_info)===null||t===void 0?void 0:t.email_info)||(s==null||(l=s.plan_config_info)===null||l===void 0?void 0:l.ding_talk_info))&&"[T-one]\u4F60\u7684\u6D4B\u8BD5\u5DF2\u5B8C\u6210{date}"||u({id:"plan.width.out"})}),(0,e.jsx)(f,{label:u({id:"plan.email_info"}),text:(s==null||(o=s.plan_config_info)===null||o===void 0?void 0:o.email_info)||u({id:"plan.width.out"})}),(0,e.jsx)(f,{label:u({id:"plan.ding_talk_info"}),text:(s==null||(C=s.plan_config_info)===null||C===void 0?void 0:C.ding_talk_info)||u({id:"plan.width.out"})}),(0,e.jsx)(f,{label:u({id:"plan.generate.reports"}),text:(0,e.jsx)("span",{style:{paddingLeft:4},children:s!=null&&s.auto_report?(0,e.jsx)(ae.Z,{status:"processing",text:(0,e.jsx)(m._H,{id:"operation.yes"})}):(0,e.jsx)(ae.Z,{status:"default",text:(0,e.jsx)(m._H,{id:"operation.no"})})})}),(s==null?void 0:s.auto_report)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(f,{label:u({id:"plan.test.report_name"}),text:(s==null||(Z=s.plan_config_info)===null||Z===void 0?void 0:Z.report_name)||"{plan_name}_report-{report_seq_id}"}),(0,e.jsx)(f,{label:u({id:"plan.report_template_name"}),text:(s==null||(h=s.plan_config_info)===null||h===void 0?void 0:h.report_template_name)||u({id:"plan.width.out"})}),(0,e.jsx)(f,{label:u({id:"plan.report_description"}),text:(s==null||(I=s.plan_config_info)===null||I===void 0?void 0:I.report_description)||u({id:"plan.width.out"})})]}),(0,e.jsx)(f,{label:u({id:"plan.enable"}),text:(0,e.jsx)("span",{style:{paddingLeft:4},children:s!=null&&(O=s.plan_config_info)!==null&&O!==void 0&&O.enable?(0,e.jsx)(ae.Z,{status:"processing",text:(0,e.jsx)(m._H,{id:"operation.yes"})}):(0,e.jsx)(ae.Z,{status:"default",text:(0,e.jsx)(m._H,{id:"operation.no"})})})}),(0,e.jsx)(f,{label:u({id:"plan.start_time"}),text:s.start_time}),(0,e.jsx)(f,{label:u({id:"plan.end_time"}),text:s.end_time}),(0,e.jsx)(f,{label:u({id:"plan.remarks"}),text:s.note,type:"edit"})]})]}),!!Object.keys(Ee).length||!!Object.keys(st).length||!!Object.keys(ht).length||s.env_info||s!=null&&(y=s.plan_config_info)!==null&&y!==void 0&&y.func_baseline_name||s!=null&&(j=s.plan_config_info)!==null&&j!==void 0&&j.perf_baseline_name?(0,e.jsxs)(J.Z,{className:D().form_row,children:[(0,e.jsx)("div",{className:D().page_body_nav,children:(0,e.jsx)("span",{children:(0,e.jsx)(m._H,{id:"plan.public.config"})})}),(0,e.jsxs)("div",{className:D().content,children:[(0,e.jsx)(f,{label:u({id:"plan.func_baseline"}),text:s==null||(k=s.plan_config_info)===null||k===void 0?void 0:k.func_baseline_name}),(0,e.jsx)(f,{label:u({id:"plan.perf_baseline"}),text:s==null||(A=s.plan_config_info)===null||A===void 0?void 0:A.perf_baseline_name}),!!Object.keys(Ee).length&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(f,{label:u({id:"plan.code_repo"}),text:Ee.code_repo}),(0,e.jsx)(f,{label:u({id:"plan.code_branch"}),text:Ee.code_branch}),(0,e.jsx)(f,{label:u({id:"plan.compile_branch"}),text:Ee.compile_branch}),(0,e.jsx)(f,{label:"CpuArch",text:Ee.cpu_arch}),(0,e.jsx)(f,{label:"Commit ID",text:Ee.commit_id}),(0,e.jsx)(f,{label:"Build Config",text:Ee.build_config}),(0,e.jsx)(f,{label:"Build Machine",text:Ee.build_machine})]}),!!Object.keys(st).length&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(f,{label:u({id:"plan.kernel_version"}),text:s.kernel_version}),(0,e.jsx)(f,{label:u({id:"plan.kernel.pkg"}),text:st.kernel}),(0,e.jsx)(f,{label:u({id:"plan.devel"}),text:st.devel}),(0,e.jsx)(f,{label:u({id:"plan.headers"}),text:st.headers})]}),!!Object.keys(ht).length&&(0,e.jsx)(f,{label:u({id:"plan.rpm.package"}),text:ht.rpm}),!!s.env_info&&(0,e.jsx)(f,{label:u({id:"plan.env_info"}),text:s.env_info,type:"end"})]})]}):null,(0,e.jsxs)(J.Z,{className:D().form_row,children:[(0,e.jsx)("div",{className:D().page_body_nav,children:(0,e.jsx)("span",{children:(0,e.jsx)(m._H,{id:"plan.test.configuration"})})}),(0,e.jsxs)("div",{className:D().content,children:[(0,e.jsx)(Ae,{name:s==null||(v=s.plan_config_info)===null||v===void 0||(x=v.env_prep)===null||x===void 0?void 0:x.name,children:s==null||(L=s.plan_config_info)===null||L===void 0||(V=L.env_prep)===null||V===void 0?void 0:V.machine_info.map(function(ee,ne){return(0,e.jsx)("div",{children:(0,e.jsxs)(T.Z,{children:[(0,e.jsx)("span",{children:ee.machine}),(0,e.jsx)("span",{children:ee.script})]})},ne)})}),(s==null?void 0:s.test_result)&&(s==null?void 0:s.test_result.length)>0&&s.test_result.map(function(ee,ne){return(0,e.jsx)(Ae,{name:ee.name,children:ee.template_result.map(function(re){return(0,e.jsx)("div",{children:re.tmpl_name},re.tmpl_name)})},ne)})]})]}),(0,e.jsxs)(J.Z,{className:D().form_row,children:[(0,e.jsx)("div",{className:D().page_body_nav,children:(0,e.jsx)("span",{children:(0,e.jsx)(m._H,{id:"plan.trigger.configuration"})})}),(0,e.jsx)("div",{className:D().content,children:(0,e.jsx)(f,{label:u({id:"plan.trigger.configuration"}),text:((ce=s.plan_config_info)===null||ce===void 0?void 0:ce.cron_info)||u({id:"plan.width.out"})})})]})]})})}),rt=Me,Ye=r(38755),Ze,Be,Te,We,_e,ke,Ue,$e,X,Ke,He,ge,Xe=c.ZP.div(Ze||(Ze=(0,p.Z)([`
    height: 38px;
    width: 100%;
    display: flex;
    position: relative;
`]))),K=c.ZP.div(Be||(Be=(0,p.Z)([`
    height: 12px;
    width: 12px;
    background: #1890FF; //#CECECE;
    border-radius: 24px;
    margin-top: -5px;
`]))),Ne=c.ZP.div(Te||(Te=(0,p.Z)([`
    height: 12px;
    width: 12px;
    background: #1890FF;
    border: 1px solid #1890FF;
    border-radius: 24px;
    margin-top: -5px;
`]))),Ie=c.ZP.div(We||(We=(0,p.Z)([`
    height: 12px;
    width: 12px;
    background: #CECECE;
    border: 1px solid #CECECE;
    border-radius: 24px;
    margin-top: -5px;
`]))),be=c.ZP.div(_e||(_e=(0,p.Z)([`
  width: 0px;
  height: 0px;
  display: inline-block;
  border-left: 5px solid #1890FF;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid transparent;
  margin-top: -4px;
  margin-right: -8px;
`]))),ze=c.ZP.div(ke||(ke=(0,p.Z)([`
  padding-left: 67px;
  padding-right: 4px;
  height: 100%;
`]))),Le=c.ZP.div(Ue||(Ue=(0,p.Z)([`
  margin-top: 20px;
  width: 77px;
  height: 2px;
  background: #1890FF;
  display: flex;
  justify-content: space-between;
`]))),Qe=c.ZP.div($e||($e=(0,p.Z)([`
    font-size: 16px;
    color: rgba(0,0,0,.65);
    margin-top: 16px;
    margin-left: -12px;
`]))),te=c.ZP.div(X||(X=(0,p.Z)([`
  padding-right: 67px;
`]))),mt=(0,c.ZP)(Ye.Z)(Ke||(Ke=(0,p.Z)([`
  color:#1890FF;
  cursor:pointer;
  background:#fff;
  border-radius:50%;
  font-size: 12px;
  //
  position:absolute;
  top : 50%;
  left : 6px;
  transform:translate(-50% , -4px);
`]))),_t=c.ZP.div(He||(He=(0,p.Z)([`
  width: 50px;
  margin-left: -6px;
  opacity: 0.65;
  font-family: PingFangSC-Medium;
  font-size: 16px;
`]))),jt=c.ZP.div(ge||(ge=(0,p.Z)([`
    width:2px;
    height:`,`px;
`])),function(i){return i.index*30}),it,gt=["svgRef","title"];function ye(){return ye=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(i[t]=a[t])}return i},ye.apply(this,arguments)}function H(i,n){if(i==null)return{};var a=_(i,n),t,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(l=0;l<o.length;l++)t=o[l],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,t)||(a[t]=i[t]))}return a}function _(i,n){if(i==null)return{};var a={},t=Object.keys(i),l,o;for(o=0;o<t.length;o++)l=t[o],!(n.indexOf(l)>=0)&&(a[l]=i[l]);return a}var b=function(n){var a=n.svgRef,t=n.title,l=H(n,gt);return d.createElement("svg",ye({width:"24px",height:"24px",viewBox:"0 0 24 24",ref:a},l),t?d.createElement("title",null,t):null,it||(it=d.createElement("g",{id:"\\u521B\\u5EFA\\u8BA1\\u5212",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},d.createElement("g",{id:"\\u4E0D\\u5728\\u8FD0\\u884C",fill:"#CECECE"},d.createElement("path",{d:"M11.8405316,0 C15.3289037,0.0897009787 18.2093023,1.26578072 20.4717608,3.5282392 C22.7342193,5.79069767 23.910299,8.67109634 24,12.1594684 C23.910299,15.4883721 22.7342193,18.269103 20.4717608,20.5116279 C18.2093023,22.7541528 15.3289037,23.910299 11.8405316,24 C8.51162792,23.910299 5.730897,22.744186 3.48837209,20.5116279 C1.24584718,18.269103 0.0897010063,15.4883721 0,12.1594684 C0.0897010063,8.67109634 1.25581395,5.80066444 3.48837209,3.5282392 C5.730897,1.26578072 8.51162789,0.0897009787 11.8405316,0 Z M16.921875,11.34375 L7.078125,11.34375 C6.68979979,11.34375 6.375,11.6585498 6.375,12.046875 C6.375,12.4352002 6.68979979,12.75 7.078125,12.75 L7.078125,12.75 L16.921875,12.75 C17.3102002,12.75 17.625,12.4352002 17.625,12.046875 C17.625,11.6585498 17.3102002,11.34375 16.921875,11.34375 L16.921875,11.34375 Z",id:"\\u5F62\\u72B6\\u7ED3\\u5408"})))))},S=d.forwardRef(function(i,n){return d.createElement(b,ye({svgRef:n},i))}),N=r.p+"static/minus.5afdd99b.svg",P,xt=["svgRef","title"];function Ce(){return Ce=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(i[t]=a[t])}return i},Ce.apply(this,arguments)}function Ln(i,n){if(i==null)return{};var a=wn(i,n),t,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(l=0;l<o.length;l++)t=o[l],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,t)||(a[t]=i[t]))}return a}function wn(i,n){if(i==null)return{};var a={},t=Object.keys(i),l,o;for(o=0;o<t.length;o++)l=t[o],!(n.indexOf(l)>=0)&&(a[l]=i[l]);return a}var Fn=function(n){var a=n.svgRef,t=n.title,l=Ln(n,xt);return d.createElement("svg",Ce({width:"24px",height:"24px",viewBox:"0 0 24 24",ref:a},l),t?d.createElement("title",null,t):null,P||(P=d.createElement("g",{id:"\\u521B\\u5EFA\\u8BA1\\u5212",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},d.createElement("g",{id:"complete",fill:"#81BF84"},d.createElement("path",{d:"M11.8405316,0 C15.3289037,0.0897009787 18.2093023,1.26578072 20.4717608,3.5282392 C22.7342193,5.79069767 23.910299,8.67109634 24,12.1594684 C23.910299,15.4883721 22.7342193,18.269103 20.4717608,20.5116279 C18.2093023,22.7541528 15.3289037,23.910299 11.8405316,24 C8.51162792,23.910299 5.730897,22.744186 3.48837209,20.5116279 C1.24584718,18.269103 0.0897010063,15.4883721 0,12.1594684 C0.0897010063,8.67109634 1.25581395,5.80066444 3.48837209,3.5282392 C5.730897,1.26578072 8.51162789,0.0897009787 11.8405316,0 Z M18.1319416,7.52855283 C17.8633235,7.25993473 17.4314357,7.2540952 17.155719,7.51103426 L17.1375727,7.52855283 L10.6741748,13.9919508 L6.86242729,10.1802033 C6.5878399,9.90561587 6.14264577,9.90561587 5.86805838,10.1802033 C5.59944028,10.4488214 5.59360076,10.8807091 5.85053981,11.1564259 L5.86805838,11.1745722 L10.1769903,15.4835041 C10.4456084,15.7521222 10.8774962,15.7579617 11.153213,15.5010227 L11.1713592,15.4835041 L18.1319416,8.52292174 C18.406529,8.24833435 18.406529,7.80314022 18.1319416,7.52855283 Z",id:"\\u5F62\\u72B6"})))))},Rn=d.forwardRef(function(i,n){return d.createElement(Fn,Ce({svgRef:n},i))}),fi=r.p+"static/complete.3316100f.svg",bt,Dn=["svgRef","title"];function dt(){return dt=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(i[t]=a[t])}return i},dt.apply(this,arguments)}function An(i,n){if(i==null)return{};var a=Mn(i,n),t,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(l=0;l<o.length;l++)t=o[l],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,t)||(a[t]=i[t]))}return a}function Mn(i,n){if(i==null)return{};var a={},t=Object.keys(i),l,o;for(o=0;o<t.length;o++)l=t[o],!(n.indexOf(l)>=0)&&(a[l]=i[l]);return a}var Bn=function(n){var a=n.svgRef,t=n.title,l=An(n,Dn);return d.createElement("svg",dt({width:"24px",height:"24px",viewBox:"0 0 24 24",ref:a},l),t?d.createElement("title",null,t):null,bt||(bt=d.createElement("g",{id:"\\u521B\\u5EFA\\u8BA1\\u5212",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},d.createElement("g",{id:"fail",fill:"#C84C5A"},d.createElement("path",{d:"M11.8405316,0 C15.3289037,0.0897009787 18.2093023,1.26578072 20.4717608,3.5282392 C22.7342193,5.79069767 23.910299,8.67109634 24,12.1594684 C23.910299,15.4883721 22.7342193,18.269103 20.4717608,20.5116279 C18.2093023,22.7541528 15.3289037,23.910299 11.8405316,24 C8.51162792,23.910299 5.730897,22.744186 3.48837209,20.5116279 C1.24584718,18.269103 0.0897010063,15.4883721 0,12.1594684 C0.0897010063,8.67109634 1.25581395,5.80066444 3.48837209,3.5282392 C5.730897,1.26578072 8.51162789,0.0897009787 11.8405316,0 Z M16.0106213,8.05566999 C15.7420032,7.78705188 15.3101154,7.78121236 15.0343986,8.03815141 L15.0162524,8.05566999 L12,11.0719223 L8.98374764,8.05566999 C8.70916024,7.78108259 8.26396612,7.78108259 7.98937873,8.05566999 C7.72076062,8.32428809 7.7149211,8.75617587 7.97186015,9.03189265 L7.98937873,9.0500389 L11.0056311,12.0662913 L8.05566999,15.0162524 C7.78108259,15.2908398 7.78108259,15.7360339 8.05566999,16.0106213 C8.32428809,16.2792394 8.75617587,16.2850789 9.03189265,16.0281398 L9.0500389,16.0106213 L12,13.0606602 L14.9499611,16.0106213 C15.2245485,16.2852087 15.6697426,16.2852087 15.94433,16.0106213 C16.2129481,15.7420032 16.2187876,15.3101154 15.9618486,15.0343986 L15.94433,15.0162524 L12.9943689,12.0662913 L16.0106213,9.0500389 C16.2852087,8.7754515 16.2852087,8.33025738 16.0106213,8.05566999 Z",id:"\\u5F62\\u72B6"})))))},Tn=d.forwardRef(function(i,n){return d.createElement(Bn,dt({svgRef:n},i))}),mi=r.p+"static/fail.f36126e8.svg",yt,Wn=["svgRef","title"];function pt(){return pt=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(i[t]=a[t])}return i},pt.apply(this,arguments)}function kn(i,n){if(i==null)return{};var a=Un(i,n),t,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(l=0;l<o.length;l++)t=o[l],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,t)||(a[t]=i[t]))}return a}function Un(i,n){if(i==null)return{};var a={},t=Object.keys(i),l,o;for(o=0;o<t.length;o++)l=t[o],!(n.indexOf(l)>=0)&&(a[l]=i[l]);return a}var $n=function(n){var a=n.svgRef,t=n.title,l=kn(n,Wn);return d.createElement("svg",pt({width:"24px",height:"24px",viewBox:"0 0 24 24",ref:a},l),t?d.createElement("title",null,t):null,yt||(yt=d.createElement("g",{id:"\\u521B\\u5EFA\\u8BA1\\u5212",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},d.createElement("g",{id:"pending",fill:"#CECECE"},d.createElement("path",{d:"M11.8405316,0 C15.3289037,0.0897009787 18.2093023,1.26578072 20.4717608,3.5282392 C22.7342193,5.79069767 23.910299,8.67109634 24,12.1594684 C23.910299,15.4883721 22.7342193,18.269103 20.4717608,20.5116279 C18.2093023,22.7541528 15.3289037,23.910299 11.8405316,24 C8.51162792,23.910299 5.730897,22.744186 3.48837209,20.5116279 C1.24584718,18.269103 0.0897010063,15.4883721 0,12.1594684 C0.0897010063,8.67109634 1.25581395,5.80066444 3.48837209,3.5282392 C5.730897,1.26578072 8.51162789,0.0897009787 11.8405316,0 Z M10.859375,5.4765625 C10.4710498,5.4765625 10.15625,5.79136229 10.15625,6.1796875 L10.15625,6.1796875 L10.15625,13.2109375 C10.15625,13.5992627 10.4710498,13.9140625 10.859375,13.9140625 L10.859375,13.9140625 L17.515625,13.9140625 C17.9039502,13.9140625 18.21875,13.5992627 18.21875,13.2109375 C18.21875,12.8226123 17.9039502,12.5078125 17.515625,12.5078125 L17.515625,12.5078125 L11.56225,12.5075625 L11.5625,6.1796875 C11.5625,5.79136229 11.2477002,5.4765625 10.859375,5.4765625 Z",id:"\\u5F62\\u72B6\\u7ED3\\u5408"})))))},Kn=d.forwardRef(function(i,n){return d.createElement($n,pt({svgRef:n},i))}),_i=r.p+"static/pending.dd9ecf42.svg",Ct,Hn=["svgRef","title"];function ct(){return ct=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(i[t]=a[t])}return i},ct.apply(this,arguments)}function Nn(i,n){if(i==null)return{};var a=zn(i,n),t,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(l=0;l<o.length;l++)t=o[l],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,t)||(a[t]=i[t]))}return a}function zn(i,n){if(i==null)return{};var a={},t=Object.keys(i),l,o;for(o=0;o<t.length;o++)l=t[o],!(n.indexOf(l)>=0)&&(a[l]=i[l]);return a}var Vn=function(n){var a=n.svgRef,t=n.title,l=Nn(n,Hn);return d.createElement("svg",ct({width:"24px",height:"24px",viewBox:"0 0 24 24",ref:a},l),t?d.createElement("title",null,t):null,Ct||(Ct=d.createElement("g",{id:"\\u521B\\u5EFA\\u8BA1\\u5212",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},d.createElement("g",{id:"running",fill:"#649FF6"},d.createElement("path",{d:"M11.8405316,0 C15.3289037,0.0897009787 18.2093023,1.26578072 20.4717608,3.5282392 C22.7342193,5.79069767 23.910299,8.67109634 24,12.1594684 C23.910299,15.4883721 22.7342193,18.269103 20.4717608,20.5116279 C18.2093023,22.7541528 15.3289037,23.910299 11.8405316,24 C8.51162792,23.910299 5.730897,22.744186 3.48837209,20.5116279 C1.24584718,18.269103 0.0897010063,15.4883721 0,12.1594684 C0.0897010063,8.67109634 1.25581395,5.80066444 3.48837209,3.5282392 C5.730897,1.26578072 8.51162789,0.0897009787 11.8405316,0 Z M11.9152824,5.625 C10.1468023,5.67265364 8.66953903,6.29744601 7.47819767,7.49937707 C6.29215116,8.70660298 5.67265366,10.2315199 5.625,12.0847176 C5.67265366,13.8531977 6.28685632,15.330461 7.47819767,16.5218023 C8.66953903,17.7078488 10.1468023,18.3273463 11.9152824,18.375 C13.7684801,18.3273463 15.2986919,17.7131437 16.5006229,16.5218023 C16.591536,16.4316902 16.6791472,16.3399423 16.7634563,16.2465562 L16.7634563,16.2465562 L15.6486531,15.379477 C15.602902,15.4283551 15.5559638,15.4766446 15.5078385,15.5243459 C14.5710392,16.4528914 13.3783742,16.9316082 11.9339701,16.96875 C10.5555959,16.9316082 9.40419954,16.4487645 8.47565407,15.5243459 C7.5471086,14.5958005 7.06839182,13.4444041 7.03125,12.0660299 C7.06839182,10.6216258 7.55123546,9.43308762 8.47565407,8.49216154 C9.40419954,7.55536233 10.5555959,7.06839181 11.9339701,7.03125 C13.3210509,7.06691779 14.4759775,7.51741857 15.3950951,8.38275236 L15.3950951,8.38275236 L14.0740654,9.6584317 L17.9137451,9.990659 L17.7157231,6.1417237 L16.4059065,7.40650835 C15.2186499,6.26524686 13.7201448,5.67141074 11.9152824,5.625 Z",id:"\\u5F62\\u72B6\\u7ED3\\u5408\\u5907\\u4EFD-3"})))))},Gn=d.forwardRef(function(i,n){return d.createElement(Vn,ct({svgRef:n},i))}),gi=r.p+"static/running.a6cbfb0f.svg",Jn=r(17638),Et=r.n(Jn),at=function(n){var a=n.params,t=a===void 0?"":a;return t==="pending"?(0,e.jsx)(Kn,{style:{color:"#CECECE",fontSize:26}}):t==="running"?(0,e.jsx)(Gn,{style:{color:"#CECECE",fontSize:26}}):t==="success"?(0,e.jsx)(Rn,{style:{color:"#81BF84",fontSize:26}}):t==="fail"?(0,e.jsx)(Tn,{style:{color:"#C84C5A",fontSize:26}}):t==="stop"?(0,e.jsx)(S,{style:{color:"#CECECE",fontSize:26}}):(0,e.jsx)(S,{style:{color:"#CECECE",fontSize:26}})},Pt=function(n){var a=n.borderColor,t=a===void 0?"#CECECE":a;return(0,e.jsx)("div",{className:Et()["".concat(t==="#1890FF"?"ArrowSolidBlue":"ArrowSolidGrey")]})},Ot=function(n){var a=n.borderColor,t=a===void 0?"#CECECE":a;return(0,e.jsx)("div",{className:Et()["".concat(t==="#1890FF"?"TemplateItemBlue":"TemplateItemGrey")],children:n.children})},xi=null,St,Zt,It,Lt,wt,Ft,Rt,Dt,At,Mt,Yn=c.ZP.div(St||(St=(0,p.Z)([`
    width: 398px;
    min-height: 100%;
    padding-right: 4px;
    display: inline-block;
    position: relative;
`]))),Xn=c.ZP.div(Zt||(Zt=(0,p.Z)([`
    height: 40px;
    width: 100%;
    position: relative;
    display: flex;
`]))),Qn=c.ZP.div(It||(It=(0,p.Z)([`
    height: 40px;
    width: 130px;
    background: #FFFFFF;
    border: 2px solid #1890FF;
    border-radius: 20px;
    outline:none;
    padding: 0 4px;
    font-size:16px;
    color: rgba(0,0,0,.65);
    //
    display: flex;
    align-items: center;
`]))),qn=c.ZP.div(Lt||(Lt=(0,p.Z)([`
    flex: 1;
    height: 2px;
    margin-top: 20px;
    background: #CECECE;
    display: flex;
    justify-content: space-between;
`]))),er=c.ZP.div(wt||(wt=(0,p.Z)([`
    height: 12px;
    width: 12px;
    background: #CECECE;
    border: 1px solid #CECECE;
    border-radius: 24px;
    margin-top: -5px;
`]))),tr=c.ZP.div(Ft||(Ft=(0,p.Z)([`
  width: 0px;
  height: 0px;
  display: inline-block;
  border-left: 5px solid #CECECE;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid transparent;
  margin-top: -4px;
  margin-right: -8px;
`]))),nr=c.ZP.div(Rt||(Rt=(0,p.Z)([`
    width: 100%;
    padding-top: 0px;
    padding-right: 35px;
`]))),rr=c.ZP.div(Dt||(Dt=(0,p.Z)([`
    line-height: 22px;
    margin-left: 7px;
`]))),ir=c.ZP.div(At||(At=(0,p.Z)([`
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 4px;
  padding: 12px;
  width: 100%;
  margin-top: 12px;
   font-family: PingFangSC-Regular;
   font-size: 14px;
   color: #000;
   line-height: 22px;
   // \u591A\u884C\u6587\u672C\u7701\u7565
   overflow: hidden; 
   text-overflow: ellipsis; 
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
`]))),hi=c.ZP.div(Mt||(Mt=(0,p.Z)([`
    width:2px;
    height:`,`px;
`])),function(i){return i.index*30}),ar=r(67090),ut=r.n(ar),lr=function(n){var a,t=(0,m.YB)(),l=t.formatMessage,o=n.data,C=n.mainStatus,Z=o||{},h=Z.state,I=(0,Y.mA)(h,null),O=(0,Y.I9)(h),y=C?"#1890FF":O,j=C&&h==="pending"?"stop":h,k=function(v){return v==="pending"?{display:"none"}:v==="running"||v==="success"?{}:v==="fail"?{background:"rgba(245,34,45,0.05)",border:"1px solid rgba(245,34,45,0.45)"}:{}}(h),A=function(x){var L=x.label,V=x.text,ce=x.type;return(0,e.jsxs)("div",{className:ut().ItemRow,children:[(0,e.jsx)("div",{className:ut().label,children:L}),(0,e.jsx)("div",{className:"".concat(ut().text," ").concat(ut()[ce]),children:(0,Y.CB)(V)?(0,e.jsx)("a",{target:"__blank",href:V,children:V}):V})]})};return(0,e.jsx)(e.Fragment,{children:o&&Object.keys(o).length?(0,e.jsxs)(Yn,{children:[(0,e.jsxs)(Xn,{children:[(0,e.jsxs)(Qn,{style:{border:"2px solid ".concat(I)},children:[(0,e.jsx)(at,{params:j}),(0,e.jsx)(rr,{children:(0,e.jsx)(m._H,{id:"plan.build.stage"})})]}),(0,e.jsxs)(qn,{style:{background:y},children:[(0,e.jsx)(er,{style:{background:O,border:"1px solid ".concat(O)}}),(0,e.jsx)(tr,{style:{borderLeft:"5px solid ".concat(y)}})]})]}),(0,e.jsx)(nr,{children:(0,e.jsxs)(ir,{style:k,children:[h!=="fail"?(0,e.jsxs)(e.Fragment,{children:[!!o.build_url&&(0,e.jsx)(A,{label:l({id:"plan.build.detail"}),text:o.build_url}),(a=o.rpm_list)===null||a===void 0?void 0:a.map(function(v,x){var L=[l({id:"plan.kernel.pkg"}),l({id:"plan.devel"}),l({id:"plan.headers"})][x];return(0,e.jsx)(A,{label:L,text:v},x)})]}):o.build_log,!!o.code_repo&&(0,e.jsx)(A,{label:l({id:"plan.code_repo"}),text:o.code_repo})]})})]}):null})},or=lr,Bt,sr=["svgRef","title"];function vt(){return vt=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(i[t]=a[t])}return i},vt.apply(this,arguments)}function dr(i,n){if(i==null)return{};var a=pr(i,n),t,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(l=0;l<o.length;l++)t=o[l],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,t)||(a[t]=i[t]))}return a}function pr(i,n){if(i==null)return{};var a={},t=Object.keys(i),l,o;for(o=0;o<t.length;o++)l=t[o],!(n.indexOf(l)>=0)&&(a[l]=i[l]);return a}var cr=function(n){var a=n.svgRef,t=n.title,l=dr(n,sr);return d.createElement("svg",vt({width:"16px",height:"16px",viewBox:"0 0 16 16",ref:a},l),t?d.createElement("title",null,t):null,Bt||(Bt=d.createElement("g",{id:"\\u521B\\u5EFA\\u8BA1\\u5212",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},d.createElement("g",{id:"\\u811A\\u672C\\u63A7\\u5236\\u53F0"},d.createElement("rect",{id:"\\u77E9\\u5F62",fill:"#000000",fillRule:"nonzero",opacity:0,x:0,y:0,width:16,height:16}),d.createElement("rect",{id:"\\u77E9\\u5F62",stroke:"#000000",fillOpacity:.65,fill:"#000000",x:1.5,y:1.5,width:13,height:13,rx:2}),d.createElement("path",{d:"M4.28,7.0112 L7.108,5.7904 L7.108,5.32 L4.28,4.0992 L4.28,4.676 L6.352,5.5552 L4.28,6.4344 L4.28,7.0112 Z M10.188,7.784 L10.188,7.2576 L7.388,7.2576 L7.388,7.784 L10.188,7.784 Z",id:">_",fill:"#FFFFFF",fillRule:"nonzero"})))))},ur=d.forwardRef(function(i,n){return d.createElement(cr,vt({svgRef:n},i))}),ji=r.p+"static/consoleIcon.ed2fefd5.svg",Tt,Wt,kt,Ut,$t,Kt,Ht,Nt,zt,Vt,Gt,Jt,Yt,vr=c.ZP.div(Tt||(Tt=(0,p.Z)([`
    width: 398px;
    min-height: 100%;
    padding-right: 4px;
    display: inline-block;
    position: relative;
    // &:hover {
    //     background: #FAFAFA;
    // }
`]))),fr=c.ZP.div(Wt||(Wt=(0,p.Z)([`
    height: 40px;
    width: 100%;
    position: relative;
    display: flex;
`]))),mr=c.ZP.div(kt||(kt=(0,p.Z)([`
    height: 40px;
    width: 130px;
    background: #FFFFFF;
    border: 2px solid #1890FF;
    border-radius: 20px;
    outline:none;
    padding: 0 4px;
    font-size:16px;
    color: rgba(0,0,0,.65);
    //
    display: flex;
    align-items: center;
`]))),_r=`
    height:2px;
    position:absolute;
    top:50%;
    background:#CECECE;
`,bi=c.ZP.div(Ut||(Ut=(0,p.Z)([`
    `,`
    width:20px;
    left:-20px
`])),_r),gr=c.ZP.div($t||($t=(0,p.Z)([`
    flex: 1;
    height: 2px;
    margin-top: 20px;
    background: #CECECE;
    display: flex;
    justify-content: space-between;
`]))),xr=c.ZP.div(Kt||(Kt=(0,p.Z)([`
    height: 12px;
    width: 12px;
    background: #CECECE;
    border: 1px solid #CECECE;
    border-radius: 24px;
    margin-top: -5px;
`]))),hr=c.ZP.div(Ht||(Ht=(0,p.Z)([`
  width: 0px;
  height: 0px;
  display: inline-block;
  border-left: 5px solid #CECECE;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid transparent;
  margin-top: -4px;
  margin-right: -8px;
`]))),jr=c.ZP.div(Nt||(Nt=(0,p.Z)([`
    width: 100%;
    padding-left: 24px;
    padding-top: 0px;
`]))),br=c.ZP.div(zt||(zt=(0,p.Z)([`
   display: flex;
   margin-left: -2px;
`]))),Xt=c.ZP.div(Vt||(Vt=(0,p.Z)([`
    line-height: 22px;
    margin-left: 7px;
`]))),yr=c.ZP.div(Gt||(Gt=(0,p.Z)([`
    width: 14px;
    height: 14px;
    margin-left: 4px;
    margin-top: -4px;
    cursor: pointer;
`]))),Cr=c.ZP.div(Jt||(Jt=(0,p.Z)([`
   width: 264px;
   margin-left: 35px;
   margin-top: 5px;
   opacity: 0.45;
   font-family: PingFangSC-Regular;
   font-size: 14px;
   color: #000;
   line-height: 22px;
   // \u591A\u884C\u6587\u672C\u7701\u7565
   overflow: hidden; 
   text-overflow: ellipsis; 
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
`]))),yi=c.ZP.div(Yt||(Yt=(0,p.Z)([`
    width:2px;
    height:`,`px;
`])),function(i){return i.index*30}),Ci=r(79625),Er=r(96584),Pr=r(3229),Qt=r.n(Pr),Or=function(n){var a=n.title,t=n.width,l=t===void 0?"100%":t,o=n.children,C=(0,d.useRef)(null),Z=(0,d.useState)(!1),h=(0,R.Z)(Z,2),I=h[0],O=h[1],y=function(){var k=C.current.clientHeight,A=C.current.scrollHeight;O(k<A)};return(0,d.useEffect)(function(){y()},[a]),I?(0,e.jsx)(Er.Z,{placement:"bottomLeft",title:a,children:(0,e.jsx)("div",{ref:C,className:Qt().ellipsis,style:{width:l},children:o||a||""})}):(0,e.jsx)("div",{ref:C,className:Qt().ellipsis,style:{width:l},children:o||a||""})},Sr=Or,Zr=function(n){var a=n.data,t=n.mainStatus,l=a||{},o=l.name,C=o===void 0?"":o,Z=l.stage_state,h=l.machine_info,I=h===void 0?[]:h,O=(0,Y.mA)(Z,null),y=(0,Y.I9)(Z),j=t?"#1890FF":y,k=function(x){return t&&x==="pending"?"stop":x},A=function(x){typeof x=="string"&&n.callback({data:x})};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(vr,{children:[(0,e.jsxs)(fr,{children:[(0,e.jsxs)(mr,{style:{border:"2px solid ".concat(O)},children:[(0,e.jsx)(at,{params:k(Z)}),(0,e.jsx)(Xt,{children:C})]}),(0,e.jsxs)(gr,{style:{background:j},children:[(0,e.jsx)(xr,{style:{background:y,border:"1px solid ".concat(y)}}),(0,e.jsx)(hr,{style:{borderLeft:"5px solid ".concat(j)}})]})]}),(0,e.jsx)(jr,{children:I.map(function(v,x){return(0,e.jsxs)(Ot,{borderColor:y,children:[(0,e.jsxs)(br,{children:[(0,e.jsx)(Pt,{borderColor:y}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",margin:"-2px 0 0 8px"},children:[(0,e.jsx)(at,{params:k(v.state)}),(0,e.jsx)(Xt,{children:v.machine}),!!(v.result&&typeof v.result=="string")&&(0,e.jsx)(yr,{onClick:function(){return A(v.result)},children:(0,e.jsx)(ur,{})})]})]}),(0,e.jsx)(Cr,{children:(0,e.jsx)(Sr,{title:v.script})})]},v.tmpl_id||x)})})]})})},Ir=Zr,qt,en,tn,nn,rn,an,ln,on,sn,dn,pn,cn,un,vn,Lr=c.ZP.div(qt||(qt=(0,p.Z)([`
    width: 398px;
    min-height: 100%;
    padding-right: 4px;
    display: inline-block;
    position: relative;
`]))),wr=c.ZP.div(en||(en=(0,p.Z)([`
    height: 40px;
    width: 100%;
    position: relative;
    display: flex;
`]))),Fr=c.ZP.div(tn||(tn=(0,p.Z)([`
    height: 40px;
    min-width: 120px;
    background: #FFFFFF;
    border: 2px solid #CECECE;
    border-radius: 20px;
    outline:none;
    padding-left: 4px;
    padding-right: 16px;
    font-size:16px;
    color: rgba(0,0,0,.65);
    display: flex;
    align-items: center;
`]))),Rr=`
    height:2px;
    position:absolute;
    top:50%;
    background:#CECECE;
`,Ei=c.ZP.div(nn||(nn=(0,p.Z)([`
    `,`
    width:20px;
    left:-20px
`])),Rr),Dr=c.ZP.div(rn||(rn=(0,p.Z)([`
    flex: 1;
    height: 2px;
    margin-top: 20px;
    background: #CECECE;
    display: flex;
    justify-content: space-between;
`]))),Ar=c.ZP.div(an||(an=(0,p.Z)([`
    height: 12px;
    width: 12px;
    background: #CECECE;
    border: 1px solid #CECECE;
    border-radius: 24px;
    margin-top: -5px;
`]))),Mr=c.ZP.div(ln||(ln=(0,p.Z)([`
  width: 0px;
  height: 0px;
  display: inline-block;
  border-left: 5px solid #CECECE;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid transparent;
  margin-top: -4px;
  margin-right: -8px;
`]))),Br=c.ZP.div(on||(on=(0,p.Z)([`
    width: 100%;
    padding-left: 24px;
    padding-top: 0px;
`]))),Tr=c.ZP.div(sn||(sn=(0,p.Z)([`
   display: flex;
   margin-left: -2px;
`]))),Wr=c.ZP.div(dn||(dn=(0,p.Z)([`
   margin: -4px 0 0 8px;
   display: flex;
   align-items: center;
   border: 1px solid #CECECE;
   border-radius: 19px;
   padding-right: 8px;

`]))),fn=c.ZP.div(pn||(pn=(0,p.Z)([`
    line-height: 22px;
    margin-left: 7px;
`]))),Pi=c.ZP.span(cn||(cn=(0,p.Z)([`
    &:hover {
      color: #1890FF;
    }
`]))),kr=c.ZP.div(un||(un=(0,p.Z)([`
   width: 264px;
   margin-left: 35px;
   margin-top: 5px;
   // opacity: 0.45;
   font-family: PingFangSC-Regular;
   font-size: 14px;
   color: #000;
   line-height: 22px;
   // \u591A\u884C\u6587\u672C\u7701\u7565
   overflow: hidden; 
   text-overflow: ellipsis; 
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
`]))),Oi=c.ZP.div(vn||(vn=(0,p.Z)([`
    width:2px;
    height:`,`px;
`])),function(i){return i.index*30}),Ur=function(n){var a=n.ws_id,t=n.data,l=n.mainStatus,o=(0,d.useState)({rowId:""}),C=(0,R.Z)(o,2),Z=C[0],h=C[1],I=t||{},O=I.name,y=O===void 0?"":O,j=I.stage_state,k=I.impact_next,A=I.template_result,v=A===void 0?[]:A,x=(0,Y.mA)(j,null),L=(0,Y.I9)(j),V=l?"#1890FF":L,ce=function(ue){ue.job_id&&m.m8.push("/ws/".concat(a,"/test_result/").concat(ue.job_id))},lt=function(ue,Ve){return ue===Ve?{color:"#1890FF",opacity:1,cursor:"pointer"}:{color:"#000",opacity:.45,cursor:"none"}};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(Lr,{children:[(0,e.jsxs)(wr,{children:[(0,e.jsxs)(Fr,{style:{border:"2px solid ".concat(x)},children:[(0,e.jsx)(at,{params:j}),(0,e.jsx)(fn,{children:y})]}),(0,e.jsxs)(Dr,{style:{background:V},children:[(0,e.jsx)(Ar,{style:{background:k?"#fff":L,border:"1px solid ".concat(L)}}),(0,e.jsx)(Mr,{style:{borderLeft:"5px solid ".concat(V)}})]})]}),(0,e.jsx)(Br,{children:v.map(function(u,ue){var Ve=(0,Y.mA)(u.job_state,j),G=j==="stop"?"stop":u.job_state,M=JSON.parse(u.job_result)||{},Q=M.total,q=M.pass,oe=M.fail;return(0,e.jsxs)(Ot,{borderColor:L,children:[(0,e.jsxs)(Tr,{children:[(0,e.jsx)(Pt,{borderColor:L}),(0,e.jsxs)(Wr,{style:{border:"1px solid ".concat(Ve)},children:[(0,e.jsx)("div",{style:{marginLeft:-1,height:24},children:(0,e.jsx)(at,{params:G})}),(0,e.jsxs)("div",{style:{padding:"0 4px"},children:[(0,e.jsx)("span",{style:{color:"#649FF6",padding:"0 8px"},children:Q||"-"}),(0,e.jsx)("span",{style:{color:"#39C15B",padding:"0 8px"},children:q||"-"}),(0,e.jsx)("span",{style:{color:"#C84C5A",padding:"0 8px"},children:oe||"-"})]})]})]}),(0,e.jsx)(kr,{children:(0,e.jsx)(fn,{children:u.job_name?(0,e.jsx)("span",{style:lt(ue,Z.rowId),onMouseEnter:function(){return h({rowId:ue})},onMouseLeave:function(){return h({rowId:""})},onClick:function(){return ce(u)},children:u.job_name}):(0,e.jsx)("span",{style:{opacity:.45},children:u.tmpl_name})})})]},u.tmpl_id)})})]})})},$r=Ur,Kr=function(n){var a=n.data,t=n.prepareCallback,l=t===void 0?function(){}:t,o=n.ws_id,C=a.state,Z=a.build_pkg_info,h=Z===void 0?{}:Z,I=a.build_result,O=a.prepare_result,y=a.test_result,j=y===void 0?[]:y,k=O||{},A=k.name,v=A===void 0?"":A,x=["success","fail"].indexOf(C)>-1,L=x?"#1890FF":"#CECECE";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(ze,{children:[(0,e.jsxs)(Le,{children:[(0,e.jsx)(K,{}),(0,e.jsx)(be,{})]}),(0,e.jsx)(Qe,{children:(0,e.jsx)(m._H,{id:"plan.start"})})]}),(0,e.jsx)(or,{data:I||h,mainStatus:x}),!!v&&(0,e.jsx)(Ir,{data:O,callback:l,mainStatus:x}),j==null?void 0:j.map(function(V,ce){return(0,e.jsx)($r,{data:V,ws_id:o,mainStatus:x},ce)}),(0,e.jsxs)(te,{children:[(0,e.jsx)(Xe,{children:(0,e.jsx)("div",{style:{marginTop:20},children:x?(0,e.jsx)(mt,{style:{color:L}}):(0,e.jsx)(Ie,{style:{background:L,border:"1px solid ".concat(L)}})})}),(0,e.jsx)(_t,{children:(0,e.jsx)(m._H,{id:"plan.end"})})]})]})},Hr=Kr,mn=r(20418),Nr=r(53770),zr=r(17286),Vr=r(11002),_n=r.n(Vr),Gr=(0,d.forwardRef)(function(i,n){var a=(0,d.useState)(!1),t=(0,R.Z)(a,2),l=t[0],o=t[1],C=(0,d.useState)({}),Z=(0,R.Z)(C,2),h=Z[0],I=Z[1];(0,d.useImperativeHandle)(n,function(){return{show:function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",k=arguments.length>1?arguments[1]:void 0;o(!0),I({config_value:k})}}});var O=function(){o(!1)};return(0,e.jsx)("div",{className:_n().ConsoleDrawer,children:(0,e.jsx)(De.Z,{maskStyle:{opacity:0,animation:"unset"},maskClosable:!0,keyboard:!1,onClose:O,visible:l,placement:"bottom",closeIcon:(0,e.jsx)(Nr.Z,{style:{color:"#fff"}}),closable:!0,bodyStyle:{padding:0},footer:null,children:(0,e.jsx)("div",{className:_n().ConsoleDrawer_content,children:(0,e.jsx)(zr.Z,{code:h.config_value,onChange:function(j){return I((0,mn.Z)((0,mn.Z)({},h),{},{config_value:j}))},readOnly:"nocursor"})})})})}),Jr=Gr,Yr=r(20038),gn,xn,hn,jn,Xr=c.ZP.div(gn||(gn=(0,p.Z)([`
    width:`,`px;
    height:`,`px;
    /* overflow:auto; */
    background: #f5f5f5;
`])),function(i){return i.width},function(i){return i.height}),Qr=c.ZP.div(xn||(xn=(0,p.Z)([`
    height: 150px;
    width:100%;
    background:#fff;
    padding: 20px 20px 12px;
`]))),qr=c.ZP.div(hn||(hn=(0,p.Z)([`
    margin-top: 10px;
    width: 100%;
    height: calc( 100% - 100px - 20px - 40px);
    background:#fff;
    overflow: auto;
    padding: 29px 20px 20px 20px;
    display: flex;
`]))),ei=c.ZP.span(jn||(jn=(0,p.Z)([`
    cursor:pointer;
    &:hover {
        color : #1890FF;
    }
`]))),ti=function(n){var a=n.match.params,t=a.ws_id,l=a.plan_id,o=n.route;(0,z.jk)("Workspace.TestPlan.".concat(o.name));var C=(0,z.CR)(),Z=C.height,h=C.width,I=(0,d.useState)(!1),O=(0,R.Z)(I,2),y=O[0],j=O[1],k=(0,d.useState)({}),A=(0,R.Z)(k,2),v=A[0],x=A[1],L=(0,d.useRef)(null),V=(0,d.useRef)(null),ce=function(){var G=(0,F.Z)((0,E.Z)().mark(function M(Q){var q,oe,xe;return(0,E.Z)().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.prev=0,j(!0),B.next=4,nt(Q);case 4:if(B.t0=B.sent,B.t0){B.next=7;break}B.t0={};case 7:q=B.t0,oe=q.data,xe=oe===void 0?{}:oe,q.code===200?x(xe):(0,Y.EV)(q.code,q.msg),j(!1),B.next=16;break;case 13:B.prev=13,B.t1=B.catch(0),j(!1);case 16:case"end":return B.stop()}},M,null,[[0,13]])}));return function(Q){return G.apply(this,arguments)}}();(0,d.useEffect)(function(){l&&ce({ws_id:t,plan_instance_id:l})},[l]);var lt=function(M){var Q=M.data,q=Q.state,oe=Q.start_time,xe=Q.end_time,ot={display:"flex",alignItems:"center"},B={background:"#F2F4F6",border:"1px solid #F2F4F6"};return(0,e.jsxs)("div",{style:ot,children:[q==="pending"&&(0,e.jsx)($.Z,{color:"#D9D9D9",style:{fontWeight:500,textAlign:"center"},children:"Pending"}),q==="running"&&(0,e.jsx)($.Z,{color:"#649FF6",style:{fontWeight:500,textAlign:"center"},children:"Running"}),q==="fail"&&(0,e.jsx)($.Z,{color:"#C84C5A",style:{fontWeight:500,textAlign:"center"},children:"Fail"}),q==="success"&&(0,e.jsx)($.Z,{color:"#81BF84",style:{fontWeight:500,textAlign:"center"},children:"Complete"}),!!oe&&(0,e.jsxs)($.Z,{style:B,children:[(0,e.jsx)(m._H,{id:"plan.start_time"}),"\uFF1A",oe]}),!!xe&&(0,e.jsxs)($.Z,{style:B,children:[(0,e.jsx)(m._H,{id:"plan.end_time"}),"\uFF1A",xe]})]})},u=(0,d.useCallback)(function(G){var M;(M=L.current)===null||M===void 0||M.show("add",G)},[]);function ue(G){var M,Q=G.data;(M=V.current)===null||M===void 0||M.show("show",Q)}function Ve(G){var M=G.data,Q=G.editFn;Q({ws_id:t,plan_instance_id:l,note:M})}return(0,e.jsxs)(Pe.Z,{spinning:y,children:[(0,e.jsxs)(Xr,{height:Z-50,width:h,children:[(0,e.jsxs)(Qr,{children:[(0,e.jsx)(J.Z,{style:{marginBottom:14},children:(0,e.jsxs)(me.Z,{children:[(0,e.jsx)(me.Z.Item,{children:(0,e.jsx)(ei,{onClick:function(){return m.m8.push("/ws/".concat(t,"/test_plan/view"))},children:(0,e.jsx)(m._H,{id:"Workspace.TestPlan.View"})})}),(0,e.jsx)(me.Z.Item,{children:(0,e.jsx)(m._H,{id:"Workspace.TestPlan.".concat(o.name)})})]})}),(0,e.jsx)(de.Z.Title,{level:2,style:{marginBottom:8},children:v.name}),(0,e.jsxs)(J.Z,{justify:"space-between",align:"bottom",children:[(0,e.jsx)(lt,{data:v}),(0,e.jsxs)("div",{style:{display:"flex"},children:[(0,e.jsx)(se.Z,{onClick:function(){return u(v)},disabled:!Object.keys(v).length,children:(0,e.jsx)(m._H,{id:"plan.configuration"})}),(0,e.jsx)(Yr.Z,{dreType:"bottomRight",ws_id:t,jobInfo:v,origin:"jobDetail",buttonStyle:{marginRight:0,marginLeft:10}})]})]})]}),(0,e.jsx)(qr,{children:(0,e.jsx)(Hr,{data:v,prepareCallback:ue,ws_id:t})})]}),(0,e.jsx)(rt,{ref:L,callback:Ve}),(0,e.jsx)(Jr,{ref:V})]})},ni=ti},20038:function(w,ve,r){"use strict";var we=r(13059),Pe=r(53676),Ge=r(46721),se=r(94867),Fe=r(31650),de=r(25100),fe=r(11407),J=r(41604),he=r(35832),me=r(32326),U=r(20418),$=r(39190),E=r(22374),F=r(41170),R=r.n(F),p=r(28972),d=r(44851),c=r.n(d),m=r(12590),z=r(22911),Re=r(31784),De=r(39881),pe=r(22812),ae=r(24812),le=r(97207),T=r.n(le),et=r(6130),tt=r(89689),g=r(52454),Oe={container:245,button_width:122};ve.Z=function(je){var Y=(0,pe.YB)(),nt=Y.formatMessage,Je=(0,ae.UO)(),Se=Je.ws_id,D=je.dreType,e=je.jobInfo,Ae=je.origin,Me=je.buttonStyle,rt=Me===void 0?{}:Me,Ye=je.title,Ze=e&&e.report_li,Be={name:"",creator_name:""},Te=(0,E.useState)(!0),We=(0,$.Z)(Te,2),_e=We[0],ke=We[1],Ue=(0,E.useState)(Be),$e=(0,$.Z)(Ue,2),X=$e[0],Ke=$e[1],He=(0,E.useState)([]),ge=(0,$.Z)(He,2),Xe=ge[0],K=ge[1],Ne=(0,E.useState)(!1),Ie=(0,$.Z)(Ne,2),be=Ie[0],ze=Ie[1],Le=E.useRef(null);(0,tt.Z)(function(){ze(!1)},[Le]);var Qe=function(_,b){var S=T().cloneDeep(b);return _&&(S=S.filter(function(N){var P=_.split(",").map(function(Ce){return Ce&&(Ce==null?void 0:Ce.trim())}),xt=T().get(N,"creator");return P.includes(String(xt))})),S},te=function(_,b){var S=T().cloneDeep(b);return _&&(S=S.filter(function(N){var P=T().get(N,"name");return P.includes(_.trim())})),S},mt=function(_,b){var S=_||"";T().isArray(S)&&(S=S.join(","));var N={};N[b]=S;var P=T().cloneDeep(Ze);S===""?P=te(X.name||"",P):(P=te(X.name||"",P),P=Qe(S,P)),K(P),Ke((0,U.Z)((0,U.Z)({},X),N))},_t=[{dataIndex:"name",title:(0,g.jsx)(pe._H,{id:"ws.result.list.report.name"}),width:165,ellipsis:{showTitle:!1},className:"report_name_hover",filterDropdown:function(_){var b=_.confirm;return(0,g.jsx)(m.Z,{confirm:b,autoFocus:_e,styleObj:Oe,onConfirm:function(N){var P=T().cloneDeep(Ze);N===void 0?P=Qe(X.creator_name||"",P):(P=Qe(X.creator_name||"",P),P=te(N,P)),K(P),Ke((0,U.Z)((0,U.Z)({},X),{},{name:N}))},placeholder:nt({id:"ws.result.list.report.name.placeholder"})})},onFilterDropdownVisibleChange:function(_){_&&ke(!_e)},filterIcon:function(){return(0,g.jsx)(Re.Z,{style:{color:X.name?"#1890ff":void 0}})},render:function(_,b){return(0,g.jsx)(et.K,{ellipsis:{tooltip:b.name},children:(0,g.jsx)(c(),{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[X.name||""],autoEscape:!0,textToHighlight:b&&b.name||"-",onClick:function(){return window.open("/ws/".concat(Se,"/test_report/").concat(b.id))}})})}},{dataIndex:"creator_name",width:100,title:(0,g.jsx)(pe._H,{id:"ws.result.list.creators"}),filterDropdown:function(_){var b=_.confirm;return(0,g.jsx)(z.Z,{autoFocus:_e,confirm:b,onConfirm:function(N){return mt(N,"creator_name")},page_size:20})},onFilterDropdownVisibleChange:function(_){_&&ke(!_e)},filterIcon:function(){return(0,g.jsx)(Re.Z,{style:{color:X.creator_name?"#1890ff":void 0}})},render:function(_){return(0,g.jsx)(et.K,{ellipsis:{tooltip:!0},children:_||"-"})}},{dataIndex:"gmt_created",title:(0,g.jsx)(pe._H,{id:"ws.result.list.gmt_created"}),width:200,render:function(_){return(0,g.jsx)(et.K,{ellipsis:{tooltip:!0},children:_||"-"})}}],jt=function(){var H=(0,me.Z)((0,he.Z)().mark(function _(b){return(0,he.Z)().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:window.open("/ws/".concat(Se,"/test_report/").concat(b));case 1:case"end":return N.stop()}},_)}));return function(b){return H.apply(this,arguments)}}(),it=function(_,b){if(_.stopPropagation(),T().isArray(b)||(b=[]),b.length===1){jt(b[0].id);return}ze(!be),K(b)},gt=function(_){return(0,g.jsx)("div",{ref:Le,children:(0,g.jsx)(p.$B,{style:{height:244},children:(0,g.jsx)(J.Z,{size:"small",rowKey:"id",columns:_t,dataSource:_,pagination:!1,rowClassName:R().row_table})})})},ye=T().get(e,"report_li")&&e.report_li.length;return(0,g.jsx)("div",{className:R().conf_item_box,children:(0,g.jsx)(Pe.Z,{placement:D,title:(0,g.jsx)(pe._H,{id:"ws.result.list.view.report"}),content:gt(Xe),trigger:"click",overlayClassName:R().popover_job,open:be,children:Ae==="jobList"?(0,g.jsx)(de.Z.Text,{style:{color:"#1890FF",cursor:"pointer",display:ye?"inlineBlock":"none"},children:(0,g.jsxs)("span",{onClick:T().partial(it,T(),e&&e.report_li),style:{display:"flex",alignItems:"center"},children:[Ye||(0,g.jsx)(pe._H,{id:"ws.result.list.view.report"}),(0,g.jsx)(De.Z,{style:{display:ye>1?"inline-block":"none",marginLeft:"2px",marginTop:"2px"}})]})}):(0,g.jsxs)(se.Z,{type:"primary",onClick:T().partial(it,T(),e&&e.report_li),style:(0,U.Z)({marginRight:8,display:ye?"inlineBlock":"none"},rt),children:[Ye||(0,g.jsx)(pe._H,{id:"ws.result.list.view.report"}),(0,g.jsx)(De.Z,{style:{display:ye>1?"inline-block":"none",marginLeft:"2px",marginTop:"2px"}})]})})})}},89689:function(w,ve,r){"use strict";r.d(ve,{Z:function(){return se}});var we=r(22374),Pe=r(23101),Ge="click";function se(Fe,de,fe){fe===void 0&&(fe=Ge);var J=(0,we.useRef)(Fe);J.current=Fe,(0,we.useEffect)(function(){var he=function(U){var $=Array.isArray(de)?de:[de];$.some(function(E){var F=(0,Pe.n)(E);return!F||(F==null?void 0:F.contains(U.target))})||J.current(U)};return document.addEventListener(fe,he),function(){document.removeEventListener(fe,he)}},[de,fe])}}}]);
