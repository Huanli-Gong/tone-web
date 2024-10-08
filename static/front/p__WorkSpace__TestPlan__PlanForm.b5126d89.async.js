(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[1683],{70213:function(qe,tt,t){"use strict";t.d(tt,{Z:function(){return Ee}});var ve=t(28991),W=t(67294),lt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"}}]},name:"plus-circle",theme:"filled"},Ne=lt,ot=t(27029),Te=function(X,q){return W.createElement(ot.Z,(0,ve.Z)((0,ve.Z)({},X),{},{ref:q,icon:Ne}))},J=W.forwardRef(Te),Ee=J},75040:function(qe){qe.exports={job_plan_form:"job_plan_form___24esx",cascaderStyle:"cascaderStyle___1QF0V"}},34946:function(qe){qe.exports={job_plan_form:"job_plan_form___2XoMb",templateListDrawerSpace:"templateListDrawerSpace____VYHT"}},95529:function(qe){qe.exports={stepsWrapper_1:"stepsWrapper_1___1goW7",stepsWrapper_2:"stepsWrapper_2___JR3TX",plan_step_btn:"plan_step_btn___2ttxd"}},77429:function(qe){qe.exports={test_result_name:"test_result_name___1RBzL",test_summary_item:"test_summary_item___3-Yoh",test_summary_item_right:"test_summary_item_right___2UQVi",test_summary_item_right_unellipsis:"test_summary_item_right_unellipsis___2cRIc",test_summary_job:"test_summary_job___2a2-P",test_summary_row:"test_summary_row___1zXMg",detail_collection:"detail_collection___1_th-",offline_flag:"offline_flag___3BdpH",ellips_column_refclass:"ellips_column_refclass___30H4W",tag_popover_style:"tag_popover_style___1x8MG",table_question_tooltip:"table_question_tooltip___1Ur7e",join_baseline:"join_baseline___Jgafh",select_baseline:"select_baseline___2nHPA"}},48395:function(){},97514:function(qe,tt,t){"use strict";t.r(tt),t.d(tt,{default:function(){return Mr}});var ve=t(20228),W=t(11382),lt=t(54029),Ne=t(79166),ot=t(89032),Te=t(15746),J=t(57106),Ee=t(99683),pt=t(13062),X=t(71230),q=t(49111),Ae=t(19650),He=t(57663),P=t(71577),gt=t(35556),nt=t(50273),It=t(36017),rt=t(35247),d=t(11849),M=t(93224),Be=t(34792),Ce=t(48086),Z=t(39428),R=t(3182),x=t(2824),s=t(67294),Ct=t(88983),ee=t(47933),xt=t(43358),a=t(34041),$=t(47673),S=t(4107),D=t(9715),l=t(20526),r=t(20310),n=t(16917),y=t(20009),te=t(63885),ye=t(45680),re=t(34946),Ve=t.n(re),Ge=t(84739),De=t(55787),me=t(60306),c=t(12788),N=t(24480),e=t(85893),Ye,we,st=c.ZP.span(Ye||(Ye=(0,r.Z)([`
    position:absolute;
    right: 30px;
    top: 4px;
    font-size: 12px;
    color:rgba(0,0,0,.45);
`]))),at=c.ZP.div(we||(we=(0,r.Z)([`
    position:relative;
`]))),jt=function(u,T){var p=(0,n.YB)(),f=p.formatMessage,v=u.template,ie=u.show,ke=(0,y.UO)(),_e=ke.ws_id,Pe=l.Z.useForm(),pe=(0,x.Z)(Pe,1),K=pe[0],je=(0,s.useState)("no"),H=(0,x.Z)(je,2),le=H[0],Fe=H[1],V=(0,s.useState)("rpm"),F=(0,x.Z)(V,2),G=F[0],oe=F[1],Ze=(0,n.QT)(function(){return(0,te.YK)({ws_id:_e,page_size:500})},{initialData:[]}),$e=Ze.data,ce=(0,n.QT)(function(){return(0,te.bU)({ws_id:_e,page_size:500})},{initialData:[]}),Le=ce.data,ze=(0,n.QT)(function(){return(0,ye.ZP)({enable:"True"})}),Ue=ze.data,Qe=function(B){Fe(B.target.value),K.setFieldsValue({test_obj:G}),K.resetFields(["kernel_packages","kernel_version"])};(0,s.useImperativeHandle)(T,function(){return{validate:function(){return K.validateFields()}}}),(0,s.useEffect)(function(){if(v&&JSON.stringify(v)!=="{}"){var I=v.build_pkg_info,B=v.kernel_info,Y=v.kernel_version,ge=v.test_obj;oe(ge),ge==="kernel"&&(JSON.stringify(I)!=="{}"&&Fe("install_build_kernel"),JSON.stringify(B)!=="{}"&&Fe(Y?"install_push":"install_un_push")),K.setFieldsValue((0,d.Z)((0,d.Z)((0,d.Z)({},B),I),v))}},[v]);var w={allowClear:!0,getPopupContainer:function(B){return B.parentNode},showSearch:!0,filterOption:function(B,Y){var ge;return((ge=Y==null?void 0:Y.label)!==null&&ge!==void 0?ge:"").toLowerCase().includes(B.toLowerCase())}};return(0,e.jsx)("div",{style:{display:ie,width:"100%",height:"100%",overflowY:"auto",paddingTop:20,paddingBottom:20},children:(0,e.jsxs)(l.Z,{form:K,layout:"horizontal",size:"small",labelCol:{span:4},wrapperCol:{span:12},style:{width:"100%"},colon:!1,className:Ve().job_plan_form,initialValues:{hotfix_install:!0,test_obj:"rpm",scripts:[{pos:"before",script:""}]},children:[(0,e.jsx)(l.Z.Item,{name:"name",label:(0,e.jsx)(n._H,{id:"plan.plan.name"}),rules:[{required:!0,message:f({id:"plan.plan.name.message"}),max:64}],children:(0,e.jsx)(S.Z,{autoComplete:"off",placeholder:f({id:"plan.plan.name.placeholder"})})}),(0,e.jsx)(l.Z.Item,{name:"description",label:(0,e.jsx)(n._H,{id:"plan.plan.description"}),children:(0,e.jsx)(S.Z.TextArea,{autoComplete:"off",placeholder:f({id:"plan.plan.description.placeholder"})})}),(0,e.jsx)(l.Z.Item,{name:"project_id",label:"Project",children:(0,e.jsx)(a.Z,(0,d.Z)((0,d.Z)({},w),{},{placeholder:f({id:"plan.plan.project_id"}),options:$e.map(function(I){return{value:I.id,label:"".concat(I.name,"(").concat(I.product_name,")")}})}))}),(0,e.jsxs)(l.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.test.baseline"}),children:[(0,e.jsxs)(at,{children:[(0,e.jsx)(l.Z.Item,{name:"func_baseline",children:(0,e.jsx)(a.Z,(0,d.Z)((0,d.Z)({},w),{},{placeholder:f({id:"plan.func_baseline.placeholder"}),options:Le.filter(function(I){return I.test_type==="functional"}).map(function(I){return{value:I.id,label:I.name}})}))}),(0,e.jsx)(st,{children:(0,e.jsx)(n._H,{id:"plan.function"})})]}),(0,e.jsxs)(at,{children:[(0,e.jsx)(l.Z.Item,{name:"perf_baseline",children:(0,e.jsx)(a.Z,(0,d.Z)((0,d.Z)({},w),{},{placeholder:f({id:"plan.perf_baseline.placeholder"}),options:Le.filter(function(I){return I.test_type==="performance"}).map(function(I){return{value:I.id,label:I.name}})}))}),(0,e.jsx)(st,{children:(0,e.jsx)(n._H,{id:"plan.performance"})})]})]}),(0,e.jsx)(l.Z.Item,{name:"test_obj",label:(0,e.jsx)(n._H,{id:"plan.tested.object"}),children:(0,e.jsxs)(a.Z,(0,d.Z)((0,d.Z)({},w),{},{filterOption:!1,onChange:function(B){return oe(B)},placeholder:"\u8BF7\u9009\u62E9\u88AB\u6D4B\u5BF9\u8C61",children:[(0,e.jsx)(a.Z.Option,{value:"kernel",children:(0,e.jsx)(n._H,{id:"plan.kernel.package"})}),(0,e.jsx)(a.Z.Option,{value:"rpm",children:(0,e.jsx)(n._H,{id:"plan.others.soft"})})]}))}),G=="kernel"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.kernel"}),children:(0,e.jsxs)(ee.ZP.Group,{value:le,onChange:Qe,children:[(0,e.jsx)(ee.ZP,{value:"no",children:(0,e.jsx)(n._H,{id:"ws.result.details.install_no"})}),(0,e.jsx)(ee.ZP,{value:"install_push",children:(0,e.jsx)(n._H,{id:"plan.install_push"})}),(0,e.jsx)(ee.ZP,{value:"install_un_push",children:(0,e.jsx)(n._H,{id:"plan.install_un_push"})}),(0,e.jsx)(ee.ZP,{value:"install_build_kernel",children:(0,e.jsx)(n._H,{id:"plan.install_build_kernel"})})]})}),le==="install_push"&&(0,e.jsx)(Ge.Z,{form:K,kernel:le,kernelList:Ue,needScriptList:!N.lU.includes(_e)}),le==="install_un_push"&&(0,e.jsx)(De.Z,{form:K,needScriptList:!N.lU.includes(_e)}),le==="install_build_kernel"&&(0,e.jsx)(me.Z,{needScriptList:!1,form:K,isPlan:!0})]}),(0,e.jsx)(l.Z.Item,{name:"rpm_info",label:(0,e.jsx)(n._H,{id:"plan.rpm_info"}),children:(0,e.jsx)(S.Z.TextArea,{placeholder:f({id:"plan.rpm_info.placeholder"})})}),(0,e.jsx)(l.Z.Item,{name:"env_info",label:(0,e.jsx)(n._H,{id:"plan.env_info"}),rules:[function(){return{validator:function(B,Y){if(Y){var ge=/^(\w+=((('[^']+'|"[^"]+")|.+)(\n)))*\w+=(('[^']+'|"[^"]+")|.+)$/;return ge.test(Y)?Promise.resolve():Promise.reject(f({id:"plan.env_info.reject"}))}return Promise.resolve()}}}],children:(0,e.jsx)(S.Z.TextArea,{placeholder:f({id:"plan.env_info.reject"})})}),(0,e.jsx)(l.Z.Item,{name:"notice_name",label:(0,e.jsx)(n._H,{id:"plan.notice_name"}),children:(0,e.jsx)(S.Z,{autoComplete:"off",placeholder:f({id:"plan.notice_name.placeholder"},{date:"{date}"})})}),(0,e.jsx)(l.Z.Item,{name:"email_info",label:(0,e.jsx)(n._H,{id:"plan.email_info"}),rules:[function(){return{validator:function(B,Y){if(Y){var ge=Y.split(/,|，|\s/g),Ke=/(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})+)/,he=ge.filter(function(b){return!Ke.test(b)}).length;return he===0?Promise.resolve():Promise.reject(f({id:"plan.email_info.reject"}))}return Promise.resolve()}}}],children:(0,e.jsx)(S.Z,{autoComplete:"off",placeholder:f({id:"plan.email_info.placeholder"})})}),(0,e.jsx)(l.Z.Item,{name:"ding_talk_info",label:(0,e.jsx)(n._H,{id:"plan.ding_talk_info"}),children:(0,e.jsx)(S.Z,{autoComplete:"off",placeholder:f({id:"plan.ding_talk_info.placeholder"})})}),(0,e.jsx)(l.Z.Item,{name:"enable",label:(0,e.jsx)(n._H,{id:"plan.enable"}),initialValue:!0,children:(0,e.jsxs)(ee.ZP.Group,{children:[(0,e.jsx)(ee.ZP,{value:!0,children:(0,e.jsx)(n._H,{id:"operation.yes"})}),(0,e.jsx)(ee.ZP,{value:!1,children:(0,e.jsx)(n._H,{id:"operation.no"})})]})})]})})},yt=(0,s.forwardRef)(jt),_t=t(402),We=t(97272),Zt=t(77576),it=t(52141),U=t(59250),i=t(13013),j=t(22385),O=t(89456),se=t(30887),Ie=t(28682),Ft=t(57338),ct=t(440),Lt=t(63185),ht=t(9676),Rt=t(86582),Xt=t(22406),qt=t(76570),Tt=t(96486),bt=t.n(Tt),At=function(u,T){var p=u.ws_id,f=u.onOk,v=(0,s.useState)(!1),ie=(0,x.Z)(v,2),ke=ie[0],_e=ie[1],Pe=(0,s.useState)(""),pe=(0,x.Z)(Pe,2),K=pe[0],je=pe[1],H=(0,s.useState)(null),le=(0,x.Z)(H,2),Fe=le[0],V=le[1],F=(0,s.useState)([]),G=(0,x.Z)(F,2),oe=G[0],Ze=G[1],$e=(0,s.useState)(null),ce=(0,x.Z)($e,2),Le=ce[0],ze=ce[1],Ue=(0,s.useState)(null),Qe=(0,x.Z)(Ue,2),w=Qe[0],I=Qe[1],B=(0,s.useState)([]),Y=(0,x.Z)(B,2),ge=Y[0],Ke=Y[1],he=(0,s.useState)([]),b=(0,x.Z)(he,2),de=b[0],Xe=b[1],C=(0,s.useState)(!0),o=(0,x.Z)(C,2),h=o[0],_=o[1],E=function(){var Q=(0,R.Z)((0,Z.Z)().mark(function fe(){var Me,et,St;return(0,Z.Z)().wrap(function(ut){for(;;)switch(ut.prev=ut.next){case 0:return _(!0),ut.next=3,(0,Xt.qi)({ws_id:p,enable:1,name:K,page_size:999});case 3:if(Me=ut.sent,et=Me.data,St=Me.code,_(!1),St===200){ut.next=10;break}return Ke([]),ut.abrupt("return");case 10:K.length===0&&Xe(et),Ke(et);case 12:case"end":return ut.stop()}},fe)}));return function(){return Q.apply(this,arguments)}}();(0,s.useImperativeHandle)(T,function(){return{show:function(fe,Me,et,St){typeof et=="number"&&(ze(et),I(St)),_e(!0),E(),(0,Tt.isArray)(fe)&&(Ze(fe.map(function($t){return $t.id})),V(Me))}}},[]);var Re=function(){_e(!1),Ze([]),V(null),I(null),ze(null),Ke([]),je("")},L=function(){f({list:de.filter(function(fe){if(oe.filter(function(Me){return fe.id===Me}).length>0)return fe}),dataIndex:Fe}),Re()},mt=function(fe){if(fe.target.checked&&oe.length>=15){Ce.default.warning("\u5355\u4E2A\u6D4B\u8BD5\u9636\u6BB5\u4E2D\u6D4B\u8BD5\u6A21\u7248\u6570\u91CF\u4E0D\u5F97\u8D85\u8FC715\u4E2A\uFF01");return}var Me=fe.target.value,et=oe.slice(0);fe.target.checked?et=et.concat(Me):et=et.filter(function(St){return St!==Me}),Ze((0,Rt.Z)(new Set((0,Rt.Z)(et))))},Je=function(fe){f((0,d.Z)((0,d.Z)({},fe),{},{rowkey:Le,dataIndex:Fe,replaceId:w})),Re()};return(0,e.jsx)(ct.Z,{maskClosable:!1,keyboard:!1,title:(0,e.jsx)(n._H,{id:"plan.template.list"}),open:ke,width:"376",onClose:Re,footer:typeof w!="number"&&(0,e.jsx)("div",{style:{textAlign:"right"},children:(0,e.jsxs)(Ae.Z,{children:[(0,e.jsx)(P.Z,{onClick:Re,children:(0,e.jsx)(n._H,{id:"operation.cancel"})}),(0,e.jsx)(P.Z,{type:"primary",onClick:L,children:(0,e.jsx)(n._H,{id:"operation.ok"})})]})}),children:(0,e.jsxs)(Ae.Z,{direction:"vertical",style:{width:"100%"},className:Ve().templateListDrawerSpace,children:[(0,e.jsx)(S.Z,{prefix:(0,e.jsx)(qt.Z,{}),value:K,onPressEnter:E,onChange:function(fe){var Me=fe.target;return je(Me.value)}}),(0,e.jsx)(W.Z,{spinning:h,children:typeof Le!="number"?(0,e.jsx)(ht.Z.Group,{style:{width:"100%"},value:oe,children:ge.map(function(Q){return(0,e.jsx)(ht.Z,{style:{width:"100%",marginLeft:0},value:Q.id,onChange:mt,children:(0,e.jsx)(O.Z,{title:Q.name,children:(0,e.jsx)(We.Z.Text,{ellipsis:!0,children:Q.name})})},Q.id)})}):ge.map(function(Q){return(0,e.jsx)(X.Z,{style:{cursor:"pointer",width:"100%"},children:(0,e.jsx)(O.Z,{title:Q.name,children:w===Q.id?(0,e.jsx)(We.Z.Link,{onClick:function(){return Je(Q)},ellipsis:!0,style:{width:"100%"},children:Q.name}):oe.includes(Q.id)?(0,e.jsx)(We.Z.Text,{disabled:!0,type:"secondary",ellipsis:!0,style:{width:"100%"},children:Q.name}):(0,e.jsx)("span",{onClick:function(){return Je(Q)},style:{width:"100%"},children:(0,e.jsx)(We.Z.Text,{style:{width:"100%"},ellipsis:!0,children:Q.name})})})},Q.id)})})]})})},Nt=(0,s.forwardRef)(At),Ht=t(1693),Mt=t(27047),Pt,Bt=(0,c.ZP)(l.Z)(Pt||(Pt=(0,r.Z)([`
    .ant-form-item{
        margin-bottom: 8px;
    }
`]))),en=function(u,T){var p=(0,n.YB)(),f=p.formatMessage,v=u.ws_id,ie=u.onOk,ke=(0,s.useState)(!1),_e=(0,x.Z)(ke,2),Pe=_e[0],pe=_e[1],K=(0,s.useState)(null),je=(0,x.Z)(K,2),H=je[0],le=je[1],Fe=l.Z.useForm(),V=(0,x.Z)(Fe,1),F=V[0],G=(0,s.useState)(!1),oe=(0,x.Z)(G,2),Ze=oe[0],$e=oe[1];(0,s.useImperativeHandle)(T,function(){return{show:function(Qe,w){pe(!0),le(Qe),w&&F.setFieldsValue(w)}}});var ce=function(){pe(!1),$e(!1),F.resetFields(),le(null)},Le=function(){Ze||($e(!0),F.validateFields().then(function(){var Qe=(0,R.Z)((0,Z.Z)().mark(function w(I){return(0,Z.Z)().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,ie(I,H);case 2:ce();case 3:case"end":return Y.stop()}},w)}));return function(w){return Qe.apply(this,arguments)}}()).catch(function(){$e(!1)}))},ze=(0,s.useMemo)(function(){return typeof H=="number"?(0,e.jsx)(n._H,{id:"plan.edit.machine"}):(0,e.jsx)(n._H,{id:"plan.add.machine"})},[H]);return(0,e.jsx)(ct.Z,{maskClosable:!1,keyboard:!1,title:ze,open:Pe,width:"376",onClose:ce,footer:(0,e.jsx)("div",{style:{textAlign:"right"},children:(0,e.jsxs)(Ae.Z,{children:[(0,e.jsx)(P.Z,{onClick:ce,children:(0,e.jsx)(n._H,{id:"operation.cancel"})}),(0,e.jsx)(P.Z,{type:"primary",onClick:Le,children:(0,e.jsx)(n._H,{id:"operation.ok"})})]})}),children:(0,e.jsxs)(Bt,{layout:"vertical",form:F,scrollToFirstError:!0,children:[(0,e.jsx)(l.Z.Item,{name:"channel_type",label:(0,e.jsx)(n._H,{id:"plan.channel_type"}),initialValue:"toneagent",rules:[{required:!0,message:f({id:"plan.channel_type.message"})}],children:(0,e.jsx)(Mt.k,{placeholder:f({id:"plan.channel_type.placeholder"})})}),(0,e.jsx)(l.Z.Item,{name:"machine",validateTrigger:"onBlur",label:"",rules:[function(){return{validator:function(Qe,w){return(0,R.Z)((0,Z.Z)().mark(function I(){var B,Y,ge,Ke;return(0,Z.Z)().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(B=F.getFieldValue("channel_type"),B){b.next=4;break}return F.validateFields(["channel_type"]),b.abrupt("return");case 4:return b.next=6,(0,Ht.bD)({ws_id:v,ips:[w],channel_type:B});case 6:if(Y=b.sent,ge=Y.data,Ke=Y.msg,ge.errors.length!==0){b.next=11;break}return b.abrupt("return",Promise.resolve());case 11:return b.abrupt("return",Promise.reject(Ke.toString()));case 12:case"end":return b.stop()}},I)}))()}}}],children:(0,e.jsx)(S.Z,{placeholder:"".concat(f({id:"plan.please.enter.IP"})).concat(""),autoComplete:"off"})}),!N.lU.includes(v)&&(0,e.jsx)(l.Z.Item,{name:"script",label:(0,e.jsx)(n._H,{id:"plan.custom.script"}),rules:[{required:!0,message:f({id:"plan.custom.script.cannot.empty"})}],children:(0,e.jsx)(S.Z.TextArea,{rows:4,placeholder:f({id:"plan.custom.script"})})})]})})},ft=(0,s.forwardRef)(en),dt=t(70213),tn=t(49101),pn=t(54549),hn,Ha=["svgRef","title"];function Yt(){return Yt=Object.assign?Object.assign.bind():function(m){for(var u=1;u<arguments.length;u++){var T=arguments[u];for(var p in T)Object.prototype.hasOwnProperty.call(T,p)&&(m[p]=T[p])}return m},Yt.apply(this,arguments)}function Ba(m,u){if(m==null)return{};var T=Wa(m,u),p,f;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(m);for(f=0;f<v.length;f++)p=v[f],!(u.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(m,p)||(T[p]=m[p]))}return T}function Wa(m,u){if(m==null)return{};var T={},p=Object.keys(m),f,v;for(v=0;v<p.length;v++)f=p[v],!(u.indexOf(f)>=0)&&(T[f]=m[f]);return T}var $a=function(u){var T=u.svgRef,p=u.title,f=Ba(u,Ha);return s.createElement("svg",Yt({width:"16px",height:"16px",viewBox:"0 0 16 16",ref:T},f),p?s.createElement("title",null,p):null,hn||(hn=s.createElement("g",{id:"\\u521B\\u5EFA\\u8BA1\\u5212",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},s.createElement("g",{id:"\\u6D4B\\u8BD5\\u914D\\u7F6E-\\u5220\\u9664\\u9636\\u6BB5",transform:"translate(-1214.000000, -160.000000)",fillRule:"nonzero"},s.createElement("g",{id:"\\u8868\\u5355",transform:"translate(0.000000, 101.000000)"},s.createElement("g",{id:"\\u7F16\\u7EC4-4",transform:"translate(323.000000, 14.000000)"},s.createElement("g",{id:"\\u7F16\\u7EC4-7",transform:"translate(521.000000, 0.000000)"},s.createElement("g",{id:"\\u5220-\\u9664-red",transform:"translate(370.000000, 45.000000)"},s.createElement("rect",{id:"\\u77E9\\u5F62",fill:"#000000",opacity:0,x:0,y:0,width:16,height:16}),s.createElement("path",{d:"M8.08734375,0.337640625 C6.52017188,0.337640625 5.24823438,1.58004687 5.19410938,3.13982812 L1.54067187,3.13982812 C1.13475,3.13982812 0.802625,3.4695 0.802625,3.87789062 C0.802625,4.28382812 1.13229687,4.61596875 1.5406875,4.61596875 L2.35501562,4.61596875 L2.35501562,12.8724687 C2.35501562,14.4224063 3.40553125,15.6894219 4.70454688,15.6894219 L11.3225156,15.6894219 C12.6190781,15.6894219 13.6720469,14.4297969 13.6720469,12.8724687 L13.6720469,4.62089063 L14.4101094,4.62089063 C14.8160469,4.62089063 15.1481719,4.29120312 15.1481719,3.8828125 C15.1481719,3.476875 14.8185,3.14475 14.4101094,3.14475 L10.9756406,3.14475 C10.9288906,1.5800625 9.6545,0.337640625 8.08734375,0.337640625 L8.08734375,0.337640625 Z M6.57676562,3.13982812 C6.63089062,2.34026562 7.28285937,1.72029687 8.08979688,1.72029687 C8.89673438,1.72029687 9.54870312,2.34271875 9.59545312,3.13982812 L6.57676562,3.13982812 Z M4.70207812,14.3092344 C4.24201562,14.3092344 3.73520312,13.7187812 3.73520312,12.8724687 L3.73520312,4.62089063 L12.2869375,4.62089063 L12.2869375,12.8798437 C12.2869375,13.7237031 11.780125,14.316625 11.3200625,14.316625 L4.70207812,14.316625 L4.70207812,14.3092344 Z M5.69354687,12.5354219 C6.03057812,12.5354219 6.30859375,12.198375 6.30859375,11.7752188 L6.30859375,7.43784375 C6.30859375,7.0146875 6.03304687,6.677625 5.69354687,6.677625 C5.35648437,6.677625 5.07848437,7.0146875 5.07848437,7.43784375 L5.07848437,11.7752188 C5.07848437,12.1959063 5.34910937,12.5354219 5.69354687,12.5354219 Z M7.92004688,12.5354219 C8.25709375,12.5354219 8.53509375,12.198375 8.53509375,11.7752188 L8.53509375,7.43784375 C8.53509375,7.0146875 8.25954688,6.677625 7.92004688,6.677625 C7.583,6.677625 7.30498438,7.0146875 7.30498438,7.43784375 L7.30498438,11.7752188 C7.30498438,12.1959063 7.583,12.5354219 7.92004688,12.5354219 L7.92004688,12.5354219 Z M10.2621719,12.5354219 C10.5992187,12.5354219 10.8772344,12.198375 10.8772344,11.7752188 L10.8772344,7.43784375 C10.8772344,7.0146875 10.6016875,6.677625 10.2621719,6.677625 C9.925125,6.677625 9.647125,7.0146875 9.647125,7.43784375 L9.647125,11.7752188 C9.647125,12.1959063 9.91528125,12.5354219 10.2621719,12.5354219 Z",id:"\\u5F62\\u72B6",fill:"#F5222D"})))))))))},za=s.forwardRef(function(m,u){return s.createElement($a,Yt({svgRef:u},m))}),Nr=t.p+"static/delete.894b285a.svg",fn,Ua=["svgRef","title"];function Qt(){return Qt=Object.assign?Object.assign.bind():function(m){for(var u=1;u<arguments.length;u++){var T=arguments[u];for(var p in T)Object.prototype.hasOwnProperty.call(T,p)&&(m[p]=T[p])}return m},Qt.apply(this,arguments)}function Ka(m,u){if(m==null)return{};var T=Va(m,u),p,f;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(m);for(f=0;f<v.length;f++)p=v[f],!(u.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(m,p)||(T[p]=m[p]))}return T}function Va(m,u){if(m==null)return{};var T={},p=Object.keys(m),f,v;for(v=0;v<p.length;v++)f=p[v],!(u.indexOf(f)>=0)&&(T[f]=m[f]);return T}var Ya=function(u){var T=u.svgRef,p=u.title,f=Ka(u,Ua);return s.createElement("svg",Qt({width:"16px",height:"16px",viewBox:"0 0 16 16",ref:T},f),p?s.createElement("title",null,p):null,fn||(fn=s.createElement("g",{id:"\\u521B\\u5EFA\\u8BA1\\u5212",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd",opacity:.449999988},s.createElement("g",{id:"\\u6D4B\\u8BD5\\u914D\\u7F6E-\\u6DFB\\u52A0\\u65B0\\u9636\\u6BB5\\u540E",transform:"translate(-1214.000000, -160.000000)",fill:"#000000",fillRule:"nonzero"},s.createElement("g",{id:"\\u8868\\u5355",transform:"translate(0.000000, 101.000000)"},s.createElement("g",{id:"\\u7F16\\u7EC4-4",transform:"translate(323.000000, 51.000000)"},s.createElement("g",{id:"\\u7F16\\u7EC4-7",transform:"translate(521.000000, 0.000000)"},s.createElement("g",{id:"\\u5220-\\u9664",transform:"translate(370.000000, 8.000000)"},s.createElement("rect",{id:"\\u77E9\\u5F62",opacity:0,x:0,y:0,width:16,height:16}),s.createElement("path",{d:"M8.08734375,0.337640625 C6.52017188,0.337640625 5.24823438,1.58004687 5.19410938,3.13982812 L1.54067187,3.13982812 C1.13475,3.13982812 0.802625,3.4695 0.802625,3.87789062 C0.802625,4.28382812 1.13229687,4.61596875 1.5406875,4.61596875 L2.35501562,4.61596875 L2.35501562,12.8724687 C2.35501562,14.4224063 3.40553125,15.6894219 4.70454688,15.6894219 L11.3225156,15.6894219 C12.6190781,15.6894219 13.6720469,14.4297969 13.6720469,12.8724687 L13.6720469,4.62089063 L14.4101094,4.62089063 C14.8160469,4.62089063 15.1481719,4.29120312 15.1481719,3.8828125 C15.1481719,3.476875 14.8185,3.14475 14.4101094,3.14475 L10.9756406,3.14475 C10.9288906,1.5800625 9.6545,0.337640625 8.08734375,0.337640625 L8.08734375,0.337640625 Z M6.57676562,3.13982812 C6.63089062,2.34026562 7.28285937,1.72029687 8.08979688,1.72029687 C8.89673438,1.72029687 9.54870312,2.34271875 9.59545312,3.13982812 L6.57676562,3.13982812 Z M4.70207812,14.3092344 C4.24201562,14.3092344 3.73520312,13.7187812 3.73520312,12.8724687 L3.73520312,4.62089063 L12.2869375,4.62089063 L12.2869375,12.8798437 C12.2869375,13.7237031 11.780125,14.316625 11.3200625,14.316625 L4.70207812,14.316625 L4.70207812,14.3092344 Z M5.69354687,12.5354219 C6.03057812,12.5354219 6.30859375,12.198375 6.30859375,11.7752188 L6.30859375,7.43784375 C6.30859375,7.0146875 6.03304687,6.677625 5.69354687,6.677625 C5.35648437,6.677625 5.07848437,7.0146875 5.07848437,7.43784375 L5.07848437,11.7752188 C5.07848437,12.1959063 5.34910937,12.5354219 5.69354687,12.5354219 Z M7.92004688,12.5354219 C8.25709375,12.5354219 8.53509375,12.198375 8.53509375,11.7752188 L8.53509375,7.43784375 C8.53509375,7.0146875 8.25954688,6.677625 7.92004688,6.677625 C7.583,6.677625 7.30498438,7.0146875 7.30498438,7.43784375 L7.30498438,11.7752188 C7.30498438,12.1959063 7.583,12.5354219 7.92004688,12.5354219 L7.92004688,12.5354219 Z M10.2621719,12.5354219 C10.5992187,12.5354219 10.8772344,12.198375 10.8772344,11.7752188 L10.8772344,7.43784375 C10.8772344,7.0146875 10.6016875,6.677625 10.2621719,6.677625 C9.925125,6.677625 9.647125,7.0146875 9.647125,7.43784375 L9.647125,11.7752188 C9.647125,12.1959063 9.91528125,12.5354219 10.2621719,12.5354219 Z",id:"\\u5F62\\u72B6"})))))))))},Qa=s.forwardRef(function(m,u){return s.createElement(Ya,Qt({svgRef:u},m))}),Hr=t.p+"static/delete_icon.f51a2d43.svg",mn,vn,gn,xn,jn,Zn,bn,Cn,yn,_n,Pn,Sn,En,On,Tn,Dn,wn,In,Fn,Ln,Mn,kn,Rn,An,Nn,Hn,Bn,Wn,$n,zn,Un,Kn,Vn,Yn,Qn,Jn,Gn,Xn,Ja=(0,c.ZP)(X.Z)(mn||(mn=(0,r.Z)([`
    width : 100% ;
    height : 100% ;
    // padding-left : 180px ;
    overflow : auto ;
    // padding-right:160px;
    // white-space:nowrap;    
    flex-direction: column;
`]))),qn=(0,c.ZP)(X.Z)(vn||(vn=(0,r.Z)([`
    height:40px;
    line-height:40px;
    color : rgba(0,0,0,.65);
    text-align:left;
`]))),ea=c.ZP.div(gn||(gn=(0,r.Z)([`
    height:40px;
    width:366px;
    position:relative;
`]))),ta=c.ZP.input(xn||(xn=(0,r.Z)([`
    height: 40px;
    width: 366px;
    background: #FFFFFF;
    border: 2px solid rgba(24,144,255,0.45);
    border-radius: 20px;
    outline:none;
    padding-left : 1em;
    padding-right:1em;
    font-size:16px;
    color : rgba(0,0,0,.65);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
`]))),na=`
    height:2px;
    position:absolute;
    top:50%;
    background:#CECECE;
`,aa=c.ZP.div(jn||(jn=(0,r.Z)([`
    `,`;
    width:20px;
    left:-20px;
`])),na),ra=c.ZP.div(Zn||(Zn=(0,r.Z)([`
    `,`;
    width:32px;
    right : -32px;
`])),na),nn=`
    position:absolute;
    color:#1890FF;
    cursor:pointer;
    background:#fff;
    border-radius:50%;
`,sa=(0,c.ZP)(dt.Z)(bn||(bn=(0,r.Z)([`
    `,`
    top : 50%;
    left : -5px;
    transform:translate(-50% , -7px);
`])),nn),ia=(0,c.ZP)(dt.Z)(Cn||(Cn=(0,r.Z)([`
    `,`
    top : 50%;
    right : -20px;
    transform:translate(-50% , -7px);
`])),nn),Ga=c.ZP.span(yn||(yn=(0,r.Z)([`
    display:flex;
    justify-content:center;
    align-items : center;
    width: 14.3px;
    cursor:pointer;
    height:15.4px;
`]))),la=(0,c.ZP)(za)(_n||(_n=(0,r.Z)([`
    visibility:hidden;
`]))),oa=(0,c.ZP)(Qa)(Pn||(Pn=(0,r.Z)([`
    visibility:hidden;
`]))),ca=function(u){var T=(0,s.useState)(!1),p=(0,x.Z)(T,2),f=p[0],v=p[1],ie=function(){v(!0)},ke=function(){v(!1)};return(0,e.jsx)(Ga,(0,d.Z)((0,d.Z)({},u),{},{onMouseEnter:ie,onMouseLeave:ke,children:f?(0,e.jsx)(la,{}):(0,e.jsx)(oa,{})}))},Xa=c.ZP.div(Sn||(Sn=(0,r.Z)([`
    width:166px;
    height:100%;
    // background:#CECECE;
    text-align:center;
    display:inline-block;
    position:relative;
`]))),qa=c.ZP.div(En||(En=(0,r.Z)([`
    height: 12px;
    width: 12px;
    background: #CECECE;
    border-radius: 24px;
    margin : 55px auto 16px;
`]))),er=c.ZP.div(On||(On=(0,r.Z)([`
    font-size: 16px;
    color:rgba(0,0,0,.65);
`]))),tr=c.ZP.div(Tn||(Tn=(0,r.Z)([`
    width: 75px;
    height: 2px;
    background: #CECECE;
    position: absolute;
    left: 50%;
    top: 60px;
`]))),da=c.ZP.div(Dn||(Dn=(0,r.Z)([`
    height: 12px;
    width: 12px;
    background: #FFFFFF;
    border: 1px solid #649FF6;
    border-radius: 24px;
    margin-top:-5px;
`]))),ua=(0,c.ZP)(da)(wn||(wn=(0,r.Z)([`
    background:#1890FF;
`]))),pa=(0,c.ZP)(tn.Z)(In||(In=(0,r.Z)([`
    color : #1890FF;
`]))),ha=c.ZP.div(Fn||(Fn=(0,r.Z)([`
    width : 100%;
    padding-top:13px;
    overflow:hidden;
`]))),an=c.ZP.div(Ln||(Ln=(0,r.Z)([`
    height: 46px;
    width: 316px;
    background: rgba(0,0,0,0.04);
    border-radius: 4px;
    display:flex;
    align-items:center;
    cursor:pointer;
    padding-left: 20px;
    flex-wrap:no-wrap;
`]))),rn=c.ZP.div(Mn||(Mn=(0,r.Z)([`
    width : 100%;
    height : 64px;
    padding-left:40px;
    position:relative;
    padding-top: 18px;
    visibility:hidden;
`]))),fa=(0,c.ZP)(dt.Z)(kn||(kn=(0,r.Z)([`
    `,`
    position: relative;
    margin-right:8px;
    margin-left:14px;
`])),nn),sn=c.ZP.div(Rn||(Rn=(0,r.Z)([`
    width : 28px;
    height: 73px;
    border-left : 2px dashed #1890FF;
    border-bottom:2px dashed #1890FF;
    border-top : transparent;
    border-right:transparent;
    border-radius: 0 15px;
    display: inline-block;
    position:absolute;
    left: 25px;
    top: -31px;
    z-index:0;
    &::after {
        content:'';
        width: 0px;
        height: 0px;
        display: inline-block;
        border-left: 5px solid #1890FF;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-right: 5px solid transparent;
        position:absolute;
        right:-10px;
        bottom:-6px;
    }
`]))),ma=c.ZP.div(An||(An=(0,r.Z)([`
    width: 30px;
    height: `,`;
    border-left: 2px solid #CECECE;
    border-bottom: 2px solid #CECECE;
    border-top: transparent;
    border-right: transparent;
    border-radius: 0 15px;
    display: inline-block;
    position: absolute;
    left: 25px;
    top: `,`; 
    &::after {
        content:'';
        width: 0px;
        height: 0px;
        display: inline-block;
        border-left: 5px solid #CECECE;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-right: 5px solid transparent;
        position:absolute;
        right:-10px;bottom:-6px;
    }
`])),function(m){var u=m.type;return u==="env"?"98px":"109px"},function(m){var u=m.type;return u==="env"?"-81px":"-84px"}),va=c.ZP.div(Nn||(Nn=(0,r.Z)([`
    width : 100%;
    height : 46px;
    line-height:46px;
    text-align:left;
    display:flex;
    // margin-top: 13px;
    padding-left:12px;
    position:relative;
    cursor:pointer;
`]))),ga=(0,c.ZP)(pn.Z)(Hn||(Hn=(0,r.Z)([`
    width:16px;
    height:16px;
    position:absolute;
    right: 15px;
    top: 16px;
    visibility:hidden;
`]))),nr=c.ZP.div(Bn||(Bn=(0,r.Z)([`
    width:100%;
    position:relative;
    padding-left : 49px;
    // transform: translate(0px, -5px);
    // padding-top:13px;
    :hover {
        `,` {
            background: rgba(0,0,0,0.04);
            border-radius: 4px;
            color: #1890FF;
        }
        `,` {
            visibility:visible;
        }
    }
`])),va,ga),ar=c.ZP.div(Wn||(Wn=(0,r.Z)([`
    width:20px;
    height:20px;
    border-radius:50%;
    background:rgb(24,144,255 , .1);
    color:rgb(24,144,255);
    text-align:center;
    line-height:20px;
    margin-top:13px;
    // margin-top:6px;
    margin-right:10px;
`]))),rr=c.ZP.div($n||($n=(0,r.Z)([`
    width:calc(100% - 30px);
`]))),Br=c.ZP.div(zn||(zn=(0,r.Z)([`
    width:2px;
    height:`,`px;
`])),function(m){return m.index*30}),xa=c.ZP.div(Un||(Un=(0,r.Z)([`
    width : 398px;
    min-height : 100%;
    padding : 0 10px;
    text-align:center;
    margin-right: 31px;
    display:inline-block;
    position:relative;
    &:hover {
        background: #FAFAFA;
        `,` , 
        `,` ,
        `,` {
            visibility:visible;
        }
    }
    &:last-child{
        margin-right:160px
    }
`])),la,rn,oa),ja=c.ZP.div(Kn||(Kn=(0,r.Z)([`
    color:rgba(0,0,0,.85);
    font-weight:600;
`]))),Za=c.ZP.div(Vn||(Vn=(0,r.Z)([`
    color:rgba(0,0,0,.65);
    word-break: break-all;
    width:100%;
    max-height:45px;
    overflow: scroll;
`]))),sr=c.ZP.div(Yn||(Yn=(0,r.Z)([`
    position:absolute;
    left : 10px;
    top : 7px ;
    width:20px;
    height:20px;
    border-radius:50%;
    background:rgb(24,144,255 , .1);
    color:rgb(24,144,255);
    text-align:center;
`]))),ba=(0,c.ZP)(pn.Z)(Qn||(Qn=(0,r.Z)([`
    position : absolute;
    right:10px;
    top:10px;
    cursor:pointer;
    visibility:hidden;
`]))),ir=c.ZP.div(Jn||(Jn=(0,r.Z)([`
    width: 310px;
    position: relative;
    text-align: left;
    padding-left: 40px;
    padding-top:8px;
    padding-right:35px;
    padding-bottom:8px;
    &:hover {
        background: rgba(0,0,0,0.04);
        border-radius: 4px;
        `,` , 
        `,` { color: #1890FF; }
        `,` { visibility: visible; }
    }
`])),ja,Za,ba),lr=c.ZP.div(Gn||(Gn=(0,r.Z)([`
    width: 100%;
    padding-left: 55px;
    cursor:pointer;
    // padding-top: 18px;
    position: relative;
`]))),or=(0,c.ZP)(rn)(Xn||(Xn=(0,r.Z)([`
    padding-left: 50px;
    cursor:pointer;
    `,` {
        width: 28px;
        height: 126px;
        border-left: 2px dashed #1890FF;
        border-bottom: 2px dashed #1890FF;
        border-top: transparent;
        border-right: transparent;
        border-radius: 0 15px;
        display: inline-block;
        position: absolute;
        left: 25px;
        top: -84px;
        z-index: 0;
    }
    `,` { padding-left : 0 ;}
`])),sn,an),cr=["replaceId","dataIndex","rowkey"],dr=function(u){var T=(0,n.YB)(),p=T.formatMessage,f=u.show,v=u.onChange,ie=u.template,ke=(0,y.UO)(),_e=ke.ws_id,Pe={name:p({id:"job.types.env"}),machine_info:[],visible:!1},pe={name:p({id:"plan.new.stage"}),template:[],impact_next:!1},K=(0,s.useState)([pe]),je=(0,x.Z)(K,2),H=je[0],le=je[1],Fe=(0,s.useState)(Pe),V=(0,x.Z)(Fe,2),F=V[0],G=V[1],oe=(0,s.useRef)(),Ze=(0,s.useRef)();(0,s.useEffect)(function(){if(ie&&JSON.stringify(ie)!=="{}"){var C=ie.test_config,o=ie.env_prep;C&&le(C),o&&G((0,d.Z)((0,d.Z)({},o),{},{visible:!0}))}},[ie]);var $e=function(){G((0,d.Z)((0,d.Z)({},F),{},{visible:!0}))},ce=function(){return{name:"".concat(p({id:"plan.new.stage"})).concat(H.length+1),template:[],impact_next:!1}},Le=function(o){if(H.length>4){Ce.default.warning(p({id:"plan.stage.maximum5"}));return}var h=[];H.forEach(function(_,E){E===o&&h.push(ce()),h.push(_)}),o===H.length&&h.push(ce()),le(h)},ze=function(o){var h=o.hasEnv,_=o.index,E=o.children;return(0,e.jsx)(i.Z,{trigger:["click"],overlay:(0,e.jsxs)(Ie.Z,{children:[h&&(0,e.jsx)(Ie.Z.Item,{onClick:$e,children:(0,e.jsxs)(Ae.Z,{children:[(0,e.jsx)(pa,{}),(0,e.jsx)("span",{children:(0,e.jsx)(n._H,{id:"plan.pre.stage"})})]})}),(0,e.jsx)(Ie.Z.Item,{onClick:function(){return Le(_)},children:(0,e.jsxs)(Ae.Z,{children:[(0,e.jsx)(pa,{}),(0,e.jsx)("span",{children:(0,e.jsx)(n._H,{id:"plan.new.stage"})})]})})]}),placement:"bottom",arrow:!0,children:(0,e.jsx)(O.Z,{placement:"top",title:p({id:"plan.add.stage"}),children:E})})},Ue=function(o,h){le(H.map(function(_,E){return E===h?(0,d.Z)((0,d.Z)({},_),{},{impact_next:o}):_}))},Qe=function(o){H.length!==1&&le(H.filter(function(h,_){return o!==_}))},w=function(){G(Pe)},I=function(){Ze.current.show()},B=function(o){oe.current.show(H[o].template,o)},Y=function(o,h){if(o.length>20){Ce.default.warning(p({id:"plan.enter.up.20.characters"}));return}le(H.map(function(_,E){return E===h?(0,d.Z)((0,d.Z)({},_),{},{name:o}):_}))},ge=function(o){if(o.list){var h=o.list,_=o.dataIndex;le(H.map(function(Je,Q){return _===Q?(0,d.Z)((0,d.Z)({},Je),{},{template:h}):Je}))}else{var E=o.replaceId,Re=o.dataIndex,L=o.rowkey,mt=(0,M.Z)(o,cr);le(H.map(function(Je,Q){return Q===Re?(0,d.Z)((0,d.Z)({},Je),{},{template:Je.template.map(function(fe,Me){return Me===L?mt:fe})}):Je}))}},Ke=function(o,h){if(h!=null)return G((0,d.Z)((0,d.Z)({},F),{},{machine_info:F.machine_info.map(function(_,E){return h===E?o:_})}));G((0,d.Z)((0,d.Z)({},F),{},{machine_info:F.machine_info.concat(o)}))},he=function(o){G((0,d.Z)((0,d.Z)({},F),{},{machine_info:F.machine_info.filter(function(h,_){return o!==_})}))};(0,s.useEffect)(function(){v({test_config:H,env_prep:F})},[H,F]);var b=function(o,h){le(H.map(function(_,E){if(E===o){var Re=_.template.filter(function(L){return L.id!==h});return(0,d.Z)((0,d.Z)({},_),{},{template:Re})}return _}))},de=function(o,h){Ze.current.show(o,h)},Xe=function(o,h,_){oe.current.show(H[o].template,o,h,_)};return(0,e.jsx)(Ja,{style:{display:f},children:(0,e.jsxs)(X.Z,{style:{height:"100%"},children:[(0,e.jsxs)("div",{style:{display:"flex",margin:"0 auto"},children:[(0,e.jsxs)(Xa,{children:[(0,e.jsx)(qa,{}),(0,e.jsx)(er,{children:(0,e.jsx)(n._H,{id:"plan.start"})}),(0,e.jsx)(tr,{})]}),F.visible&&(0,e.jsxs)(xa,{children:[(0,e.jsxs)(qn,{justify:"space-between",align:"middle",children:[(0,e.jsx)("span",{}),(0,e.jsx)(ca,{onClick:w})]}),(0,e.jsxs)(ea,{children:[(0,e.jsx)(aa,{}),(0,e.jsx)(ta,{value:F.name,onChange:function(o){var h=o.target;return G((0,d.Z)((0,d.Z)({},F),{},{name:h.value}))}}),(0,e.jsxs)(ra,{children:[(0,e.jsx)(ua,{}),(0,e.jsx)(ze,{index:0,children:(0,e.jsx)(ia,{})})]})]}),(0,e.jsxs)(ha,{children:[F.machine_info.map(function(C,o){return(0,e.jsxs)(lr,{children:[(0,e.jsx)(ma,{type:"env"}),(0,e.jsxs)(ir,{onClick:function(_){_.stopPropagation(),de(o,C)},children:[(0,e.jsx)(ba,{onClick:function(_){_.stopPropagation(),he(o)}}),(0,e.jsx)(sr,{children:o+1}),(0,e.jsxs)(ja,{children:[C.machine," "]}),(0,e.jsx)(Za,{children:C.script})]})]},o)}),(0,e.jsxs)(or,{onClick:I,children:[(0,e.jsx)(sn,{}),(0,e.jsxs)(an,{children:[(0,e.jsx)(fa,{}),(0,e.jsx)("span",{children:(0,e.jsx)(n._H,{id:"plan.add.machine"})})]})]})]})]}),H.map(function(C,o){return(0,e.jsxs)(xa,{children:[(0,e.jsxs)(qn,{justify:"space-between",align:"middle",children:[(0,e.jsxs)(Ae.Z,{children:[(0,e.jsx)("span",{children:(0,e.jsx)(n._H,{id:"plan.subsequent.steps"})}),(0,e.jsx)(it.Z,{onChange:function(_){return Ue(_,o)},checkedChildren:(0,e.jsx)(n._H,{id:"operation.yes"}),unCheckedChildren:(0,e.jsx)(n._H,{id:"operation.no"}),checked:C.impact_next})]}),(0,e.jsx)(ca,{onClick:function(){return Qe(o)}})]}),(0,e.jsxs)(ea,{children:[(0,e.jsx)(aa,{children:o===0&&!F.visible?(0,e.jsx)(ze,{hasEnv:o===0&&!F.visible,index:o,children:(0,e.jsx)(sa,{})}):(0,e.jsx)(O.Z,{placement:"top",title:p({id:"plan.add.stage"}),children:(0,e.jsx)(sa,{onClick:function(){return Le(o)}})})}),(0,e.jsx)(ta,{value:C.name,onChange:function(_){var E=_.target;return Y(E.value,o)}}),(0,e.jsxs)(ra,{children:[C.impact_next?(0,e.jsx)(ua,{}):(0,e.jsx)(da,{}),(0,e.jsx)(O.Z,{placement:"top",title:p({id:"plan.add.stage"}),children:(0,e.jsx)(ia,{onClick:function(){return Le(o+1)}})})]})]}),(0,e.jsxs)(ha,{children:[C.template.map(function(h,_){return(0,e.jsxs)(nr,{children:[(0,e.jsx)(ma,{}),(0,e.jsxs)(va,{onClick:function(){return Xe(o,_,h.id)},children:[(0,e.jsx)(ar,{children:_+1}),(0,e.jsx)(rr,{children:(0,e.jsx)(O.Z,{title:h.name,children:(0,e.jsx)(We.Z.Text,{ellipsis:!0,style:{width:"90%"},children:h.name})})}),(0,e.jsx)(ga,{onClick:function(Re){Re.stopPropagation(),b(o,h.id)}})]})]},_)}),C.template.length<15&&(0,e.jsxs)(rn,{children:[(0,e.jsx)(sn,{}),(0,e.jsxs)(an,{onClick:function(){return B(o)},children:[(0,e.jsx)(fa,{}),(0,e.jsx)("span",{children:(0,e.jsx)(n._H,{id:"plan.add.template"})})]})]})]})]},o)})]}),(0,e.jsx)(Nt,{ws_id:_e,ref:oe,onOk:ge}),(0,e.jsx)(ft,{ws_id:_e,ref:Ze,onOk:Ke})]})})},ur=dr,Wr=t(36877),pr=t(75948),Ca=t(72529),hr=t(75040),ya=t.n(hr),fr=(0,s.forwardRef)(function(m,u){var T=(0,n.YB)(),p=T.formatMessage,f=m.show,v=m.template,ie=m.route,ke=(0,y.UO)(),_e=ke.ws_id,Pe=l.Z.useForm(),pe=(0,x.Z)(Pe,1),K=pe[0],je=(0,s.useState)(!1),H=(0,x.Z)(je,2),le=H[0],Fe=H[1],V=(0,s.useState)([]),F=(0,x.Z)(V,2),G=F[0],oe=F[1],Ze=(0,s.useState)("no"),$e=(0,x.Z)(Ze,2),ce=$e[0],Le=$e[1],ze=(0,s.useState)([]),Ue=(0,x.Z)(ze,2),Qe=Ue[0],w=Ue[1],I=(0,s.useState)([]),B=(0,x.Z)(I,2),Y=B[0],ge=B[1],Ke=function(){var he=(0,R.Z)((0,Z.Z)().mark(function b(){var de,Xe,C,o,h;return(0,Z.Z)().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.prev=0,E.next=3,(0,te.MD)({ws_id:_e,page_size:99999});case 3:de=E.sent,Xe=de.code,C=de.data,Xe===200&&(o=bt().isArray(C)?C:[],h=bt().find(o,{is_default:!0}),oe(o),ie.name==="Create"&&K.setFieldsValue({report_template_id:h.id})),E.next=12;break;case 9:E.prev=9,E.t0=E.catch(0),console.log(E.t0);case 12:case"end":return E.stop()}},b,null,[[0,9]])}));return function(){return he.apply(this,arguments)}}();return(0,s.useEffect)(function(){Ke()},[]),(0,s.useEffect)(function(){if(v&&Object.keys(v).length){var he=v.auto_report,b=v.group_method,de=b===void 0?"no":b,Xe=v.base_group,C=v.base_group_info,o=v.report_template_id,h=v.test_config,_=C||{},E=_.stage_id;if(Fe(he),he){var Re=bt().find(G,{is_default:!0}),L={};if(de==="job"&&(L={base_group_job:E?[E,Xe]:[]}),de==="stage"&&(L={base_group_stage:Xe||void 0}),K.setFieldsValue((0,d.Z)((0,d.Z)((0,d.Z)({},v),{},{group_method:de},L),{},{report_template_id:o||bt().get(Re,"id")})),Le(de),h){var mt=(h==null?void 0:h.map(function(Je,Q){var fe;return{value:Q+1,label:Je.name,children:(Je==null||(fe=Je.template)===null||fe===void 0?void 0:fe.map(function(Me){return{value:Me.id,label:Me.name}}))||[]}}))||[];w(h),ge(mt)}}}},[v,G]),(0,s.useImperativeHandle)(u,function(){return{validate:function(){var he=(0,R.Z)((0,Z.Z)().mark(function de(){return(0,Z.Z)().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.abrupt("return",K.validateFields());case 1:case"end":return C.stop()}},de)}));function b(){return he.apply(this,arguments)}return b}(),refreshData:function(b){if(b){var de=(b==null?void 0:b.map(function(E,Re){var L;return{value:Re+1,label:E.name,key:Re,children:(E==null||(L=E.template)===null||L===void 0?void 0:L.map(function(mt){return{value:mt.id,label:mt.name}}))||[]}}))||[];if(w(b),ge(de),ce==="stage"){var Xe=K.getFieldValue("base_group_stage");Xe>(b==null?void 0:b.length)&&K.setFieldsValue({base_group_stage:void 0})}else if(ce==="job"){var C=K.getFieldValue("base_group_job");if(Array.isArray(C)){var o,h,_=C[0];_&&!((o=de[_-1])!==null&&o!==void 0&&(h=o.children)!==null&&h!==void 0&&h.map(function(E){return E.value}).includes(C[1]))&&K.setFieldsValue({base_group_job:void 0})}}}}}}),(0,e.jsx)("div",{style:{width:"100%",height:"100%",paddingTop:50,display:f},children:(0,e.jsxs)(l.Z,{form:K,layout:"horizontal",size:"small",labelCol:{span:4},wrapperCol:{span:12},style:{width:"100%"},colon:!1,className:ya().job_plan_form,initialValues:{group_method:"no"},children:[(0,e.jsx)(l.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.generate.reports"}),name:"auto_report",children:(0,e.jsx)(it.Z,{onChange:Fe,checked:le,size:"default",checkedChildren:(0,e.jsx)(n._H,{id:"plan.checked"}),unCheckedChildren:(0,e.jsx)(n._H,{id:"plan.unChecked"})})}),le&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.report_name"}),children:(0,e.jsxs)("div",{style:{position:"relative"},children:[(0,e.jsx)(l.Z.Item,{name:"report_name",children:(0,e.jsx)(S.Z,{autoComplete:"off",placeholder:p({id:"plan.report_name.placeholder"},{Job_name:"{Job_name}",report_seq_id:"{report_seq_id}"})})}),(0,e.jsx)("div",{style:{position:"absolute",right:-22,top:-4},children:(0,e.jsx)(Ca.fD,{title:"",placement:"bottomRight",desc:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(X.Z,{children:(0,e.jsx)(We.Z.Text,{children:(0,e.jsx)(n._H,{id:"plan.available.placeholders"})})}),(0,e.jsx)(X.Z,{children:(0,e.jsx)(We.Z.Text,{children:"{date} {plan_name} {plan_id} {product_version}"})})]})})})]})}),(0,e.jsx)(l.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.select.report.template"}),name:"report_template_id",children:(0,e.jsx)(a.Z,{placeholder:p({id:"please.select"}),getPopupContainer:function(b){return b.parentNode},showSearch:!0,optionFilterProp:"children",filterOption:function(b,de){return de.children.toLowerCase().indexOf(b.toLowerCase())>=0},children:G.map(function(he){return(0,e.jsx)(a.Z.Option,{value:he.id,children:he.name},he.id)})})}),(0,e.jsx)(l.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.group_method"}),name:"group_method",children:(0,e.jsxs)(ee.ZP.Group,{onChange:function(b){Le(b.target.value)},children:[(0,e.jsx)(ee.ZP,{value:"no",children:(0,e.jsx)(n._H,{id:"plan.group_method.not"})}),(0,e.jsx)(ee.ZP,{value:"job",children:(0,e.jsx)(n._H,{id:"plan.group_method.job"})}),(0,e.jsx)(ee.ZP,{value:"stage",children:(0,e.jsx)(n._H,{id:"plan.group_method.stage"})})]})}),ce==="job"&&(0,e.jsx)(l.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.select.base_group"}),name:"base_group_job",rules:[{required:!0,message:p({id:"plan.select.base_group.message"})}],children:(0,e.jsx)(pr.Z,{placeholder:p({id:"plan.select.base_group.message"}),options:Y||[],expandTrigger:"hover",className:ya().cascaderStyle})}),ce==="stage"&&(0,e.jsx)(l.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.select.base_group"}),name:"base_group_stage",rules:[{required:!0,message:p({id:"plan.select.base_group.message"})}],children:(0,e.jsx)(a.Z,{placeholder:p({id:"plan.select.base_group.message"}),getPopupContainer:function(b){return b.parentNode},children:Qe.map(function(he,b){return(0,e.jsx)(a.Z.Option,{value:b+1,children:he.name},b+1)})})}),(0,e.jsx)(l.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.report_description"}),name:"report_description",rules:[{required:!1},{max:500,message:p({id:"plan.limit.characters"})}],children:(0,e.jsx)(S.Z.TextArea,{placeholder:p({id:"plan.report_description.placeholder"})})})]})]})})}),Wt=t(48598),ln="plan.trigger.rule",mr=[["format",5,"example"],["symbols",4],["example",4]],vr=function(){var u=(0,n.YB)();return(0,e.jsx)("div",{style:{position:"absolute",right:-22,top:-4},children:(0,e.jsx)(Ca.fD,{title:"",placement:"left",desc:(0,e.jsx)(Ae.Z,{direction:"vertical",style:{width:"100%"},children:mr.map(function(T){var p,f=(0,x.Z)(T,3),v=f[0],ie=f[1],ke=f[2];return(0,e.jsxs)(s.Fragment,{children:[(0,e.jsx)(We.Z.Text,{strong:!0,children:u.formatMessage({id:"".concat(ln,".").concat(v)})}),ke&&(0,e.jsx)(We.Z.Text,{children:u.formatMessage({id:"".concat(ln,".").concat(v,".").concat(ke)})}),(p=new Array(ie).fill(""))===null||p===void 0?void 0:p.map(function(_e,Pe){return(0,e.jsx)(We.Z.Text,{style:{textIndent:"2em",display:"inline-block"},children:u.formatMessage({id:"".concat(ln,".").concat(v,".").concat(Pe+1)})},Pe)})]},v)})})})})},gr=vr,xr=function(u,T){var p=(0,n.YB)(),f=p.formatMessage,v=u.show,ie=u.template,ke=l.Z.useForm(),_e=(0,x.Z)(ke,1),Pe=_e[0],pe=(0,s.useState)(!1),K=(0,x.Z)(pe,2),je=K[0],H=K[1],le=(0,s.useState)([]),Fe=(0,x.Z)(le,2),V=Fe[0],F=Fe[1];return(0,s.useImperativeHandle)(T,function(){return{validate:function(){var G=(0,R.Z)((0,Z.Z)().mark(function Ze(){return(0,Z.Z)().wrap(function(ce){for(;;)switch(ce.prev=ce.next){case 0:return ce.abrupt("return",Pe.validateFields());case 1:case"end":return ce.stop()}},Ze)}));function oe(){return G.apply(this,arguments)}return oe}()}}),(0,s.useEffect)(function(){if(ie&&JSON.stringify(ie)!=="{}"){var G=ie.cron_schedule,oe=ie.blocking_strategy;H(G);var Ze=ie;oe||(Ze.blocking_strategy=1),Pe.setFieldsValue(Ze)}},[ie]),(0,e.jsx)("div",{style:{width:"100%",height:"100%",paddingTop:50,display:v},children:(0,e.jsxs)(l.Z,{form:Pe,layout:"horizontal",size:"small",labelCol:{span:4},wrapperCol:{span:12},style:{width:"100%"},colon:!1,className:Ve().job_plan_form,initialValues:{blocking_strategy:1},children:[(0,e.jsx)(l.Z.Item,{name:"cron_schedule",label:(0,e.jsx)(n._H,{id:"plan.timed.trigger"}),valuePropName:"checked",children:(0,e.jsx)(it.Z,{onChange:H,size:"default",checked:!0,checkedChildren:(0,e.jsx)(n._H,{id:"operation.open"}),unCheckedChildren:(0,e.jsx)(n._H,{id:"operation.close"})})}),je&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.trigger.rule"}),required:!0,children:(0,e.jsxs)("div",{style:{position:"relative"},children:[(0,e.jsx)(l.Z.Item,{name:"cron_info",validateTrigger:"onBlur",rules:[function(){return{validator:function(oe,Ze){return(0,R.Z)((0,Z.Z)().mark(function $e(){var ce,Le,ze,Ue;return(0,Z.Z)().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:if(F([]),Ze){w.next=3;break}return w.abrupt("return",Promise.reject(f({id:"plan.cron_info.empty"})));case 3:return w.next=5,(0,Wt.uy)({cron_express:Ze});case 5:if(w.t0=w.sent,w.t0){w.next=8;break}w.t0={};case 8:if(ce=w.t0,Le=ce.code,ze=ce.data,Ue=ze===void 0?[]:ze,Le!==200){w.next=15;break}return F(Ue),w.abrupt("return",Promise.resolve());case 15:return w.abrupt("return",Promise.reject(f({id:"plan.cron_info.reject"})));case 16:case"end":return w.stop()}},$e)}))()}}}],children:(0,e.jsx)(S.Z,{autoComplete:"off",placeholder:f({id:"plan.trigger.rule"})})}),(0,e.jsx)(gr,{})]})}),!!(V!=null&&V.length)&&(0,e.jsxs)(l.Z.Item,{label:" ",children:[(0,e.jsxs)("span",{children:[(0,e.jsx)(n._H,{id:"plan.next.three.trigger.times"}),"\uFF1A"]}),V.map(function(G,oe){return(0,e.jsxs)("div",{style:{marginLeft:20},children:[oe+1,". ",G]},G)})]}),(0,e.jsx)(l.Z.Item,{name:"blocking_strategy",label:(0,e.jsx)(n._H,{id:"plan.blocking_strategy"}),children:(0,e.jsxs)(ee.ZP.Group,{children:[(0,e.jsx)(ee.ZP,{value:1,children:(0,e.jsx)(n._H,{id:"plan.blocking_strategy1"})}),(0,e.jsx)("br",{}),(0,e.jsx)(ee.ZP,{value:2,children:(0,e.jsx)(n._H,{id:"plan.blocking_strategy2"})}),(0,e.jsx)("br",{}),(0,e.jsx)(ee.ZP,{value:3,children:(0,e.jsx)(n._H,{id:"plan.blocking_strategy3"})}),(0,e.jsx)("br",{})]})})]})]})})},jr=(0,s.forwardRef)(xr),_a=t(60035),Zr=t(6700),br=t(93488),Pa,Sa,Ea,Oa,Ta,Da,wa,Ia,Cr=c.ZP.div(Pa||(Pa=(0,r.Z)([`
    width : 100%;
    /* height : `,`px; */
    background-color: #f5f5f5;
`])),function(m){return m.height-50}),yr=(0,c.ZP)(X.Z)(Sa||(Sa=(0,r.Z)([`
    height : `,`px;
    width : 100%;
    padding-left : 20px;
    background : #fff;

    .dom-hide {
        display: none;
    }
`])),function(m){return m.height-100}),_r=c.ZP.div(Ea||(Ea=(0,r.Z)([`
    height : 100%;
    width : 240px;
    border-right : 1px solid rgba(0,0,0,.1);
    padding-top : 24px;
    padding-left : 65px;
    `,`
    `,`
`])),function(m){var u=m.state;return u&&`
            .ant-steps-item-process .ant-steps-item-tail::after{
                background-color: #1890ff!important;
            }
            .ant-steps-item-wait .ant-steps-item-icon {
                border-color: #1890ff!important;
            }
            .ant-steps-item-wait .ant-steps-item-tail::after{
                background-color: #1890ff!important;
            }
            .ant-steps-item-wait .ant-steps-icon {
                color : #1890ff!important;
            }
        `},function(m){var u=m.enLocale;return u&&`
            width: 300px;
        `}),Pr=c.ZP.div(Oa||(Oa=(0,r.Z)([`
    height : 100%;
    width : calc( 100% - 240px );
    overflow : hidden;
    `,`
`])),function(m){var u=m.enLocale;return u&&`
            width: calc( 100% - 300px );
        `}),Sr=c.ZP.div(Ta||(Ta=(0,r.Z)([`
    width : 100% ;
    height : 50px ;
    background : #fff ;
    border-bottom : 1px solid rgba(0,0,0,.1) ;
    padding-left : 20px ;
    padding-right : 20px;
`]))),Er=c.ZP.div(Da||(Da=(0,r.Z)([`
    width : 100% ;
    height : calc( 100% - 50px ) ;
    overflow : hidden ;
`]))),Or=(0,c.ZP)(X.Z)(wa||(wa=(0,r.Z)([`
    height : 50px;
    width : 100%;
    padding-left : 20px;
`]))),Tr=(0,c.ZP)(X.Z)(Ia||(Ia=(0,r.Z)([`
    // height: 140px;
    width: 1072px;
    background: rgba(0,0,0,0.04);
    padding:20px 40px;
    margin:0 auto;
`]))),Dr=t(95529),Jt=t.n(Dr),Gt=t(87735),wr=["headers","devel","hotfix_install","scripts","kernel","build_config","build_machine","code_branch","code_repo","commit_id","compile_branch","cpu_arch","product_name"],Ir=["headers","devel","hotfix_install","scripts","kernel","build_config","build_machine","code_branch","code_repo","kernel_packages","commit_id","compile_branch","cpu_arch","product_name"],Fr=["base_group_job","base_group_stage"],Lr=function(u){var T=(0,n.YB)(),p=T.formatMessage,f=(0,n.Kd)()==="en-US",v=(0,n.md)(),ie=(0,_a.CR)(),ke=ie.height,_e=(0,y.TH)(),Pe=_e.state,pe=u.route;(0,_a.jk)("Workspace.TestPlan.".concat(pe.name));var K=u.match.params,je=K.ws_id,H=K.plan_id,le=(0,s.useState)(0),Fe=(0,x.Z)(le,2),V=Fe[0],F=Fe[1],G=(0,s.useState)(pe.name!=="Create"),oe=(0,x.Z)(G,2),Ze=oe[0],$e=oe[1],ce=(0,s.useState)(!0),Le=(0,x.Z)(ce,2),ze=Le[0],Ue=Le[1],Qe=(0,s.useState)(!1),w=(0,x.Z)(Qe,2),I=w[0],B=w[1],Y=(0,s.useRef)(),ge=(0,s.useRef)(),Ke=(0,s.useRef)(),he=(0,s.useState)({basic:{},pipline:{},touch:{}}),b=(0,x.Z)(he,2),de=b[0],Xe=b[1],C=(0,s.useState)(null),o=(0,x.Z)(C,2),h=o[0],_=o[1],E=(0,s.useState)(null),Re=(0,x.Z)(E,2),L=Re[0],mt=Re[1],Je=function(){var ue=(0,R.Z)((0,Z.Z)().mark(function ne(){var k,g,A;return(0,Z.Z)().wrap(function(be){for(;;)switch(be.prev=be.next){case 0:return be.next=2,(0,Wt.jW)({ws_id:je,id:H});case 2:k=be.sent,g=k.data,A=k.code,A===200&&(_(g),$e(!1));case 6:case"end":return be.stop()}},ne)}));return function(){return ue.apply(this,arguments)}}();(0,s.useEffect)(function(){var ue=pe.name;ue!=="Create"&&Je()},[pe]);var Q=function(){F(V-1)},fe=function(){return new Promise(function(ne,k){var g=de.pipline,A=g||{},xe=A.env_prep,be=xe===void 0?{}:xe,z=A.test_config,Oe=z===void 0?[]:z,ae=p({id:"plan.cannot.be.empty"});be.machine_info&&!be.machine_info.length&&(Ce.default.error("".concat(be.name).concat(ae)),k()),Oe.length?Oe.forEach(function(Et){var Dt=Et.name,Ot=Et.template,wt=Ot===void 0?[]:Ot;wt.length||(Ce.default.error("".concat(Dt).concat(ae)),k())}):(Ce.default.error("".concat(be.name).concat(ae)),k()),ne()})},Me=function(){var ue=(0,R.Z)((0,Z.Z)().mark(function ne(k){var g,A,xe,be,z,Oe,ae,Et,Dt,Ot,wt,zt,Ut,Kt,Vt;return(0,Z.Z)().wrap(function(Se){for(;;)switch(Se.prev=Se.next){case 0:if(!I){Se.next=2;break}return Se.abrupt("return");case 2:if(B(!0),Se.prev=3,V!==0){Se.next=10;break}return Se.next=7,Y.current.validate();case 7:g=Se.sent,A=g.headers,xe=g.devel,be=g.hotfix_install,z=g.scripts,Oe=g.kernel,ae=g.build_config,Et=g.build_machine,Dt=g.code_branch,Ot=g.code_repo,wt=g.commit_id,zt=g.compile_branch,Ut=g.cpu_arch,Kt=g.product_name,Vt=(0,M.Z)(g,wr),Xe((0,d.Z)((0,d.Z)({},de),{},{basic:(0,d.Z)((0,d.Z)({},Vt),{},{kernel_info:{headers:A,devel:xe,hotfix_install:be,kernel:Oe,scripts:z},build_pkg_info:{build_config:ae,build_machine:Et,code_branch:Dt,code_repo:Ot,commit_id:wt,compile_branch:zt,cpu_arch:Ut,name:Kt}})}));case 10:if(V!==1){Se.next=15;break}return Se.next=13,fe();case 13:Se.next=18;break;case 15:if(V!==2){Se.next=18;break}return Se.next=18,Ke.current.validate();case 18:pe.name==="Edit"&&k!=="NextStep"?F(k):F(V+1),Se.next=24;break;case 21:Se.prev=21,Se.t0=Se.catch(3),console.log(Se.t0,8888);case 24:B(!1);case 25:case"end":return Se.stop()}},ne,null,[[3,21]])}));return function(k){return ue.apply(this,arguments)}}(),et=function(){var ue=(0,R.Z)((0,Z.Z)().mark(function ne(k){return(0,Z.Z)().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(!(k>V)){A.next=5;break}return A.next=3,Me(k);case 3:A.next=6;break;case 5:F(k);case 6:case"end":return A.stop()}},ne)}));return function(k){return ue.apply(this,arguments)}}(),St=function(ne){var k=ne.test_config,g=ne.env_prep;Xe((0,d.Z)((0,d.Z)({},de),{},{pipline:{env_prep:g.visible?g:{},test_config:k.map(function(A){return(0,d.Z)((0,d.Z)({},A),{},{template:A.template.map(function(xe){return xe.id})})})}})),Ke.current.refreshData(k)},$t=function(ne){if(ne){var k=ne.errorFields;if(k&&bt().isArray(k)&&k.length>0){var g=k[0].errors;Ce.default.error(g.toString())}}},ut=function(){var ue=(0,R.Z)((0,Z.Z)().mark(function ne(){var k,g,A,xe,be,z,Oe,ae,Et,Dt,Ot,wt,zt,Ut,Kt,Vt,cn,Se,Fa,La,Ma,ka,Ra,dn,kt,un,Aa,Na;return(0,Z.Z)().wrap(function(vt){for(;;)switch(vt.prev=vt.next){case 0:return vt.next=2,Y.current.validate();case 2:return g=vt.sent,vt.next=5,Ke.current.validate();case 5:return A=vt.sent,vt.next=8,ge.current.validate();case 8:return xe=vt.sent,be=de.pipline,z=g.headers,Oe=g.devel,ae=g.hotfix_install,Et=g.scripts,Dt=g.kernel,Ot=g.build_config,wt=g.build_machine,zt=g.code_branch,Ut=g.code_repo,Kt=g.kernel_packages,Vt=g.commit_id,cn=g.compile_branch,Se=g.cpu_arch,Fa=g.product_name,La=(0,M.Z)(g,Ir),Ma=A.base_group_job,ka=A.base_group_stage,Ra=(0,M.Z)(A,Fr),dn=A.group_method,kt=(0,d.Z)({},Ra),dn==="job"&&(un=(0,x.Z)(Ma,2),Aa=un[0],Na=un[1],kt=Object.assign(kt,{stage_id:Aa,base_group:Na})),dn==="stage"&&(kt=Object.assign(kt,{base_group:ka})),vt.abrupt("return",(0,d.Z)((0,d.Z)((0,d.Z)((0,d.Z)({},La),{},{kernel_info:{headers:z,devel:Oe,hotfix_install:ae,scripts:Et,kernel:Dt,kernel_packages:Kt},build_pkg_info:{build_config:Ot,build_machine:wt,code_branch:zt,code_repo:Ut,commit_id:Vt,compile_branch:cn,cpu_arch:Se,name:Fa}},kt),xe),{},{cron_info:(k=xe==null?void 0:xe.cron_info)!==null&&k!==void 0?k:de==null?void 0:de.cron_info},be));case 17:case"end":return vt.stop()}},ne)}));return function(){return ue.apply(this,arguments)}}(),kr=function(){var ue=(0,R.Z)((0,Z.Z)().mark(function ne(){var k,g,A,xe,be;return(0,Z.Z)().wrap(function(Oe){for(;;)switch(Oe.prev=Oe.next){case 0:if(!I){Oe.next=2;break}return Oe.abrupt("return");case 2:return B(!0),Oe.next=5,ut();case 5:return k=Oe.sent,Oe.next=8,(0,Wt.lY)((0,d.Z)((0,d.Z)({},k),{},{ws_id:je}));case 8:if(g=Oe.sent,A=g.code,xe=g.msg,be=g.data,A===200){Oe.next=16;break}return(0,N.EV)(A,xe),B(!1),Oe.abrupt("return");case 16:mt(be),Ue(!1);case 18:case"end":return Oe.stop()}},ne)}));return function(){return ue.apply(this,arguments)}}(),on=function(){var ue=(0,R.Z)((0,Z.Z)().mark(function ne(){var k,g,A,xe,be,z=arguments;return(0,Z.Z)().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:if(k=z.length>0&&z[0]!==void 0?z[0]:!1,!I){ae.next=3;break}return ae.abrupt("return");case 3:return B(!0),ae.prev=4,ae.next=7,ut();case 7:return g=ae.sent,ae.next=10,(0,Wt.g3)((0,d.Z)((0,d.Z)({},g),{},{is_save:k,ws_id:je,plan_id:H}));case 10:if(A=ae.sent,xe=A.code,be=A.msg,xe===200){ae.next=17;break}return(0,N.EV)(xe,be),B(!1),ae.abrupt("return");case 17:n.m8.push("/ws/".concat(je,"/test_plan?").concat((0,Gt.stringify)(Pe))),ae.next=25;break;case 20:ae.prev=20,ae.t0=ae.catch(4),console.log(ae.t0),B(!1),$t(ae.t0);case 25:case"end":return ae.stop()}},ne,null,[[4,20]])}));return function(){return ue.apply(this,arguments)}}(),Rr=function(){return n.m8.push("/ws/".concat(je,"/test_plan?").concat((0,Gt.stringify)(Pe)))},Ar=function(){var ue=(0,R.Z)((0,Z.Z)().mark(function ne(){var k,g,A,xe;return(0,Z.Z)().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:if(!I){z.next=2;break}return z.abrupt("return");case 2:return B(!0),z.prev=3,z.next=6,ut();case 6:return k=z.sent,z.next=9,(0,Wt.qW)((0,d.Z)((0,d.Z)({},k),{},{ws_id:je,plan_id:H}));case 9:if(g=z.sent,A=g.code,xe=g.msg,A===200){z.next=16;break}return(0,N.EV)(A,xe),B(!1),z.abrupt("return");case 16:n.m8.push("/ws/".concat(je,"/test_plan?").concat((0,Gt.stringify)(Pe))),z.next=24;break;case 19:z.prev=19,z.t0=z.catch(3),console.log(z.t0),B(!1),$t(z.t0);case 24:case"end":return z.stop()}},ne,null,[[3,19]])}));return function(){return ue.apply(this,arguments)}}();return(0,e.jsx)(W.Z,{spinning:Ze,children:(0,e.jsxs)(Cr,{height:ke,children:[(0,e.jsx)(Or,{align:"middle",children:(0,e.jsxs)(rt.Z,{children:[(0,e.jsx)(rt.Z.Item,{onClick:Rr,children:(0,e.jsx)("span",{style:{cursor:"pointer"},children:(0,e.jsx)(n._H,{id:"menu.Workspace.TestPlan.Manage"})})}),(0,e.jsx)(rt.Z.Item,{children:(0,e.jsx)(n._H,{id:"Workspace.TestPlan.".concat(pe.name)})})]})}),(0,e.jsx)(yr,{height:ke,children:ze?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(_r,{state:pe.name!=="Create",enLocale:f,children:(0,e.jsxs)(nt.Z,{current:V,direction:"vertical",style:{height:201},onChange:et,children:[(0,e.jsx)(nt.Z.Step,{title:(0,e.jsx)(n._H,{id:"plan.basic.configuration"}),className:Jt()[["Run","Edit"].includes(pe.name)?"stepsWrapper_1":"stepsWrapper"]},0),(0,e.jsx)(nt.Z.Step,{title:(0,e.jsx)(n._H,{id:"plan.test.configuration"}),className:Jt()[["Run","Edit"].includes(pe.name)?"stepsWrapper_2":"stepsWrapper"]},1),(0,e.jsx)(nt.Z.Step,{title:(0,e.jsx)(n._H,{id:"plan.report.configuration"})},2),(0,e.jsx)(nt.Z.Step,{title:(0,e.jsx)(n._H,{id:"plan.trigger.configuration"})},3)]})}),(0,e.jsxs)(Pr,{enLocale:f,children:[(0,e.jsx)(Sr,{children:(0,e.jsxs)(X.Z,{justify:"space-between",align:"middle",children:[(0,e.jsx)("div",{className:Jt().plan_step_btn,onClick:Q,children:V===0?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Zr.Z,{}),(0,e.jsx)("span",{children:(0,e.jsx)(n._H,{id:"operation.previous"})})]})}),(0,e.jsxs)(Ae.Z,{children:[pe.name==="Run"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(P.Z,{onClick:function(){return on()},children:(0,e.jsx)(n._H,{id:"plan.run.only"})}),(0,e.jsx)(n.Nv,{accessible:v.WsTourist(),children:(0,e.jsx)(n.Nv,{accessible:v.WsMemberOperateSelf(h==null?void 0:h.creator),fallback:(0,e.jsx)(P.Z,{onClick:function(){return(0,N.WR)()},type:"primary",children:(0,e.jsx)(n._H,{id:"plan.run.and.save"})}),children:(0,e.jsx)(P.Z,{onClick:function(){return on(!0)},type:"primary",children:(0,e.jsx)(n._H,{id:"plan.run.and.save"})})})})]}),pe.name==="Edit"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(P.Z,{onClick:Ar,type:"primary",children:(0,e.jsx)(n._H,{id:"plan.save"})}),(0,e.jsx)(n.Nv,{accessible:v.WsTourist(),children:(0,e.jsx)(n.Nv,{accessible:v.WsMemberOperateSelf(h==null?void 0:h.creator),fallback:(0,e.jsx)(P.Z,{onClick:function(){return(0,N.WR)()},children:(0,e.jsx)(n._H,{id:"plan.save.and.run"})}),children:(0,e.jsx)(P.Z,{onClick:function(){return on(!0)},children:(0,e.jsx)(n._H,{id:"plan.save.and.run"})})})})]}),(0,e.jsx)("div",{className:Jt().plan_step_btn,onClick:function(){return Me("NextStep")},children:V<3&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{style:{fontSize:14},children:(0,e.jsx)(n._H,{id:"operation.next"})}),(0,e.jsx)(br.Z,{})]})}),V===3&&(0,e.jsx)(e.Fragment,{children:pe.name==="Create"&&(0,e.jsx)(P.Z,{type:"primary",onClick:kr,children:(0,e.jsx)(n._H,{id:"plan.release"})})})]})]})}),(0,e.jsxs)(Er,{children:[(0,e.jsx)(yt,{show:V===0?"block":"none",ref:Y,template:h}),(0,e.jsx)(ur,{show:V===1?"block":"none",template:h,onChange:St}),(0,e.jsx)(fr,(0,d.Z)((0,d.Z)({},u),{},{show:V===2?"block":"none",ref:Ke,template:h})),(0,e.jsx)(jr,{ref:ge,template:h,show:V===3?"block":"none"})]})]})]}):(0,e.jsxs)("div",{style:{width:"100%"},children:[(0,e.jsx)(Ee.ZP,{status:"success",style:{margin:"0 auto"},title:(0,e.jsx)(n._H,{id:"plan.created.success"}),subTitle:(0,e.jsx)(n._H,{id:"plan.the.test.plan.can"}),extra:[(0,e.jsx)(P.Z,{type:"primary",onClick:function(){return n.m8.push("/ws/".concat(je,"/test_plan?").concat((0,Gt.stringify)(Pe)))},children:(0,e.jsx)(n._H,{id:"plan.return.management"})},"console")]}),(0,e.jsxs)(Tr,{children:[(0,e.jsx)(Te.Z,{span:24,children:(0,e.jsx)("b",{children:(0,e.jsx)(n._H,{id:"plan.configuration.information"})})}),(0,e.jsx)(Te.Z,{span:24,children:(0,e.jsxs)(X.Z,{children:[(L==null?void 0:L.name)&&(0,e.jsx)(Te.Z,{span:12,children:(0,e.jsxs)(Ae.Z,{children:[(0,e.jsxs)("span",{children:[(0,e.jsx)(n._H,{id:"plan.table.name"}),"\uFF1A"]}),(0,e.jsx)("span",{children:L==null?void 0:L.name})]})}),(L==null?void 0:L.cron_info)&&(0,e.jsx)(Te.Z,{span:12,children:(0,e.jsxs)(Ae.Z,{children:[(0,e.jsxs)("span",{children:[(0,e.jsx)(n._H,{id:"plan.table.cron_info"}),"\uFF1A"]}),(0,e.jsx)("span",{children:L==null?void 0:L.cron_info})]})}),(L==null?void 0:L.enable)&&(0,e.jsx)(Te.Z,{span:12,children:(0,e.jsxs)(Ae.Z,{children:[(0,e.jsxs)("span",{children:[(0,e.jsx)(n._H,{id:"plan.table.enable"}),"\uFF1A"]}),(0,e.jsx)("span",{children:L!=null&&L.enable?(0,e.jsx)(Ne.Z,{status:"processing",text:(0,e.jsx)(n._H,{id:"operation.yes"})}):(0,e.jsx)(Ne.Z,{status:"default",text:(0,e.jsx)(n._H,{id:"operation.no"})})})]})}),(L==null?void 0:L.next_time)&&(0,e.jsx)(Te.Z,{span:12,children:(0,e.jsxs)(Ae.Z,{children:[(0,e.jsxs)("span",{children:[(0,e.jsx)(n._H,{id:"plan.next_time"}),"\uFF1A"]}),(0,e.jsx)("span",{children:L==null?void 0:L.next_time})]})})]})})]})]})})]})})},Mr=Lr},48598:function(qe,tt,t){"use strict";t.d(tt,{d3:function(){return W},lY:function(){return lt},g3:function(){return Ne},NH:function(){return ot},jW:function(){return Te},qW:function(){return J},uy:function(){return Ee},Nm:function(){return pt}});var ve=t(16917),W=function(q){return(0,ve.WY)("/api/plan/list/",{params:q})},lt=function(q){return(0,ve.WY)("/api/plan/list/",{data:q,method:"post"})},Ne=function(q){return(0,ve.WY)("/api/plan/run/",{data:q,method:"post"})},ot=function(q){return(0,ve.WY)("/api/plan/detail/",{data:q,method:"delete"})},Te=function(q){return(0,ve.WY)("/api/plan/detail/",{params:q})},J=function(q){return(0,ve.WY)("/api/plan/detail/",{data:q,method:"put"})},Ee=function(q){return(0,ve.WY)("/api/plan/check/cron_expression/",{data:q,method:"post"})},pt=function(q){return(0,ve.WY)("/api/plan/copy/",{data:q,method:"post"})}},72529:function(qe,tt,t){"use strict";t.d(tt,{gN:function(){return l},tZ:function(){return te},yQ:function(){return ye},Pc:function(){return re},KS:function(){return me},YV:function(){return c},Nq:function(){return N},JQ:function(){return yt},iK:function(){return _t},fD:function(){return We},QN:function(){return Zt},ud:function(){return it}});var ve=t(402),W=t(97272),lt=t(49111),Ne=t(19650),ot=t(20136),Te=t(55241),J=t(11849),Ee=t(71153),pt=t(60331),X=t(89032),q=t(15746),Ae=t(13062),He=t(71230),P=t(22385),gt=t(89456),nt=t(20310),It=t(36017),rt=t(35247),d=t(67294),M=t(77429),Be=t.n(M),Ce=t(8212),Z=t(1870),R=t(20009),x=t(16917),s=t(12788),Ct=t(24480),ee=t(60035),xt=t(10753),a=t(85893),$,S,D=new Map([["success","#81BF84"],["pass","#81BF84"],["running","#649FF6"],["fail","#C84C5A"]]),l=function(i){var j=(0,R.UO)(),O=j.ws_id;return(0,a.jsxs)(rt.Z,{style:{marginBottom:i.bottomHeight},children:[(0,a.jsx)(rt.Z.Item,{children:(0,a.jsx)("span",{style:{cursor:"pointer"},onClick:function(){return x.m8.push("/ws/".concat(O,"/test_result"))},children:(0,a.jsx)(x._H,{id:"ws.result.details.test.result"})})}),(0,a.jsx)(rt.Z.Item,{children:(0,a.jsx)(x._H,{id:"ws.result.details.result.details"})})]})},r=new Map([["success","#81BF84"],["fail","#C84C5A"],["running","#649FF6"],["stop","#1D1D1D"],["pending","#1D1D1D"],["skip","#1D1D1D"],["warning","#faad14"]]),n=function(i){return r.get(i)||""},y=s.ZP.span($||($=(0,nt.Z)([`
    color: `,`;
    fontWeight: 500;
    text-transform: capitalize;
`])),function(U){var i=U.color;return i}),te=function(i){var j=i;return Object.prototype.toString.call(i)==="[object Boolean]"&&(j=i?"success":"fail"),(0,a.jsx)(y,{color:n(j),children:j})},ye=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"-";return{ellipsis:{showTitle:!1},render:function(O){return O?(0,a.jsx)(xt.K,{ellipsis:{tooltip:!0},children:O}):i}}},re=function(i){var j=i.title,O=i.width,se=O===void 0?"100%":O,Ie=i.onEdit,Ft=i.access,ct=(0,d.useRef)(),Lt=(0,R.UO)(),ht=Lt.share_id;return(0,a.jsx)("div",{ref:ct,style:{width:se},children:(0,a.jsxs)(He.Z,{style:{width:se},justify:"start",align:"middle",children:[(0,a.jsx)(gt.Z,{placement:"topLeft",title:j,children:(0,a.jsx)("span",{style:{maxWidth:54,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:j||"-"})}),!ht&&(0,a.jsx)(Ce.Z,{style:{marginLeft:6,cursor:"pointer"},onClick:function(){return Ft?Ie():(0,Ct.WR)()}})]})})},Ve=function(i){return D.get(i)||"#D9D9D9"},Ge=function(i){var j=i.text,O=(0,x.YB)(),se=(0,ee.oM)(O.formatMessage({id:"request.copy.success"}));return(0,a.jsx)("span",{style:{cursor:"pointer",color:"#1890ff"},onClick:function(){return se(j)},children:O.formatMessage({id:"operation.copy",defaultMessage:"\u590D\u5236"})})},De=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"-";return{ellipsis:{showTitle:!1},render:function(O){return O?_jsx(_Tooltip,{overlayClassName:styles.tootip_overflow,placement:"topLeft",title:_jsxs(_Row,{children:[_jsx(_Col,{span:24,style:{whiteSpace:"break-spaces"},children:O}),_jsx(_Col,{span:24,children:_jsx(_Row,{justify:"center",children:_jsx(Ge,{text:O})})})]}),children:O}):i}}},me=function(i){var j=i.text,O=i.defaultText,se=O===void 0?"-":O;return j?(0,a.jsx)(gt.Z,{overlayClassName:Be().tootip_overflow,placement:"topLeft",title:(0,a.jsxs)(He.Z,{children:[(0,a.jsx)(q.Z,{span:24,style:{whiteSpace:"break-spaces"},children:j}),(0,a.jsx)(q.Z,{span:24,children:(0,a.jsx)(He.Z,{justify:"center",children:(0,a.jsx)(Ge,{text:j})})})]}),children:j}):se},c=function(i){return i==="decline"?"#C84C5A":i==="normal"?"#000000":i==="increase"?"#81BF84":""},N=function(i,j,O){return i==="decline"?(0,a.jsx)("span",{style:{color:"#C84C5A"},children:O({id:"ws.result.details.".concat(i)})}):i==="normal"?(0,a.jsx)("span",{style:{color:"#000000"},children:O({id:"ws.result.details.".concat(i)})}):i==="increase"?(0,a.jsx)("span",{style:{color:"#81BF84"},children:O({id:"ws.result.details.".concat(i)})}):j||"-"},e=(0,s.ZP)(pt.Z)(S||(S=(0,nt.Z)([`
    font-weight: 500;
    width: 72px;
    text-align: center;
    `,`
    text-transform: capitalize;
`])),function(U){var i=U.no_margin;return i?"margin-right: 0;":""}),Ye=function(i){return(0,a.jsx)(e,(0,J.Z)({},(0,J.Z)((0,J.Z)({},i),{},{collection:void 0})))},we=function(i){var j=(0,x.YB)(),O=j.formatMessage;return(0,a.jsx)(gt.Z,{title:O({id:"ws.result.details.job_state"}),placement:"bottom",children:(0,a.jsx)(e,(0,J.Z)({},i))})},st=function(i){var j=i.title;return(0,a.jsx)(Te.Z,{title:j,placement:"right",trigger:"hover",overlayClassName:Be().tag_popover_style,children:(0,a.jsx)(Z.Z,{style:{color:"rgba(0, 0, 0, 0.65)",verticalAlign:"middle"}})})},at=function(i){var j=i.state;return(0,a.jsx)(Ye,(0,J.Z)((0,J.Z)({},i),{},{color:Ve(j),style:D.get(j)?void 0:{color:"#1d1d1d"},children:j==="success"?"complete":j}))},jt=function(i){var j=i.state;return(0,a.jsx)(we,(0,J.Z)((0,J.Z)({},i),{},{color:Ve(j),style:D.get(j)?void 0:{color:"#1d1d1d"},children:j==="success"?"complete":j}))},yt=function(i){var j=(0,x.YB)(),O=j.formatMessage,se=i.state,Ie=i.run_state,Ft=Ie===void 0?"":Ie,ct=i.state_desc,Lt=(0,R.UO)(),ht=Lt.ws_id;return se==="running"?ct?(0,a.jsxs)(Ne.Z,{size:0,children:[(0,a.jsx)(at,(0,J.Z)((0,J.Z)({},i),{},{children:se})),(0,a.jsx)(st,{title:(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:ct.replace(/(\d+)/g,'<a href="/ws/'.concat(ht,'/test_result/$1" target="_blank">$1</a>'))}})})]}):Ft?(0,a.jsxs)(Ne.Z,{size:0,children:[(0,a.jsx)(at,(0,J.Z)((0,J.Z)({},i),{},{children:se})),(0,a.jsx)(st,{title:O({id:"ws.result.details.not.assigned.server"})})]}):(0,a.jsxs)(Ne.Z,{size:0,children:[(0,a.jsx)(at,(0,J.Z)((0,J.Z)({},i),{},{children:se})),(0,a.jsx)(st,{title:O({id:"ws.result.details.running,please.wait"})})]}):se==="pending"&&ct?(0,a.jsxs)(Ne.Z,{size:0,children:[(0,a.jsx)(at,(0,J.Z)((0,J.Z)({},i),{},{children:se})),(0,a.jsx)(st,{title:(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:ct.replace(/(\d+)/g,'<a href="/ws/'.concat(ht,'/test_result/$1" target="_blank">$1</a>'))}})})]}):(0,a.jsx)(at,(0,J.Z)({},i))},_t=function(i){return(0,a.jsx)(jt,(0,J.Z)((0,J.Z)({},i),{},{no_margin:1}))},We=function(i){var j=i.title,O=i.desc,se=i.placement,Ie=se===void 0?"bottom":se;return(0,a.jsxs)(Ne.Z,{children:[(0,a.jsx)("span",{style:{color:"rgba(0, 0, 0, 0.85)"},children:j}),(0,a.jsx)(gt.Z,{overlayClassName:Be().table_question_tooltip,placement:Ie,arrowPointAtCenter:!0,title:O,color:"#fff",children:(0,a.jsx)(Z.Z,{style:{color:"rgba(0, 0, 0, 0.65)"}})})]})},Zt=function(i){var j=i.title,O=i.test_value,se=i.value_list,Ie=i.cv_value,Ft=i.max_value,ct=i.min_value,Lt=i.metric,ht=i.result,Rt=(0,x.YB)(),Xt=Rt.formatMessage,qt=(0,ee.oM)(Xt({id:"request.copy.success"})),Tt=function(dt){return dt?new Number(dt).toFixed(2):null},bt=Tt(Ft),At=Tt(ct),Nt=Ie,Ht=Tt(O),Mt=se.map(function(ft){return Tt(ft)}),Pt="".concat(Lt," ").concat(j,`:
Avg: `).concat(Ht,`
CV:  `).concat(Nt);Pt+=bt?`
Max: `.concat(bt):"",Pt+=At?`
Min: `.concat(At):"",Pt+=Mt.length?`
Test Record
`:"",Pt+=Mt.reduce(function(ft,dt,tn){return ft.concat("(".concat(tn+1,") ").concat(dt,`
`))},"");var Bt="".concat(Ht,"\xB1").concat(Nt),en=function(){return ht==="decline"?(0,a.jsx)("span",{className:Be().result_popover_span,style:{color:"#C84C5A"},children:Bt}):ht==="increase"?(0,a.jsx)("span",{className:Be().result_popover_span,style:{color:"#81BF84"},children:Bt}):(0,a.jsx)("span",{className:Be().result_popover_span,style:{color:"rgba(0, 0, 0, 0.65)"},children:Bt})};return(0,a.jsx)(Te.Z,{overlayClassName:Be().metric_list_copy,title:(0,a.jsxs)(He.Z,{justify:"space-between",children:[(0,a.jsx)("b",{children:j}),(0,a.jsx)("span",{onClick:function(){return qt(Pt)},style:{color:"#1890FF",cursor:"pointer",marginLeft:"8px"},children:(0,a.jsx)(x._H,{id:"operation.copy"})})]}),content:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(He.Z,{children:[(0,a.jsx)("b",{children:"Avg\uFF1A"}),(0,a.jsx)("span",{children:Ht})]}),(0,a.jsxs)(He.Z,{children:[(0,a.jsx)("b",{children:"CV\uFF1A"}),(0,a.jsx)("span",{children:Nt})]}),(0,a.jsxs)(He.Z,{children:[(0,a.jsx)("b",{children:"Max\uFF1A"}),(0,a.jsx)("span",{children:bt})]}),(0,a.jsxs)(He.Z,{children:[(0,a.jsx)("b",{children:"Min\uFF1A"}),(0,a.jsx)("span",{children:At})]}),Mt.length>0&&(0,a.jsx)(He.Z,{style:{marginTop:16},children:(0,a.jsx)("b",{children:"Test Record"})}),Mt.map(function(ft,dt){return(0,a.jsx)(He.Z,{children:"(".concat(dt+1,")").concat(ft)},dt)})]}),children:en()})},it=function(i,j){return j&&(0,a.jsx)(q.Z,{span:24,children:(0,a.jsxs)(He.Z,{children:[(0,a.jsx)(W.Z.Text,{style:{width:70,fontWeight:600,marginRight:8},children:i}),(0,a.jsx)(W.Z.Paragraph,{style:{width:"calc( 100% - 70px - 8px)"},ellipsis:!0,children:j})]})})}},50273:function(qe,tt,t){"use strict";t.d(tt,{Z:function(){return xt}});var ve=t(22122),W=t(96156),lt=t(79508),Ne=t(54549),ot=t(94184),Te=t.n(ot),J=t(28991),Ee=t(81253),pt=t(6610),X=t(5991),q=t(63349),Ae=t(10379),He=t(60446),P=t(67294),gt=["className","prefixCls","style","active","status","iconPrefix","icon","wrapperStyle","stepNumber","disabled","description","title","subTitle","progressDot","stepIcon","tailContent","icons","stepIndex","onStepClick","onClick"];function nt(a){return typeof a=="string"}var It=function(a){(0,Ae.Z)(S,a);var $=(0,He.Z)(S);function S(){var D;(0,pt.Z)(this,S);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return D=$.call.apply($,[this].concat(r)),(0,W.Z)((0,q.Z)(D),"onClick",function(){var y=D.props,te=y.onClick,ye=y.onStepClick,re=y.stepIndex;te&&te.apply(void 0,arguments),ye(re)}),D}return(0,X.Z)(S,[{key:"renderIconNode",value:function(){var l,r=this.props,n=r.prefixCls,y=r.progressDot,te=r.stepIcon,ye=r.stepNumber,re=r.status,Ve=r.title,Ge=r.description,De=r.icon,me=r.iconPrefix,c=r.icons,N,e=Te()("".concat(n,"-icon"),"".concat(me,"icon"),(l={},(0,W.Z)(l,"".concat(me,"icon-").concat(De),De&&nt(De)),(0,W.Z)(l,"".concat(me,"icon-check"),!De&&re==="finish"&&(c&&!c.finish||!c)),(0,W.Z)(l,"".concat(me,"icon-cross"),!De&&re==="error"&&(c&&!c.error||!c)),l)),Ye=P.createElement("span",{className:"".concat(n,"-icon-dot")});return y?typeof y=="function"?N=P.createElement("span",{className:"".concat(n,"-icon")},y(Ye,{index:ye-1,status:re,title:Ve,description:Ge})):N=P.createElement("span",{className:"".concat(n,"-icon")},Ye):De&&!nt(De)?N=P.createElement("span",{className:"".concat(n,"-icon")},De):c&&c.finish&&re==="finish"?N=P.createElement("span",{className:"".concat(n,"-icon")},c.finish):c&&c.error&&re==="error"?N=P.createElement("span",{className:"".concat(n,"-icon")},c.error):De||re==="finish"||re==="error"?N=P.createElement("span",{className:e}):N=P.createElement("span",{className:"".concat(n,"-icon")},ye),te&&(N=te({index:ye-1,status:re,title:Ve,description:Ge,node:N})),N}},{key:"render",value:function(){var l,r=this.props,n=r.className,y=r.prefixCls,te=r.style,ye=r.active,re=r.status,Ve=re===void 0?"wait":re,Ge=r.iconPrefix,De=r.icon,me=r.wrapperStyle,c=r.stepNumber,N=r.disabled,e=r.description,Ye=r.title,we=r.subTitle,st=r.progressDot,at=r.stepIcon,jt=r.tailContent,yt=r.icons,_t=r.stepIndex,We=r.onStepClick,Zt=r.onClick,it=(0,Ee.Z)(r,gt),U=Te()("".concat(y,"-item"),"".concat(y,"-item-").concat(Ve),n,(l={},(0,W.Z)(l,"".concat(y,"-item-custom"),De),(0,W.Z)(l,"".concat(y,"-item-active"),ye),(0,W.Z)(l,"".concat(y,"-item-disabled"),N===!0),l)),i=(0,J.Z)({},te),j={};return We&&!N&&(j.role="button",j.tabIndex=0,j.onClick=this.onClick),P.createElement("div",(0,ve.Z)({},it,{className:U,style:i}),P.createElement("div",(0,ve.Z)({onClick:Zt},j,{className:"".concat(y,"-item-container")}),P.createElement("div",{className:"".concat(y,"-item-tail")},jt),P.createElement("div",{className:"".concat(y,"-item-icon")},this.renderIconNode()),P.createElement("div",{className:"".concat(y,"-item-content")},P.createElement("div",{className:"".concat(y,"-item-title")},Ye,we&&P.createElement("div",{title:typeof we=="string"?we:void 0,className:"".concat(y,"-item-subtitle")},we)),e&&P.createElement("div",{className:"".concat(y,"-item-description")},e))))}}]),S}(P.Component),rt=["prefixCls","style","className","children","direction","type","labelPlacement","iconPrefix","status","size","current","progressDot","stepIcon","initial","icons","onChange","items"],d=function(a){(0,Ae.Z)(S,a);var $=(0,He.Z)(S);function S(){var D;(0,pt.Z)(this,S);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return D=$.call.apply($,[this].concat(r)),(0,W.Z)((0,q.Z)(D),"onStepClick",function(y){var te=D.props,ye=te.onChange,re=te.current;ye&&re!==y&&ye(y)}),D}return(0,X.Z)(S,[{key:"render",value:function(){var l,r=this,n=this.props,y=n.prefixCls,te=n.style,ye=te===void 0?{}:te,re=n.className,Ve=n.children,Ge=n.direction,De=n.type,me=n.labelPlacement,c=n.iconPrefix,N=n.status,e=n.size,Ye=n.current,we=n.progressDot,st=n.stepIcon,at=n.initial,jt=n.icons,yt=n.onChange,_t=n.items,We=_t===void 0?[]:_t,Zt=(0,Ee.Z)(n,rt),it=De==="navigation",U=we?"vertical":me,i=Te()(y,"".concat(y,"-").concat(Ge),re,(l={},(0,W.Z)(l,"".concat(y,"-").concat(e),e),(0,W.Z)(l,"".concat(y,"-label-").concat(U),Ge==="horizontal"),(0,W.Z)(l,"".concat(y,"-dot"),!!we),(0,W.Z)(l,"".concat(y,"-navigation"),it),l));return P.createElement("div",(0,ve.Z)({className:i,style:ye},Zt),We.filter(function(j){return j}).map(function(j,O){var se=(0,J.Z)({},j),Ie=at+O;return N==="error"&&O===Ye-1&&(se.className="".concat(y,"-next-error")),se.status||(Ie===Ye?se.status=N:Ie<Ye?se.status="finish":se.status="wait"),P.createElement(It,(0,ve.Z)({},se,{active:Ie===Ye,stepNumber:Ie+1,stepIndex:Ie,key:Ie,prefixCls:y,iconPrefix:c,wrapperStyle:ye,progressDot:we,stepIcon:st,icons:jt,onStepClick:yt&&r.onStepClick}))}))}}]),S}(P.Component);(0,W.Z)(d,"Step",It),(0,W.Z)(d,"defaultProps",{type:"default",prefixCls:"rc-steps",iconPrefix:"rc",direction:"horizontal",labelPlacement:"horizontal",initial:0,current:0,status:"process",size:"",progressDot:!1});var M=d,Be=t(53124),Ce=t(25378),Z=t(3074),R=t(37419);function x(a){return a.filter(function($){return $})}function s(a,$){if(a)return a;var S=(0,R.Z)($).map(function(D){if(P.isValidElement(D)){var l=D.props,r=(0,ve.Z)({},l);return r}return null});return x(S)}var Ct=function(a,$){var S={};for(var D in a)Object.prototype.hasOwnProperty.call(a,D)&&$.indexOf(D)<0&&(S[D]=a[D]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,D=Object.getOwnPropertySymbols(a);l<D.length;l++)$.indexOf(D[l])<0&&Object.prototype.propertyIsEnumerable.call(a,D[l])&&(S[D[l]]=a[D[l]]);return S},ee=function($){var S=$.percent,D=$.size,l=$.className,r=$.direction,n=$.items,y=$.responsive,te=y===void 0?!0:y,ye=$.current,re=ye===void 0?0:ye,Ve=$.children,Ge=Ct($,["percent","size","className","direction","items","responsive","current","children"]),De=(0,Ce.Z)(te),me=De.xs,c=P.useContext(Be.E_),N=c.getPrefixCls,e=c.direction,Ye=P.useCallback(function(){return te&&me?"vertical":r},[me,r]),we=N("steps",$.prefixCls),st=N("",$.iconPrefix),at=s(n,Ve),jt=Te()((0,W.Z)((0,W.Z)({},"".concat(we,"-rtl"),e==="rtl"),"".concat(we,"-with-progress"),S!==void 0),l),yt={finish:P.createElement(lt.Z,{className:"".concat(we,"-finish-icon")}),error:P.createElement(Ne.Z,{className:"".concat(we,"-error-icon")})},_t=function(Zt){var it=Zt.node,U=Zt.status;if(U==="process"&&S!==void 0){var i=D==="small"?32:40;return P.createElement("div",{className:"".concat(we,"-progress-icon")},P.createElement(Z.Z,{type:"circle",percent:S,width:i,strokeWidth:4,format:function(){return null}}),it)}return it};return P.createElement(M,(0,ve.Z)({icons:yt},Ge,{current:re,size:D,items:at,direction:Ye(),stepIcon:_t,prefixCls:we,iconPrefix:st,className:jt}))};ee.Step=M.Step;var xt=ee},35556:function(qe,tt,t){"use strict";var ve=t(38663),W=t.n(ve),lt=t(48395),Ne=t.n(lt),ot=t(34669)},52141:function(qe,tt,t){"use strict";t.d(tt,{Z:function(){return d}});var ve=t(22122),W=t(96156),lt=t(7085),Ne=t(94184),ot=t.n(Ne),Te=t(28481),J=t(81253),Ee=t(67294),pt=t(5663),X=t(92389),q=Ee.forwardRef(function(M,Be){var Ce,Z=M.prefixCls,R=Z===void 0?"rc-switch":Z,x=M.className,s=M.checked,Ct=M.defaultChecked,ee=M.disabled,xt=M.loadingIcon,a=M.checkedChildren,$=M.unCheckedChildren,S=M.onClick,D=M.onChange,l=M.onKeyDown,r=(0,J.Z)(M,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),n=(0,pt.Z)(!1,{value:s,defaultValue:Ct}),y=(0,Te.Z)(n,2),te=y[0],ye=y[1];function re(me,c){var N=te;return ee||(N=me,ye(N),D==null||D(N,c)),N}function Ve(me){me.which===X.Z.LEFT?re(!1,me):me.which===X.Z.RIGHT&&re(!0,me),l==null||l(me)}function Ge(me){var c=re(!te,me);S==null||S(c,me)}var De=ot()(R,x,(Ce={},(0,W.Z)(Ce,"".concat(R,"-checked"),te),(0,W.Z)(Ce,"".concat(R,"-disabled"),ee),Ce));return Ee.createElement("button",Object.assign({},r,{type:"button",role:"switch","aria-checked":te,disabled:ee,className:De,ref:Be,onKeyDown:Ve,onClick:Ge}),xt,Ee.createElement("span",{className:"".concat(R,"-inner")},te?a:$))});q.displayName="Switch";var Ae=q,He=t(53124),P=t(98866),gt=t(97647),nt=t(21790),It=function(M,Be){var Ce={};for(var Z in M)Object.prototype.hasOwnProperty.call(M,Z)&&Be.indexOf(Z)<0&&(Ce[Z]=M[Z]);if(M!=null&&typeof Object.getOwnPropertySymbols=="function")for(var R=0,Z=Object.getOwnPropertySymbols(M);R<Z.length;R++)Be.indexOf(Z[R])<0&&Object.prototype.propertyIsEnumerable.call(M,Z[R])&&(Ce[Z[R]]=M[Z[R]]);return Ce},rt=Ee.forwardRef(function(M,Be){var Ce=M.prefixCls,Z=M.size,R=M.disabled,x=M.loading,s=M.className,Ct=s===void 0?"":s,ee=It(M,["prefixCls","size","disabled","loading","className"]),xt=Ee.useContext(He.E_),a=xt.getPrefixCls,$=xt.direction,S=Ee.useContext(gt.Z),D=Ee.useContext(P.Z),l=(R!=null?R:D)||x,r=a("switch",Ce),n=Ee.createElement("div",{className:"".concat(r,"-handle")},x&&Ee.createElement(lt.Z,{className:"".concat(r,"-loading-icon")})),y=ot()((0,W.Z)((0,W.Z)((0,W.Z)({},"".concat(r,"-small"),(Z||S)==="small"),"".concat(r,"-loading"),x),"".concat(r,"-rtl"),$==="rtl"),Ct);return Ee.createElement(nt.Z,{insertExtraNode:!0},Ee.createElement(Ae,(0,ve.Z)({},ee,{prefixCls:r,className:y,disabled:l,ref:Be,loadingIcon:n})))});rt.__ANT_SWITCH=!0;var d=rt}}]);
