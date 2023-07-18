(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[1683],{85311:function(Ke,Ve,t){"use strict";t.d(Ve,{Z:function(){return ct}});var ue=t(45972),T=t(22374),ot={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"}}]},name:"plus-circle",theme:"filled"},Xe=ot,te=t(25078),Fe=function(ut,J){return T.createElement(te.Z,(0,ue.Z)((0,ue.Z)({},ut),{},{ref:J,icon:Xe}))};Fe.displayName="PlusCircleFilled";var ct=T.forwardRef(Fe)},74127:function(Ke,Ve,t){"use strict";t.d(Ve,{Z:function(){return ue}});function ue(T){if(T==null)throw new TypeError("Cannot destructure undefined")}},26449:function(Ke){Ke.exports={job_plan_form:"job_plan_form___24esx",cascaderStyle:"cascaderStyle___1QF0V"}},6937:function(Ke){Ke.exports={job_plan_form:"job_plan_form___2XoMb",templateListDrawerSpace:"templateListDrawerSpace____VYHT"}},74711:function(Ke){Ke.exports={stepsWrapper_1:"stepsWrapper_1___1goW7",stepsWrapper_2:"stepsWrapper_2___JR3TX",plan_step_btn:"plan_step_btn___2ttxd"}},86252:function(Ke){Ke.exports={test_result_name:"test_result_name___1RBzL",test_summary_item:"test_summary_item___3-Yoh",test_summary_item_right:"test_summary_item_right___2UQVi",test_summary_item_right_unellipsis:"test_summary_item_right_unellipsis___2cRIc",test_summary_job:"test_summary_job___2a2-P",test_summary_row:"test_summary_row___1zXMg",detail_collection:"detail_collection___1_th-",offline_flag:"offline_flag___3BdpH",ellips_column_refclass:"ellips_column_refclass___30H4W",tag_popover_style:"tag_popover_style___1x8MG",table_question_tooltip:"table_question_tooltip___1Ur7e",join_baseline:"join_baseline___Jgafh",select_baseline:"select_baseline___2nHPA"}},67808:function(){},46448:function(Ke,Ve,t){"use strict";t.r(Ve),t.d(Ve,{default:function(){return ka}});var ue=t(67448),T=t(47548),ot=t(90846),Xe=t(56511),te=t(70772),Fe=t(6701),ct=t(73124),Se=t(91771),ut=t(14320),J=t(53479),Ze=t(57359),ne=t(34423),Et=t(46721),j=t(94867),kt=t(79716),qe=t(71924),Ct=t(89963),pt=t(70077),o=t(20418),L=t(488),st=t(81138),ie=t(96146),g=t(35832),$=t(32326),C=t(39190),s=t(22374),vt=t(88966),r=t(11048),gt=t(69230),D=t(33821),K=t(20693),P=t(3278),w=t(65790),i=t(17187),a=t(41428),n=t(22812),y=t(24812),G=t(75841),ye=t(14582),q=t(6937),Ye=t.n(q),et=t(96211),ge=t(78938),re=t(39854),d=t(97939),e=t(52454),Qe,Be,Je=d.ZP.span(Qe||(Qe=(0,a.Z)([`
    position:absolute;
    right: 30px;
    top: 4px;
    font-size: 12px;
    color:rgba(0,0,0,.45);
`]))),z=d.ZP.div(Be||(Be=(0,a.Z)([`
    position:relative;
`]))),l=function(u,E){var p=(0,n.YB)(),f=p.formatMessage,v=u.template,pe=u.show,ke=(0,y.UO)(),Oe=ke.ws_id,_e=i.Z.useForm(),he=(0,C.Z)(_e,1),V=he[0],be=(0,s.useState)("no"),A=(0,C.Z)(be,2),le=A[0],Te=A[1],Y=(0,s.useState)("rpm"),k=(0,C.Z)(Y,2),ee=k[0],ve=k[1],De=(0,n.QT)(function(){return(0,G.YK)({ws_id:Oe,page_size:500})},{initialData:[]}),Re=De.data,oe=(0,n.QT)(function(){return(0,G.bU)({ws_id:Oe,page_size:500})},{initialData:[]}),we=oe.data,Ne=(0,n.QT)(function(){return(0,ye.ZP)({enable:"True"})}),Ae=Ne.data,ze=function(H){Te(H.target.value),V.setFieldsValue({test_obj:ee}),V.resetFields(["kernel_packages","kernel_version"])};(0,s.useImperativeHandle)(E,function(){return{validate:function(){return V.validateFields()}}}),(0,s.useEffect)(function(){if(v&&JSON.stringify(v)!=="{}"){var F=v.build_pkg_info,H=v.kernel_info,Q=v.kernel_version,xe=v.test_obj;ve(xe),xe==="kernel"&&(JSON.stringify(F)!=="{}"&&Te("install_build_kernel"),JSON.stringify(H)!=="{}"&&Te(Q?"install_push":"install_un_push")),V.setFieldsValue((0,o.Z)((0,o.Z)((0,o.Z)({},H),F),v))}},[v]);var O={allowClear:!0,getPopupContainer:function(H){return H.parentNode},showSearch:!0,filterOption:function(H,Q){var xe;return((xe=Q==null?void 0:Q.label)!==null&&xe!==void 0?xe:"").toLowerCase().includes(H.toLowerCase())}};return(0,e.jsx)("div",{style:{display:pe,width:"100%",height:"100%",overflowY:"auto",paddingTop:20,paddingBottom:20},children:(0,e.jsxs)(i.Z,{form:V,layout:"horizontal",size:"small",labelCol:{span:4},wrapperCol:{span:12},style:{width:"100%"},colon:!1,className:Ye().job_plan_form,initialValues:{hotfix_install:!0,test_obj:"rpm",scripts:[{pos:"before",script:""}]},children:[(0,e.jsx)(i.Z.Item,{name:"name",label:(0,e.jsx)(n._H,{id:"plan.plan.name"}),rules:[{required:!0,message:f({id:"plan.plan.name.message"}),max:64}],children:(0,e.jsx)(P.Z,{autoComplete:"off",placeholder:f({id:"plan.plan.name.placeholder"})})}),(0,e.jsx)(i.Z.Item,{name:"description",label:(0,e.jsx)(n._H,{id:"plan.plan.description"}),children:(0,e.jsx)(P.Z.TextArea,{autoComplete:"off",placeholder:f({id:"plan.plan.description.placeholder"})})}),(0,e.jsx)(i.Z.Item,{name:"project_id",label:"Project",children:(0,e.jsx)(D.Z,(0,o.Z)((0,o.Z)({},O),{},{placeholder:f({id:"plan.plan.project_id"}),options:Re.map(function(F){return{value:F.id,label:"".concat(F.name,"(").concat(F.product_name,")")}})}))}),(0,e.jsxs)(i.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.test.baseline"}),children:[(0,e.jsxs)(z,{children:[(0,e.jsx)(i.Z.Item,{name:"func_baseline",children:(0,e.jsx)(D.Z,(0,o.Z)((0,o.Z)({},O),{},{placeholder:f({id:"plan.func_baseline.placeholder"}),options:we.filter(function(F){return F.test_type==="functional"}).map(function(F){return{value:F.id,label:F.name}})}))}),(0,e.jsx)(Je,{children:(0,e.jsx)(n._H,{id:"plan.function"})})]}),(0,e.jsxs)(z,{children:[(0,e.jsx)(i.Z.Item,{name:"perf_baseline",children:(0,e.jsx)(D.Z,(0,o.Z)((0,o.Z)({},O),{},{placeholder:f({id:"plan.perf_baseline.placeholder"}),options:we.filter(function(F){return F.test_type==="performance"}).map(function(F){return{value:F.id,label:F.name}})}))}),(0,e.jsx)(Je,{children:(0,e.jsx)(n._H,{id:"plan.performance"})})]})]}),(0,e.jsx)(i.Z.Item,{name:"test_obj",label:(0,e.jsx)(n._H,{id:"plan.tested.object"}),children:(0,e.jsxs)(D.Z,(0,o.Z)((0,o.Z)({},O),{},{filterOption:!1,onChange:function(H){return ve(H)},placeholder:"\u8BF7\u9009\u62E9\u88AB\u6D4B\u5BF9\u8C61",children:[(0,e.jsx)(D.Z.Option,{value:"kernel",children:(0,e.jsx)(n._H,{id:"plan.kernel.package"})}),(0,e.jsx)(D.Z.Option,{value:"rpm",children:(0,e.jsx)(n._H,{id:"plan.others.soft"})})]}))}),ee=="kernel"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.kernel"}),children:(0,e.jsxs)(r.ZP.Group,{value:le,onChange:ze,children:[(0,e.jsx)(r.ZP,{value:"no",children:(0,e.jsx)(n._H,{id:"ws.result.details.install_no"})}),(0,e.jsx)(r.ZP,{value:"install_push",children:(0,e.jsx)(n._H,{id:"plan.install_push"})}),(0,e.jsx)(r.ZP,{value:"install_un_push",children:(0,e.jsx)(n._H,{id:"plan.install_un_push"})}),(0,e.jsx)(r.ZP,{value:"install_build_kernel",children:(0,e.jsx)(n._H,{id:"plan.install_build_kernel"})})]})}),le==="install_push"&&(0,e.jsx)(et.Z,{form:V,kernel:le,kernelList:Ae,needScriptList:!0}),le==="install_un_push"&&(0,e.jsx)(ge.Z,{needScriptList:!0,form:V}),le==="install_build_kernel"&&(0,e.jsx)(re.Z,{needScriptList:!1,form:V,isPlan:!0})]}),(0,e.jsx)(i.Z.Item,{name:"rpm_info",label:(0,e.jsx)(n._H,{id:"plan.rpm_info"}),children:(0,e.jsx)(P.Z.TextArea,{placeholder:f({id:"plan.rpm_info.placeholder"})})}),(0,e.jsx)(i.Z.Item,{name:"env_info",label:(0,e.jsx)(n._H,{id:"plan.env_info"}),rules:[function(){return{validator:function(H,Q){if(Q){var xe=/^(\w+=((('[^']+'|"[^"]+")|.+)(\n)))*\w+=(('[^']+'|"[^"]+")|.+)$/;return xe.test(Q)?Promise.resolve():Promise.reject(f({id:"plan.env_info.reject"}))}return Promise.resolve()}}}],children:(0,e.jsx)(P.Z.TextArea,{placeholder:f({id:"plan.env_info.reject"})})}),(0,e.jsx)(i.Z.Item,{name:"notice_name",label:(0,e.jsx)(n._H,{id:"plan.notice_name"}),children:(0,e.jsx)(P.Z,{autoComplete:"off",placeholder:f({id:"plan.notice_name.placeholder"},{date:"{date}"})})}),(0,e.jsx)(i.Z.Item,{name:"email_info",label:(0,e.jsx)(n._H,{id:"plan.email_info"}),rules:[function(){return{validator:function(H,Q){if(Q){var xe=Q.split(/,|，|\s/g),He=/(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})+)/,fe=xe.filter(function(Z){return!He.test(Z)}).length;return fe===0?Promise.resolve():Promise.reject(f({id:"plan.email_info.reject"}))}return Promise.resolve()}}}],children:(0,e.jsx)(P.Z,{autoComplete:"off",placeholder:f({id:"plan.email_info.placeholder"})})}),(0,e.jsx)(i.Z.Item,{name:"ding_talk_info",label:(0,e.jsx)(n._H,{id:"plan.ding_talk_info"}),children:(0,e.jsx)(P.Z,{autoComplete:"off",placeholder:f({id:"plan.ding_talk_info.placeholder"})})}),(0,e.jsx)(i.Z.Item,{name:"enable",label:(0,e.jsx)(n._H,{id:"plan.enable"}),initialValue:!0,children:(0,e.jsxs)(r.ZP.Group,{children:[(0,e.jsx)(r.ZP,{value:!0,children:(0,e.jsx)(n._H,{id:"operation.yes"})}),(0,e.jsx)(r.ZP,{value:!1,children:(0,e.jsx)(n._H,{id:"operation.no"})})]})})]})})},I=(0,s.forwardRef)(l),B=t(31650),W=t(25100),We=t(76740),tt=t(83396),$e=t(87967),nt=t(65320),at=t(79625),Le=t(96584),Ot=t(52730),it=t(25205),lt=t(88018),Tt=t(58414),$t=t(38519),Dt=t(16416),wt=t(2605),It=t(32237),yt=t(2514),Ft=t(97207),_t=t.n(Ft),ht=function(u,E){var p=u.ws_id,f=u.onOk,v=(0,s.useState)(!1),pe=(0,C.Z)(v,2),ke=pe[0],Oe=pe[1],_e=(0,s.useState)(""),he=(0,C.Z)(_e,2),V=he[0],be=he[1],A=(0,s.useState)(null),le=(0,C.Z)(A,2),Te=le[0],Y=le[1],k=(0,s.useState)([]),ee=(0,C.Z)(k,2),ve=ee[0],De=ee[1],Re=(0,s.useState)(null),oe=(0,C.Z)(Re,2),we=oe[0],Ne=oe[1],Ae=(0,s.useState)(null),ze=(0,C.Z)(Ae,2),O=ze[0],F=ze[1],H=(0,s.useState)([]),Q=(0,C.Z)(H,2),xe=Q[0],He=Q[1],fe=(0,s.useState)([]),Z=(0,C.Z)(fe,2),ce=Z[0],Ge=Z[1],b=(0,s.useState)(!0),c=(0,C.Z)(b,2),h=c[0],_=c[1],S=function(){var X=(0,$.Z)((0,g.Z)().mark(function me(){var Ie,rt,jt;return(0,g.Z)().wrap(function(dt){for(;;)switch(dt.prev=dt.next){case 0:return _(!0),dt.next=3,(0,It.qi)({ws_id:p,enable:"True",name:V,page_size:100});case 3:if(Ie=dt.sent,rt=Ie.data,jt=Ie.code,_(!1),jt===200){dt.next=10;break}return He([]),dt.abrupt("return");case 10:V.length===0&&Ge(rt),He(rt);case 12:case"end":return dt.stop()}},me)}));return function(){return X.apply(this,arguments)}}();(0,s.useImperativeHandle)(E,function(){return{show:function(me,Ie,rt,jt){typeof rt=="number"&&(Ne(rt),F(jt)),Oe(!0),S(),(0,Ft.isArray)(me)&&(De(me.map(function(Nt){return Nt.id})),Y(Ie))}}},[]);var Me=function(){Oe(!1),De([]),Y(null),F(null),Ne(null),He([]),be("")},M=function(){f({list:ce.filter(function(me){if(ve.filter(function(Ie){return me.id===Ie}).length>0)return me}),dataIndex:Te}),Me()},ft=function(me){if(me.target.checked&&ve.length>=15){ie.default.warning("\u5355\u4E2A\u6D4B\u8BD5\u9636\u6BB5\u4E2D\u6D4B\u8BD5\u6A21\u7248\u6570\u91CF\u4E0D\u5F97\u8D85\u8FC715\u4E2A\uFF01");return}var Ie=me.target.value,rt=ve.slice(0);me.target.checked?rt=rt.concat(Ie):rt=rt.filter(function(jt){return jt!==Ie}),De((0,wt.Z)(new Set((0,wt.Z)(rt))))},Ue=function(me){f((0,o.Z)((0,o.Z)({},me),{},{rowkey:we,dataIndex:Te,replaceId:O})),Me()};return(0,e.jsx)(Tt.Z,{maskClosable:!1,keyboard:!1,title:(0,e.jsx)(n._H,{id:"plan.template.list"}),visible:ke,width:"376",onClose:Me,footer:typeof O!="number"&&(0,e.jsx)("div",{style:{textAlign:"right"},children:(0,e.jsxs)(ne.Z,{children:[(0,e.jsx)(j.Z,{onClick:Me,children:(0,e.jsx)(n._H,{id:"operation.cancel"})}),(0,e.jsx)(j.Z,{type:"primary",onClick:M,children:(0,e.jsx)(n._H,{id:"operation.ok"})})]})}),children:(0,e.jsxs)(ne.Z,{direction:"vertical",style:{width:"100%"},className:Ye().templateListDrawerSpace,children:[(0,e.jsx)(P.Z,{prefix:(0,e.jsx)(yt.Z,{}),value:V,onPressEnter:S,onChange:function(me){var Ie=me.target;return be(Ie.value)}}),(0,e.jsx)(T.Z,{spinning:h,children:typeof we!="number"?(0,e.jsx)(Dt.Z.Group,{style:{width:"100%"},value:ve,children:xe.map(function(X){return(0,e.jsx)(Dt.Z,{style:{width:"100%",marginLeft:0},value:X.id,onChange:ft,children:(0,e.jsx)(Le.Z,{title:X.name,children:(0,e.jsx)(W.Z.Text,{ellipsis:!0,children:X.name})})},X.id)})}):xe.map(function(X){return(0,e.jsx)(J.Z,{style:{cursor:"pointer",width:"100%"},children:(0,e.jsx)(Le.Z,{title:X.name,children:O===X.id?(0,e.jsx)(W.Z.Link,{onClick:function(){return Ue(X)},ellipsis:!0,style:{width:"100%"},children:X.name}):ve.includes(X.id)?(0,e.jsx)(W.Z.Text,{disabled:!0,type:"secondary",ellipsis:!0,style:{width:"100%"},children:X.name}):(0,e.jsx)("span",{onClick:function(){return Ue(X)},style:{width:"100%"},children:(0,e.jsx)(W.Z.Text,{style:{width:"100%"},ellipsis:!0,children:X.name})})})},X.id)})})]})})},xt=(0,s.forwardRef)(ht),Yt=t(77033),kr=t(53919),sn,Mr=(0,d.ZP)(i.Z)(sn||(sn=(0,a.Z)([`
    .ant-form-item{
        margin-bottom: 8px;
    }
`]))),Rr=function(u,E){var p=(0,n.YB)(),f=p.formatMessage,v=u.ws_id,pe=u.onOk,ke=(0,s.useState)(!1),Oe=(0,C.Z)(ke,2),_e=Oe[0],he=Oe[1],V=(0,s.useState)(null),be=(0,C.Z)(V,2),A=be[0],le=be[1],Te=i.Z.useForm(),Y=(0,C.Z)(Te,1),k=Y[0],ee=(0,s.useState)(!1),ve=(0,C.Z)(ee,2),De=ve[0],Re=ve[1];(0,s.useImperativeHandle)(E,function(){return{show:function(ze,O){he(!0),le(ze),O&&k.setFieldsValue(O)}}});var oe=function(){he(!1),Re(!1),k.resetFields(),le(null)},we=function(){De||(Re(!0),k.validateFields().then(function(){var ze=(0,$.Z)((0,g.Z)().mark(function O(F){return(0,g.Z)().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return Q.next=2,pe(F,A);case 2:oe();case 3:case"end":return Q.stop()}},O)}));return function(O){return ze.apply(this,arguments)}}()).catch(function(){Re(!1)}))},Ne=(0,s.useMemo)(function(){return typeof A=="number"?(0,e.jsx)(n._H,{id:"plan.edit.machine"}):(0,e.jsx)(n._H,{id:"plan.add.machine"})},[A]);return(0,e.jsx)(Tt.Z,{maskClosable:!1,keyboard:!1,title:Ne,visible:_e,width:"376",onClose:oe,footer:(0,e.jsx)("div",{style:{textAlign:"right"},children:(0,e.jsxs)(ne.Z,{children:[(0,e.jsx)(j.Z,{onClick:oe,children:(0,e.jsx)(n._H,{id:"operation.cancel"})}),(0,e.jsx)(j.Z,{type:"primary",onClick:we,children:(0,e.jsx)(n._H,{id:"operation.ok"})})]})}),children:(0,e.jsxs)(Mr,{layout:"vertical",form:k,scrollToFirstError:!0,children:[(0,e.jsx)(i.Z.Item,{name:"channel_type",label:(0,e.jsx)(n._H,{id:"plan.channel_type"}),initialValue:"toneagent",rules:[{required:!0,message:f({id:"plan.channel_type.message"})}],children:(0,e.jsx)(kr.k,{placeholder:f({id:"plan.channel_type.placeholder"})})}),(0,e.jsx)(i.Z.Item,{name:"machine",validateTrigger:"onBlur",label:"",rules:[function(){return{validator:function(ze,O){return(0,$.Z)((0,g.Z)().mark(function F(){var H,Q,xe,He;return(0,g.Z)().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:if(H=k.getFieldValue("channel_type"),H){Z.next=4;break}return k.validateFields(["channel_type"]),Z.abrupt("return");case 4:return Z.next=6,(0,Yt.bD)({ws_id:v,ips:[O],channel_type:H});case 6:if(Q=Z.sent,xe=Q.data,He=Q.msg,xe.errors.length!==0){Z.next=11;break}return Z.abrupt("return",Promise.resolve());case 11:return Z.abrupt("return",Promise.reject(He.toString()));case 12:case"end":return Z.stop()}},F)}))()}}}],children:(0,e.jsx)(P.Z,{placeholder:"".concat(f({id:"plan.please.enter.IP"})).concat(""),autoComplete:"off"})}),(0,e.jsx)(i.Z.Item,{name:"script",label:(0,e.jsx)(n._H,{id:"plan.custom.script"}),rules:[{required:!0,message:f({id:"plan.custom.script.cannot.empty"})}],children:(0,e.jsx)(P.Z.TextArea,{rows:4,placeholder:f({id:"plan.custom.script"})})})]})})},Nr=(0,s.forwardRef)(Rr),Qt=t(85311),Ar=t(72882),ln=t(53770),on,Hr=["svgRef","title"];function zt(){return zt=Object.assign?Object.assign.bind():function(m){for(var u=1;u<arguments.length;u++){var E=arguments[u];for(var p in E)Object.prototype.hasOwnProperty.call(E,p)&&(m[p]=E[p])}return m},zt.apply(this,arguments)}function Br(m,u){if(m==null)return{};var E=Wr(m,u),p,f;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(m);for(f=0;f<v.length;f++)p=v[f],!(u.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(m,p)||(E[p]=m[p]))}return E}function Wr(m,u){if(m==null)return{};var E={},p=Object.keys(m),f,v;for(v=0;v<p.length;v++)f=p[v],!(u.indexOf(f)>=0)&&(E[f]=m[f]);return E}var $r=function(u){var E=u.svgRef,p=u.title,f=Br(u,Hr);return s.createElement("svg",zt({width:"16px",height:"16px",viewBox:"0 0 16 16",ref:E},f),p?s.createElement("title",null,p):null,on||(on=s.createElement("g",{id:"\\u521B\\u5EFA\\u8BA1\\u5212",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},s.createElement("g",{id:"\\u6D4B\\u8BD5\\u914D\\u7F6E-\\u5220\\u9664\\u9636\\u6BB5",transform:"translate(-1214.000000, -160.000000)",fillRule:"nonzero"},s.createElement("g",{id:"\\u8868\\u5355",transform:"translate(0.000000, 101.000000)"},s.createElement("g",{id:"\\u7F16\\u7EC4-4",transform:"translate(323.000000, 14.000000)"},s.createElement("g",{id:"\\u7F16\\u7EC4-7",transform:"translate(521.000000, 0.000000)"},s.createElement("g",{id:"\\u5220-\\u9664-red",transform:"translate(370.000000, 45.000000)"},s.createElement("rect",{id:"\\u77E9\\u5F62",fill:"#000000",opacity:0,x:0,y:0,width:16,height:16}),s.createElement("path",{d:"M8.08734375,0.337640625 C6.52017188,0.337640625 5.24823438,1.58004687 5.19410938,3.13982812 L1.54067187,3.13982812 C1.13475,3.13982812 0.802625,3.4695 0.802625,3.87789062 C0.802625,4.28382812 1.13229687,4.61596875 1.5406875,4.61596875 L2.35501562,4.61596875 L2.35501562,12.8724687 C2.35501562,14.4224063 3.40553125,15.6894219 4.70454688,15.6894219 L11.3225156,15.6894219 C12.6190781,15.6894219 13.6720469,14.4297969 13.6720469,12.8724687 L13.6720469,4.62089063 L14.4101094,4.62089063 C14.8160469,4.62089063 15.1481719,4.29120312 15.1481719,3.8828125 C15.1481719,3.476875 14.8185,3.14475 14.4101094,3.14475 L10.9756406,3.14475 C10.9288906,1.5800625 9.6545,0.337640625 8.08734375,0.337640625 L8.08734375,0.337640625 Z M6.57676562,3.13982812 C6.63089062,2.34026562 7.28285937,1.72029687 8.08979688,1.72029687 C8.89673438,1.72029687 9.54870312,2.34271875 9.59545312,3.13982812 L6.57676562,3.13982812 Z M4.70207812,14.3092344 C4.24201562,14.3092344 3.73520312,13.7187812 3.73520312,12.8724687 L3.73520312,4.62089063 L12.2869375,4.62089063 L12.2869375,12.8798437 C12.2869375,13.7237031 11.780125,14.316625 11.3200625,14.316625 L4.70207812,14.316625 L4.70207812,14.3092344 Z M5.69354687,12.5354219 C6.03057812,12.5354219 6.30859375,12.198375 6.30859375,11.7752188 L6.30859375,7.43784375 C6.30859375,7.0146875 6.03304687,6.677625 5.69354687,6.677625 C5.35648437,6.677625 5.07848437,7.0146875 5.07848437,7.43784375 L5.07848437,11.7752188 C5.07848437,12.1959063 5.34910937,12.5354219 5.69354687,12.5354219 Z M7.92004688,12.5354219 C8.25709375,12.5354219 8.53509375,12.198375 8.53509375,11.7752188 L8.53509375,7.43784375 C8.53509375,7.0146875 8.25954688,6.677625 7.92004688,6.677625 C7.583,6.677625 7.30498438,7.0146875 7.30498438,7.43784375 L7.30498438,11.7752188 C7.30498438,12.1959063 7.583,12.5354219 7.92004688,12.5354219 L7.92004688,12.5354219 Z M10.2621719,12.5354219 C10.5992187,12.5354219 10.8772344,12.198375 10.8772344,11.7752188 L10.8772344,7.43784375 C10.8772344,7.0146875 10.6016875,6.677625 10.2621719,6.677625 C9.925125,6.677625 9.647125,7.0146875 9.647125,7.43784375 L9.647125,11.7752188 C9.647125,12.1959063 9.91528125,12.5354219 10.2621719,12.5354219 Z",id:"\\u5F62\\u72B6",fill:"#F5222D"})))))))))},zr=s.forwardRef(function(m,u){return s.createElement($r,zt({svgRef:u},m))}),Aa=t.p+"static/delete.3e8fe546.svg",cn,Ur=["svgRef","title"];function Ut(){return Ut=Object.assign?Object.assign.bind():function(m){for(var u=1;u<arguments.length;u++){var E=arguments[u];for(var p in E)Object.prototype.hasOwnProperty.call(E,p)&&(m[p]=E[p])}return m},Ut.apply(this,arguments)}function Kr(m,u){if(m==null)return{};var E=Vr(m,u),p,f;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(m);for(f=0;f<v.length;f++)p=v[f],!(u.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(m,p)||(E[p]=m[p]))}return E}function Vr(m,u){if(m==null)return{};var E={},p=Object.keys(m),f,v;for(v=0;v<p.length;v++)f=p[v],!(u.indexOf(f)>=0)&&(E[f]=m[f]);return E}var Yr=function(u){var E=u.svgRef,p=u.title,f=Kr(u,Ur);return s.createElement("svg",Ut({width:"16px",height:"16px",viewBox:"0 0 16 16",ref:E},f),p?s.createElement("title",null,p):null,cn||(cn=s.createElement("g",{id:"\\u521B\\u5EFA\\u8BA1\\u5212",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd",opacity:.449999988},s.createElement("g",{id:"\\u6D4B\\u8BD5\\u914D\\u7F6E-\\u6DFB\\u52A0\\u65B0\\u9636\\u6BB5\\u540E",transform:"translate(-1214.000000, -160.000000)",fill:"#000000",fillRule:"nonzero"},s.createElement("g",{id:"\\u8868\\u5355",transform:"translate(0.000000, 101.000000)"},s.createElement("g",{id:"\\u7F16\\u7EC4-4",transform:"translate(323.000000, 51.000000)"},s.createElement("g",{id:"\\u7F16\\u7EC4-7",transform:"translate(521.000000, 0.000000)"},s.createElement("g",{id:"\\u5220-\\u9664",transform:"translate(370.000000, 8.000000)"},s.createElement("rect",{id:"\\u77E9\\u5F62",opacity:0,x:0,y:0,width:16,height:16}),s.createElement("path",{d:"M8.08734375,0.337640625 C6.52017188,0.337640625 5.24823438,1.58004687 5.19410938,3.13982812 L1.54067187,3.13982812 C1.13475,3.13982812 0.802625,3.4695 0.802625,3.87789062 C0.802625,4.28382812 1.13229687,4.61596875 1.5406875,4.61596875 L2.35501562,4.61596875 L2.35501562,12.8724687 C2.35501562,14.4224063 3.40553125,15.6894219 4.70454688,15.6894219 L11.3225156,15.6894219 C12.6190781,15.6894219 13.6720469,14.4297969 13.6720469,12.8724687 L13.6720469,4.62089063 L14.4101094,4.62089063 C14.8160469,4.62089063 15.1481719,4.29120312 15.1481719,3.8828125 C15.1481719,3.476875 14.8185,3.14475 14.4101094,3.14475 L10.9756406,3.14475 C10.9288906,1.5800625 9.6545,0.337640625 8.08734375,0.337640625 L8.08734375,0.337640625 Z M6.57676562,3.13982812 C6.63089062,2.34026562 7.28285937,1.72029687 8.08979688,1.72029687 C8.89673438,1.72029687 9.54870312,2.34271875 9.59545312,3.13982812 L6.57676562,3.13982812 Z M4.70207812,14.3092344 C4.24201562,14.3092344 3.73520312,13.7187812 3.73520312,12.8724687 L3.73520312,4.62089063 L12.2869375,4.62089063 L12.2869375,12.8798437 C12.2869375,13.7237031 11.780125,14.316625 11.3200625,14.316625 L4.70207812,14.316625 L4.70207812,14.3092344 Z M5.69354687,12.5354219 C6.03057812,12.5354219 6.30859375,12.198375 6.30859375,11.7752188 L6.30859375,7.43784375 C6.30859375,7.0146875 6.03304687,6.677625 5.69354687,6.677625 C5.35648437,6.677625 5.07848437,7.0146875 5.07848437,7.43784375 L5.07848437,11.7752188 C5.07848437,12.1959063 5.34910937,12.5354219 5.69354687,12.5354219 Z M7.92004688,12.5354219 C8.25709375,12.5354219 8.53509375,12.198375 8.53509375,11.7752188 L8.53509375,7.43784375 C8.53509375,7.0146875 8.25954688,6.677625 7.92004688,6.677625 C7.583,6.677625 7.30498438,7.0146875 7.30498438,7.43784375 L7.30498438,11.7752188 C7.30498438,12.1959063 7.583,12.5354219 7.92004688,12.5354219 L7.92004688,12.5354219 Z M10.2621719,12.5354219 C10.5992187,12.5354219 10.8772344,12.198375 10.8772344,11.7752188 L10.8772344,7.43784375 C10.8772344,7.0146875 10.6016875,6.677625 10.2621719,6.677625 C9.925125,6.677625 9.647125,7.0146875 9.647125,7.43784375 L9.647125,11.7752188 C9.647125,12.1959063 9.91528125,12.5354219 10.2621719,12.5354219 Z",id:"\\u5F62\\u72B6"})))))))))},Qr=s.forwardRef(function(m,u){return s.createElement(Yr,Ut({svgRef:u},m))}),Ha=t.p+"static/delete_icon.1ec90906.svg",dn,un,pn,hn,fn,mn,vn,gn,xn,jn,Zn,bn,Cn,yn,_n,Pn,Sn,En,On,Tn,Dn,wn,In,Fn,Ln,kn,Mn,Rn,Nn,An,Hn,Bn,Wn,$n,zn,Un,Kn,Vn,Jr=(0,d.ZP)(J.Z)(dn||(dn=(0,a.Z)([`
    width : 100% ;
    height : 100% ;
    // padding-left : 180px ;
    overflow : auto ;
    // padding-right:160px;
    // white-space:nowrap;    
    flex-direction: column;
`]))),Yn=(0,d.ZP)(J.Z)(un||(un=(0,a.Z)([`
    height:40px;
    line-height:40px;
    color : rgba(0,0,0,.65);
    text-align:left;
`]))),Qn=d.ZP.div(pn||(pn=(0,a.Z)([`
    height:40px;
    width:366px;
    position:relative;
`]))),Jn=d.ZP.input(hn||(hn=(0,a.Z)([`
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
`]))),Gn=`
    height:2px;
    position:absolute;
    top:50%;
    background:#CECECE;
`,Xn=d.ZP.div(fn||(fn=(0,a.Z)([`
    `,`;
    width:20px;
    left:-20px;
`])),Gn),qn=d.ZP.div(mn||(mn=(0,a.Z)([`
    `,`;
    width:32px;
    right : -32px;
`])),Gn),Jt=`
    position:absolute;
    color:#1890FF;
    cursor:pointer;
    background:#fff;
    border-radius:50%;
`,er=(0,d.ZP)(Qt.Z)(vn||(vn=(0,a.Z)([`
    `,`
    top : 50%;
    left : -5px;
    transform:translate(-50% , -7px);
`])),Jt),tr=(0,d.ZP)(Qt.Z)(gn||(gn=(0,a.Z)([`
    `,`
    top : 50%;
    right : -20px;
    transform:translate(-50% , -7px);
`])),Jt),Gr=d.ZP.span(xn||(xn=(0,a.Z)([`
    display:flex;
    justify-content:center;
    align-items : center;
    width: 14.3px;
    cursor:pointer;
    height:15.4px;
`]))),nr=(0,d.ZP)(zr)(jn||(jn=(0,a.Z)([`
    visibility:hidden;
`]))),rr=(0,d.ZP)(Qr)(Zn||(Zn=(0,a.Z)([`
    visibility:hidden;
`]))),ar=function(u){var E=(0,s.useState)(!1),p=(0,C.Z)(E,2),f=p[0],v=p[1],pe=function(){v(!0)},ke=function(){v(!1)};return(0,e.jsx)(Gr,(0,o.Z)((0,o.Z)({},u),{},{onMouseEnter:pe,onMouseLeave:ke,children:f?(0,e.jsx)(nr,{}):(0,e.jsx)(rr,{})}))},Xr=d.ZP.div(bn||(bn=(0,a.Z)([`
    width:166px;
    height:100%;
    // background:#CECECE;
    text-align:center;
    display:inline-block;
    position:relative;
`]))),qr=d.ZP.div(Cn||(Cn=(0,a.Z)([`
    height: 12px;
    width: 12px;
    background: #CECECE;
    border-radius: 24px;
    margin : 55px auto 16px;
`]))),ea=d.ZP.div(yn||(yn=(0,a.Z)([`
    font-size: 16px;
    color:rgba(0,0,0,.65);
`]))),ta=d.ZP.div(_n||(_n=(0,a.Z)([`
    width: 75px;
    height: 2px;
    background: #CECECE;
    position: absolute;
    left: 50%;
    top: 60px;
`]))),sr=d.ZP.div(Pn||(Pn=(0,a.Z)([`
    height: 12px;
    width: 12px;
    background: #FFFFFF;
    border: 1px solid #649FF6;
    border-radius: 24px;
    margin-top:-5px;
`]))),ir=(0,d.ZP)(sr)(Sn||(Sn=(0,a.Z)([`
    background:#1890FF;
`]))),lr=(0,d.ZP)(Ar.Z)(En||(En=(0,a.Z)([`
    color : #1890FF;
`]))),or=d.ZP.div(On||(On=(0,a.Z)([`
    width : 100%;
    padding-top:13px;
    overflow:hidden;
`]))),Gt=d.ZP.div(Tn||(Tn=(0,a.Z)([`
    height: 46px;
    width: 316px;
    background: rgba(0,0,0,0.04);
    border-radius: 4px;
    display:flex;
    align-items:center;
    cursor:pointer;
    padding-left: 20px;
    flex-wrap:no-wrap;
`]))),Xt=d.ZP.div(Dn||(Dn=(0,a.Z)([`
    width : 100%;
    height : 64px;
    padding-left:40px;
    position:relative;
    padding-top: 18px;
    visibility:hidden;
`]))),cr=(0,d.ZP)(Qt.Z)(wn||(wn=(0,a.Z)([`
    `,`
    position: relative;
    margin-right:8px;
    margin-left:14px;
`])),Jt),qt=d.ZP.div(In||(In=(0,a.Z)([`
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
`]))),dr=d.ZP.div(Fn||(Fn=(0,a.Z)([`
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
`])),function(m){var u=m.type;return u==="env"?"98px":"109px"},function(m){var u=m.type;return u==="env"?"-81px":"-84px"}),ur=d.ZP.div(Ln||(Ln=(0,a.Z)([`
    width : 100%;
    height : 46px;
    line-height:46px;
    text-align:left;
    display:flex;
    // margin-top: 13px;
    padding-left:12px;
    position:relative;
    cursor:pointer;
`]))),pr=(0,d.ZP)(ln.Z)(kn||(kn=(0,a.Z)([`
    width:16px;
    height:16px;
    position:absolute;
    right: 15px;
    top: 16px;
    visibility:hidden;
`]))),na=d.ZP.div(Mn||(Mn=(0,a.Z)([`
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
`])),ur,pr),ra=d.ZP.div(Rn||(Rn=(0,a.Z)([`
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
`]))),aa=d.ZP.div(Nn||(Nn=(0,a.Z)([`
    width:calc(100% - 30px);
`]))),Ba=d.ZP.div(An||(An=(0,a.Z)([`
    width:2px;
    height:`,`px;
`])),function(m){return m.index*30}),hr=d.ZP.div(Hn||(Hn=(0,a.Z)([`
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
`])),nr,Xt,rr),fr=d.ZP.div(Bn||(Bn=(0,a.Z)([`
    color:rgba(0,0,0,.85);
    font-weight:600;
`]))),mr=d.ZP.div(Wn||(Wn=(0,a.Z)([`
    color:rgba(0,0,0,.65);
    word-break: break-all;
    width:100%;
    max-height:45px;
    overflow: scroll;
`]))),sa=d.ZP.div($n||($n=(0,a.Z)([`
    position:absolute;
    left : 10px;
    top : 7px ;
    width:20px;
    height:20px;
    border-radius:50%;
    background:rgb(24,144,255 , .1);
    color:rgb(24,144,255);
    text-align:center;
`]))),vr=(0,d.ZP)(ln.Z)(zn||(zn=(0,a.Z)([`
    position : absolute;
    right:10px;
    top:10px;
    cursor:pointer;
    visibility:hidden;
`]))),ia=d.ZP.div(Un||(Un=(0,a.Z)([`
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
`])),fr,mr,vr),la=d.ZP.div(Kn||(Kn=(0,a.Z)([`
    width: 100%;
    padding-left: 55px;
    cursor:pointer;
    // padding-top: 18px;
    position: relative;
`]))),oa=(0,d.ZP)(Xt)(Vn||(Vn=(0,a.Z)([`
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
`])),qt,Gt),ca=["replaceId","dataIndex","rowkey"],da=function(u){var E=(0,n.YB)(),p=E.formatMessage,f=u.show,v=u.onChange,pe=u.template,ke=(0,y.UO)(),Oe=ke.ws_id,_e={name:p({id:"job.types.env"}),machine_info:[],visible:!1},he={name:p({id:"plan.new.stage"}),template:[],impact_next:!1},V=(0,s.useState)([he]),be=(0,C.Z)(V,2),A=be[0],le=be[1],Te=(0,s.useState)(_e),Y=(0,C.Z)(Te,2),k=Y[0],ee=Y[1],ve=(0,s.useRef)(),De=(0,s.useRef)();(0,s.useEffect)(function(){if(pe&&JSON.stringify(pe)!=="{}"){var b=pe.test_config,c=pe.env_prep;b&&le(b),c&&ee((0,o.Z)((0,o.Z)({},c),{},{visible:!0}))}},[pe]);var Re=function(){ee((0,o.Z)((0,o.Z)({},k),{},{visible:!0}))},oe=function(){return{name:"".concat(p({id:"plan.new.stage"})).concat(A.length+1),template:[],impact_next:!1}},we=function(c){if(A.length>4){ie.default.warning(p({id:"plan.stage.maximum5"}));return}var h=[];A.forEach(function(_,S){S===c&&h.push(oe()),h.push(_)}),c===A.length&&h.push(oe()),le(h)},Ne=function(c){var h=c.hasEnv,_=c.index,S=c.children;return(0,e.jsx)(nt.Z,{trigger:["click"],overlay:(0,e.jsxs)(it.Z,{children:[h&&(0,e.jsx)(it.Z.Item,{onClick:Re,children:(0,e.jsxs)(ne.Z,{children:[(0,e.jsx)(lr,{}),(0,e.jsx)("span",{children:(0,e.jsx)(n._H,{id:"plan.pre.stage"})})]})}),(0,e.jsx)(it.Z.Item,{onClick:function(){return we(_)},children:(0,e.jsxs)(ne.Z,{children:[(0,e.jsx)(lr,{}),(0,e.jsx)("span",{children:(0,e.jsx)(n._H,{id:"plan.new.stage"})})]})})]}),placement:"bottom",arrow:!0,children:(0,e.jsx)(Le.Z,{placement:"top",title:p({id:"plan.add.stage"}),children:S})})},Ae=function(c,h){le(A.map(function(_,S){return S===h?(0,o.Z)((0,o.Z)({},_),{},{impact_next:c}):_}))},ze=function(c){A.length!==1&&le(A.filter(function(h,_){return c!==_}))},O=function(){ee(_e)},F=function(){De.current.show()},H=function(c){ve.current.show(A[c].template,c)},Q=function(c,h){if(c.length>20){ie.default.warning(p({id:"plan.enter.up.20.characters"}));return}le(A.map(function(_,S){return S===h?(0,o.Z)((0,o.Z)({},_),{},{name:c}):_}))},xe=function(c){if(c.list){var h=c.list,_=c.dataIndex;le(A.map(function(Ue,X){return _===X?(0,o.Z)((0,o.Z)({},Ue),{},{template:h}):Ue}))}else{var S=c.replaceId,Me=c.dataIndex,M=c.rowkey,ft=(0,L.Z)(c,ca);le(A.map(function(Ue,X){return X===Me?(0,o.Z)((0,o.Z)({},Ue),{},{template:Ue.template.map(function(me,Ie){return Ie===M?ft:me})}):Ue}))}},He=function(c,h){if(h!=null)return ee((0,o.Z)((0,o.Z)({},k),{},{machine_info:k.machine_info.map(function(_,S){return h===S?c:_})}));ee((0,o.Z)((0,o.Z)({},k),{},{machine_info:k.machine_info.concat(c)}))},fe=function(c){ee((0,o.Z)((0,o.Z)({},k),{},{machine_info:k.machine_info.filter(function(h,_){return c!==_})}))};(0,s.useEffect)(function(){v({test_config:A,env_prep:k})},[A,k]);var Z=function(c,h){le(A.map(function(_,S){if(S===c){var Me=_.template.filter(function(M){return M.id!==h});return(0,o.Z)((0,o.Z)({},_),{},{template:Me})}return _}))},ce=function(c,h){De.current.show(c,h)},Ge=function(c,h,_){ve.current.show(A[c].template,c,h,_)};return(0,e.jsx)(Jr,{style:{display:f},children:(0,e.jsxs)(J.Z,{style:{height:"100%"},children:[(0,e.jsxs)("div",{style:{display:"flex",margin:"0 auto"},children:[(0,e.jsxs)(Xr,{children:[(0,e.jsx)(qr,{}),(0,e.jsx)(ea,{children:(0,e.jsx)(n._H,{id:"plan.start"})}),(0,e.jsx)(ta,{})]}),k.visible&&(0,e.jsxs)(hr,{children:[(0,e.jsxs)(Yn,{justify:"space-between",align:"middle",children:[(0,e.jsx)("span",{}),(0,e.jsx)(ar,{onClick:O})]}),(0,e.jsxs)(Qn,{children:[(0,e.jsx)(Xn,{}),(0,e.jsx)(Jn,{value:k.name,onChange:function(c){var h=c.target;return ee((0,o.Z)((0,o.Z)({},k),{},{name:h.value}))}}),(0,e.jsxs)(qn,{children:[(0,e.jsx)(ir,{}),(0,e.jsx)(Ne,{index:0,children:(0,e.jsx)(tr,{})})]})]}),(0,e.jsxs)(or,{children:[k.machine_info.map(function(b,c){return(0,e.jsxs)(la,{children:[(0,e.jsx)(dr,{type:"env"}),(0,e.jsxs)(ia,{onClick:function(_){_.stopPropagation(),ce(c,b)},children:[(0,e.jsx)(vr,{onClick:function(_){_.stopPropagation(),fe(c)}}),(0,e.jsx)(sa,{children:c+1}),(0,e.jsxs)(fr,{children:[b.machine," "]}),(0,e.jsx)(mr,{children:b.script})]})]},c)}),(0,e.jsxs)(oa,{onClick:F,children:[(0,e.jsx)(qt,{}),(0,e.jsxs)(Gt,{children:[(0,e.jsx)(cr,{}),(0,e.jsx)("span",{children:(0,e.jsx)(n._H,{id:"plan.add.machine"})})]})]})]})]}),A.map(function(b,c){return(0,e.jsxs)(hr,{children:[(0,e.jsxs)(Yn,{justify:"space-between",align:"middle",children:[(0,e.jsxs)(ne.Z,{children:[(0,e.jsx)("span",{children:(0,e.jsx)(n._H,{id:"plan.subsequent.steps"})}),(0,e.jsx)(tt.Z,{onChange:function(_){return Ae(_,c)},checkedChildren:(0,e.jsx)(n._H,{id:"operation.yes"}),unCheckedChildren:(0,e.jsx)(n._H,{id:"operation.no"}),checked:b.impact_next})]}),(0,e.jsx)(ar,{onClick:function(){return ze(c)}})]}),(0,e.jsxs)(Qn,{children:[(0,e.jsx)(Xn,{children:c===0&&!k.visible?(0,e.jsx)(Ne,{hasEnv:c===0&&!k.visible,index:c,children:(0,e.jsx)(er,{})}):(0,e.jsx)(Le.Z,{placement:"top",title:p({id:"plan.add.stage"}),children:(0,e.jsx)(er,{onClick:function(){return we(c)}})})}),(0,e.jsx)(Jn,{value:b.name,onChange:function(_){var S=_.target;return Q(S.value,c)}}),(0,e.jsxs)(qn,{children:[b.impact_next?(0,e.jsx)(ir,{}):(0,e.jsx)(sr,{}),(0,e.jsx)(Le.Z,{placement:"top",title:p({id:"plan.add.stage"}),children:(0,e.jsx)(tr,{onClick:function(){return we(c+1)}})})]})]}),(0,e.jsxs)(or,{children:[b.template.map(function(h,_){return(0,e.jsxs)(na,{children:[(0,e.jsx)(dr,{}),(0,e.jsxs)(ur,{onClick:function(){return Ge(c,_,h.id)},children:[(0,e.jsx)(ra,{children:_+1}),(0,e.jsx)(aa,{children:(0,e.jsx)(Le.Z,{title:h.name,children:(0,e.jsx)(W.Z.Text,{ellipsis:!0,style:{width:"90%"},children:h.name})})}),(0,e.jsx)(pr,{onClick:function(Me){Me.stopPropagation(),Z(c,h.id)}})]})]},_)}),b.template.length<15&&(0,e.jsxs)(Xt,{children:[(0,e.jsx)(qt,{}),(0,e.jsxs)(Gt,{onClick:function(){return H(c)},children:[(0,e.jsx)(cr,{}),(0,e.jsx)("span",{children:(0,e.jsx)(n._H,{id:"plan.add.template"})})]})]})]})]},c)})]}),(0,e.jsx)(xt,{ws_id:Oe,ref:ve,onOk:xe}),(0,e.jsx)(Nr,{ws_id:Oe,ref:De,onOk:He})]})})},ua=da,Wa=t(13998),pa=t(76784),gr=t(78358),ha=t(26449),xr=t.n(ha),fa=(0,s.forwardRef)(function(m,u){var E=(0,n.YB)(),p=E.formatMessage,f=m.show,v=m.template,pe=m.route,ke=(0,y.UO)(),Oe=ke.ws_id,_e=i.Z.useForm(),he=(0,C.Z)(_e,1),V=he[0],be=(0,s.useState)(!1),A=(0,C.Z)(be,2),le=A[0],Te=A[1],Y=(0,s.useState)([]),k=(0,C.Z)(Y,2),ee=k[0],ve=k[1],De=(0,s.useState)("no"),Re=(0,C.Z)(De,2),oe=Re[0],we=Re[1],Ne=(0,s.useState)([]),Ae=(0,C.Z)(Ne,2),ze=Ae[0],O=Ae[1],F=(0,s.useState)([]),H=(0,C.Z)(F,2),Q=H[0],xe=H[1],He=function(){var fe=(0,$.Z)((0,g.Z)().mark(function Z(){var ce,Ge,b,c,h;return(0,g.Z)().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.prev=0,S.next=3,(0,G.MD)({ws_id:Oe,page_size:99999});case 3:ce=S.sent,Ge=ce.code,b=ce.data,Ge===200&&(c=_t().isArray(b)?b:[],h=_t().find(c,{is_default:!0}),ve(c),pe.name==="Create"&&V.setFieldsValue({report_template_id:h.id})),S.next=12;break;case 9:S.prev=9,S.t0=S.catch(0),console.log(S.t0);case 12:case"end":return S.stop()}},Z,null,[[0,9]])}));return function(){return fe.apply(this,arguments)}}();return(0,s.useEffect)(function(){He()},[]),(0,s.useEffect)(function(){if(v&&Object.keys(v).length){var fe=v.auto_report,Z=v.group_method,ce=Z===void 0?"no":Z,Ge=v.base_group,b=v.base_group_info,c=v.report_template_id,h=v.test_config,_=b||{},S=_.stage_id;if(Te(fe),fe){var Me=_t().find(ee,{is_default:!0}),M={};if(ce==="job"&&(M={base_group_job:S?[S,Ge]:[]}),ce==="stage"&&(M={base_group_stage:Ge||void 0}),V.setFieldsValue((0,o.Z)((0,o.Z)((0,o.Z)({},v),{},{group_method:ce},M),{},{report_template_id:c||_t().get(Me,"id")})),we(ce),h){var ft=(h==null?void 0:h.map(function(Ue,X){var me;return{value:X+1,label:Ue.name,children:(Ue==null||(me=Ue.template)===null||me===void 0?void 0:me.map(function(Ie){return{value:Ie.id,label:Ie.name}}))||[]}}))||[];O(h),xe(ft)}}}},[v,ee]),(0,s.useImperativeHandle)(u,function(){return{validate:function(){var fe=(0,$.Z)((0,g.Z)().mark(function ce(){return(0,g.Z)().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.abrupt("return",V.validateFields());case 1:case"end":return b.stop()}},ce)}));function Z(){return fe.apply(this,arguments)}return Z}(),refreshData:function(Z){if(Z){var ce=(Z==null?void 0:Z.map(function(S,Me){var M;return{value:Me+1,label:S.name,key:Me,children:(S==null||(M=S.template)===null||M===void 0?void 0:M.map(function(ft){return{value:ft.id,label:ft.name}}))||[]}}))||[];if(O(Z),xe(ce),oe==="stage"){var Ge=V.getFieldValue("base_group_stage");Ge>(Z==null?void 0:Z.length)&&V.setFieldsValue({base_group_stage:void 0})}else if(oe==="job"){var b=V.getFieldValue("base_group_job");if(Array.isArray(b)){var c,h,_=b[0];_&&!((c=ce[_-1])!==null&&c!==void 0&&(h=c.children)!==null&&h!==void 0&&h.map(function(S){return S.value}).includes(b[1]))&&V.setFieldsValue({base_group_job:void 0})}}}}}}),(0,e.jsx)("div",{style:{width:"100%",height:"100%",paddingTop:50,display:f},children:(0,e.jsxs)(i.Z,{form:V,layout:"horizontal",size:"small",labelCol:{span:4},wrapperCol:{span:12},style:{width:"100%"},colon:!1,className:xr().job_plan_form,initialValues:{group_method:"no"},children:[(0,e.jsx)(i.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.generate.reports"}),name:"auto_report",children:(0,e.jsx)(tt.Z,{onChange:Te,checked:le,size:"default",checkedChildren:(0,e.jsx)(n._H,{id:"plan.checked"}),unCheckedChildren:(0,e.jsx)(n._H,{id:"plan.unChecked"})})}),le&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.report_name"}),children:(0,e.jsxs)("div",{style:{position:"relative"},children:[(0,e.jsx)(i.Z.Item,{name:"report_name",children:(0,e.jsx)(P.Z,{autoComplete:"off",placeholder:p({id:"plan.report_name.placeholder"},{Job_name:"{Job_name}",report_seq_id:"{report_seq_id}"})})}),(0,e.jsx)("div",{style:{position:"absolute",right:-22,top:-4},children:(0,e.jsx)(gr.fD,{title:"",placement:"bottomRight",desc:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(J.Z,{children:(0,e.jsx)(W.Z.Text,{children:(0,e.jsx)(n._H,{id:"plan.available.placeholders"})})}),(0,e.jsx)(J.Z,{children:(0,e.jsx)(W.Z.Text,{children:"{date} {plan_name} {plan_id} {product_version}"})})]})})})]})}),(0,e.jsx)(i.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.select.report.template"}),name:"report_template_id",children:(0,e.jsx)(D.Z,{placeholder:p({id:"please.select"}),getPopupContainer:function(Z){return Z.parentNode},showSearch:!0,optionFilterProp:"children",filterOption:function(Z,ce){return ce.children.toLowerCase().indexOf(Z.toLowerCase())>=0},children:ee.map(function(fe){return(0,e.jsx)(D.Z.Option,{value:fe.id,children:fe.name},fe.id)})})}),(0,e.jsx)(i.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.group_method"}),name:"group_method",children:(0,e.jsxs)(r.ZP.Group,{onChange:function(Z){we(Z.target.value)},children:[(0,e.jsx)(r.ZP,{value:"no",children:(0,e.jsx)(n._H,{id:"plan.group_method.not"})}),(0,e.jsx)(r.ZP,{value:"job",children:(0,e.jsx)(n._H,{id:"plan.group_method.job"})}),(0,e.jsx)(r.ZP,{value:"stage",children:(0,e.jsx)(n._H,{id:"plan.group_method.stage"})})]})}),oe==="job"&&(0,e.jsx)(i.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.select.base_group"}),name:"base_group_job",rules:[{required:!0,message:p({id:"plan.select.base_group.message"})}],children:(0,e.jsx)(pa.Z,{placeholder:p({id:"plan.select.base_group.message"}),options:Q||[],expandTrigger:"hover",className:xr().cascaderStyle})}),oe==="stage"&&(0,e.jsx)(i.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.select.base_group"}),name:"base_group_stage",rules:[{required:!0,message:p({id:"plan.select.base_group.message"})}],children:(0,e.jsx)(D.Z,{placeholder:p({id:"plan.select.base_group.message"}),getPopupContainer:function(Z){return Z.parentNode},children:ze.map(function(fe,Z){return(0,e.jsx)(D.Z.Option,{value:Z+1,children:fe.name},Z+1)})})}),(0,e.jsx)(i.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.report_description"}),name:"report_description",rules:[{required:!1},{max:500,message:p({id:"plan.limit.characters"})}],children:(0,e.jsx)(P.Z.TextArea,{placeholder:p({id:"plan.report_description.placeholder"})})})]})]})})}),Mt=t(68176),en="plan.trigger.rule",ma=[["format",5,"example"],["symbols",4],["example",4]],va=function(){var u=(0,n.YB)();return(0,e.jsx)("div",{style:{position:"absolute",right:-22,top:-4},children:(0,e.jsx)(gr.fD,{title:"",placement:"left",desc:(0,e.jsx)(ne.Z,{direction:"vertical",style:{width:"100%"},children:ma.map(function(E){var p,f=(0,C.Z)(E,3),v=f[0],pe=f[1],ke=f[2];return(0,e.jsxs)(s.Fragment,{children:[(0,e.jsx)(W.Z.Text,{strong:!0,children:u.formatMessage({id:"".concat(en,".").concat(v)})}),ke&&(0,e.jsx)(W.Z.Text,{children:u.formatMessage({id:"".concat(en,".").concat(v,".").concat(ke)})}),(p=new Array(pe).fill(""))===null||p===void 0?void 0:p.map(function(Oe,_e){return(0,e.jsx)(W.Z.Text,{style:{textIndent:"2em",display:"inline-block"},children:u.formatMessage({id:"".concat(en,".").concat(v,".").concat(_e+1)})},_e)})]},v)})})})})},ga=va,xa=function(u,E){var p=(0,n.YB)(),f=p.formatMessage,v=u.show,pe=u.template,ke=i.Z.useForm(),Oe=(0,C.Z)(ke,1),_e=Oe[0],he=(0,s.useState)(!1),V=(0,C.Z)(he,2),be=V[0],A=V[1],le=(0,s.useState)([]),Te=(0,C.Z)(le,2),Y=Te[0],k=Te[1];return(0,s.useImperativeHandle)(E,function(){return{validate:function(){var ee=(0,$.Z)((0,g.Z)().mark(function De(){return(0,g.Z)().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:return oe.abrupt("return",_e.validateFields());case 1:case"end":return oe.stop()}},De)}));function ve(){return ee.apply(this,arguments)}return ve}()}}),(0,s.useEffect)(function(){if(pe&&JSON.stringify(pe)!=="{}"){var ee=pe.cron_schedule;A(ee),_e.setFieldsValue(pe)}},[pe]),(0,e.jsx)("div",{style:{width:"100%",height:"100%",paddingTop:50,display:v},children:(0,e.jsxs)(i.Z,{form:_e,layout:"horizontal",size:"small",labelCol:{span:4},wrapperCol:{span:12},style:{width:"100%"},colon:!1,className:Ye().job_plan_form,initialValues:{blocking_strategy:1},children:[(0,e.jsx)(i.Z.Item,{name:"cron_schedule",label:(0,e.jsx)(n._H,{id:"plan.timed.trigger"}),valuePropName:"checked",children:(0,e.jsx)(tt.Z,{onChange:A,size:"default",checked:!0,checkedChildren:(0,e.jsx)(n._H,{id:"operation.open"}),unCheckedChildren:(0,e.jsx)(n._H,{id:"operation.close"})})}),be&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.Z.Item,{label:(0,e.jsx)(n._H,{id:"plan.trigger.rule"}),required:!0,children:(0,e.jsxs)("div",{style:{position:"relative"},children:[(0,e.jsx)(i.Z.Item,{name:"cron_info",validateTrigger:"onBlur",rules:[function(){return{validator:function(ve,De){return(0,$.Z)((0,g.Z)().mark(function Re(){var oe,we,Ne,Ae;return(0,g.Z)().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:if(k([]),De){O.next=3;break}return O.abrupt("return",Promise.reject(f({id:"plan.cron_info.empty"})));case 3:return O.next=5,(0,Mt.uy)({cron_express:De});case 5:if(O.t0=O.sent,O.t0){O.next=8;break}O.t0={};case 8:if(oe=O.t0,we=oe.code,Ne=oe.data,Ae=Ne===void 0?[]:Ne,we!==200){O.next=15;break}return k(Ae),O.abrupt("return",Promise.resolve());case 15:return O.abrupt("return",Promise.reject(f({id:"plan.cron_info.reject"})));case 16:case"end":return O.stop()}},Re)}))()}}}],children:(0,e.jsx)(P.Z,{autoComplete:"off",placeholder:f({id:"plan.trigger.rule"})})}),(0,e.jsx)(ga,{})]})}),!!(Y!=null&&Y.length)&&(0,e.jsxs)(i.Z.Item,{label:" ",children:[(0,e.jsxs)("span",{children:[(0,e.jsx)(n._H,{id:"plan.next.three.trigger.times"}),"\uFF1A"]}),Y.map(function(ee,ve){return(0,e.jsxs)("div",{style:{marginLeft:20},children:[ve+1,". ",ee]},ee)})]}),(0,e.jsx)(i.Z.Item,{name:"blocking_strategy",label:(0,e.jsx)(n._H,{id:"plan.blocking_strategy"}),children:(0,e.jsxs)(r.ZP.Group,{children:[(0,e.jsx)(r.ZP,{value:1,children:(0,e.jsx)(n._H,{id:"plan.blocking_strategy1"})}),(0,e.jsx)("br",{}),(0,e.jsx)(r.ZP,{value:2,children:(0,e.jsx)(n._H,{id:"plan.blocking_strategy2"})}),(0,e.jsx)("br",{}),(0,e.jsx)(r.ZP,{value:3,children:(0,e.jsx)(n._H,{id:"plan.blocking_strategy3"})}),(0,e.jsx)("br",{})]})})]})]})})},ja=(0,s.forwardRef)(xa),jr=t(526),Za=t(18406),ba=t(55679),Zr,br,Cr,yr,_r,Pr,Sr,Er,Ca=d.ZP.div(Zr||(Zr=(0,a.Z)([`
    width : 100%;
    /* height : `,`px; */
    background-color: #f5f5f5;
`])),function(m){return m.height-50}),ya=(0,d.ZP)(J.Z)(br||(br=(0,a.Z)([`
    height : `,`px;
    width : 100%;
    padding-left : 20px;
    background : #fff;

    .dom-hide {
        display: none;
    }
`])),function(m){return m.height-100}),_a=d.ZP.div(Cr||(Cr=(0,a.Z)([`
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
        `}),Pa=d.ZP.div(yr||(yr=(0,a.Z)([`
    height : 100%;
    width : calc( 100% - 240px );
    overflow : hidden;
    `,`
`])),function(m){var u=m.enLocale;return u&&`
            width: calc( 100% - 300px );
        `}),Sa=d.ZP.div(_r||(_r=(0,a.Z)([`
    width : 100% ;
    height : 50px ;
    background : #fff ;
    border-bottom : 1px solid rgba(0,0,0,.1) ;
    padding-left : 20px ;
    padding-right : 20px;
`]))),Ea=d.ZP.div(Pr||(Pr=(0,a.Z)([`
    width : 100% ;
    height : calc( 100% - 50px ) ;
    overflow : hidden ;
`]))),Oa=(0,d.ZP)(J.Z)(Sr||(Sr=(0,a.Z)([`
    height : 50px;
    width : 100%;
    padding-left : 20px;
`]))),Ta=(0,d.ZP)(J.Z)(Er||(Er=(0,a.Z)([`
    // height: 140px;
    width: 1072px;
    background: rgba(0,0,0,0.04);
    padding:20px 40px;
    margin:0 auto;
`]))),Da=t(74711),Kt=t.n(Da),Rt=t(39935),Vt=t(20905),wa=["headers","devel","hotfix_install","scripts","kernel","build_config","build_machine","code_branch","code_repo","commit_id","compile_branch","cpu_arch","product_name"],Ia=["headers","devel","hotfix_install","scripts","kernel","build_config","build_machine","code_branch","code_repo","kernel_packages","commit_id","compile_branch","cpu_arch","product_name"],Fa=["base_group_job","base_group_stage"],La=function(u){var E=(0,n.YB)(),p=E.formatMessage,f=(0,n.Kd)()==="en-US",v=(0,n.md)(),pe=(0,jr.CR)(),ke=pe.height,Oe=(0,y.TH)(),_e=Oe.state,he=u.route;(0,jr.jk)("Workspace.TestPlan.".concat(he.name));var V=u.match.params,be=V.ws_id,A=V.plan_id,le=(0,s.useState)(0),Te=(0,C.Z)(le,2),Y=Te[0],k=Te[1],ee=(0,s.useState)(he.name!=="Create"),ve=(0,C.Z)(ee,2),De=ve[0],Re=ve[1],oe=(0,s.useState)(!0),we=(0,C.Z)(oe,2),Ne=we[0],Ae=we[1],ze=(0,s.useState)(!1),O=(0,C.Z)(ze,2),F=O[0],H=O[1],Q=(0,s.useRef)(),xe=(0,s.useRef)(),He=(0,s.useRef)(),fe=(0,s.useState)({basic:{},pipline:{},touch:{}}),Z=(0,C.Z)(fe,2),ce=Z[0],Ge=Z[1],b=(0,s.useState)(null),c=(0,C.Z)(b,2),h=c[0],_=c[1],S=(0,s.useState)(null),Me=(0,C.Z)(S,2),M=Me[0],ft=Me[1],Ue=function(){var de=(0,$.Z)((0,g.Z)().mark(function ae(){var R,x,N;return(0,g.Z)().wrap(function(Ce){for(;;)switch(Ce.prev=Ce.next){case 0:return Ce.next=2,(0,Mt.jW)({ws_id:be,id:A});case 2:R=Ce.sent,x=R.data,N=R.code,N===200&&(_(x),Re(!1));case 6:case"end":return Ce.stop()}},ae)}));return function(){return de.apply(this,arguments)}}();(0,s.useEffect)(function(){var de=he.name;de!=="Create"&&Ue()},[he]);var X=function(){k(Y-1)},me=function(){return new Promise(function(ae,R){var x=ce.pipline,N=x||{},je=N.env_prep,Ce=je===void 0?{}:je,U=N.test_config,Ee=U===void 0?[]:U,se=p({id:"plan.cannot.be.empty"});Ce.machine_info&&!Ce.machine_info.length&&(ie.default.error("".concat(Ce.name).concat(se)),R()),Ee.length?Ee.forEach(function(Zt){var Pt=Zt.name,bt=Zt.template,St=bt===void 0?[]:bt;St.length||(ie.default.error("".concat(Pt).concat(se)),R())}):(ie.default.error("".concat(Ce.name).concat(se)),R()),ae()})},Ie=function(){var de=(0,$.Z)((0,g.Z)().mark(function ae(R){var x,N,je,Ce,U,Ee,se,Zt,Pt,bt,St,At,Ht,Bt,Wt;return(0,g.Z)().wrap(function(Pe){for(;;)switch(Pe.prev=Pe.next){case 0:if(!F){Pe.next=2;break}return Pe.abrupt("return");case 2:if(H(!0),Pe.prev=3,Y!==0){Pe.next=10;break}return Pe.next=7,Q.current.validate();case 7:x=Pe.sent,N=x.headers,je=x.devel,Ce=x.hotfix_install,U=x.scripts,Ee=x.kernel,se=x.build_config,Zt=x.build_machine,Pt=x.code_branch,bt=x.code_repo,St=x.commit_id,At=x.compile_branch,Ht=x.cpu_arch,Bt=x.product_name,Wt=(0,L.Z)(x,wa),Ge((0,o.Z)((0,o.Z)({},ce),{},{basic:(0,o.Z)((0,o.Z)({},Wt),{},{kernel_info:{headers:N,devel:je,hotfix_install:Ce,kernel:Ee,scripts:U},build_pkg_info:{build_config:se,build_machine:Zt,code_branch:Pt,code_repo:bt,commit_id:St,compile_branch:At,cpu_arch:Ht,name:Bt}})}));case 10:if(Y!==1){Pe.next=15;break}return Pe.next=13,me();case 13:Pe.next=18;break;case 15:if(Y!==2){Pe.next=18;break}return Pe.next=18,He.current.validate();case 18:he.name==="Edit"&&R!=="NextStep"?k(R):k(Y+1),Pe.next=24;break;case 21:Pe.prev=21,Pe.t0=Pe.catch(3),console.log(Pe.t0,8888);case 24:H(!1);case 25:case"end":return Pe.stop()}},ae,null,[[3,21]])}));return function(R){return de.apply(this,arguments)}}(),rt=function(){var de=(0,$.Z)((0,g.Z)().mark(function ae(R){return(0,g.Z)().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:if(!(R>Y)){N.next=5;break}return N.next=3,Ie(R);case 3:N.next=6;break;case 5:k(R);case 6:case"end":return N.stop()}},ae)}));return function(R){return de.apply(this,arguments)}}(),jt=function(ae){var R=ae.test_config,x=ae.env_prep;Ge((0,o.Z)((0,o.Z)({},ce),{},{pipline:{env_prep:x.visible?x:{},test_config:R.map(function(N){return(0,o.Z)((0,o.Z)({},N),{},{template:N.template.map(function(je){return je.id})})})}})),He.current.refreshData(R)},Nt=function(ae){if(ae){var R=ae.errorFields;if(R&&_t().isArray(R)&&R.length>0){var x=R[0].errors;ie.default.error(x.toString())}}},dt=function(){var de=(0,$.Z)((0,g.Z)().mark(function ae(){var R,x,N,je,Ce,U,Ee,se,Zt,Pt,bt,St,At,Ht,Bt,Wt,nn,Pe,Or,Tr,Dr,wr,Ir,rn,Lt,an,Fr,Lr;return(0,g.Z)().wrap(function(mt){for(;;)switch(mt.prev=mt.next){case 0:return mt.next=2,Q.current.validate();case 2:return x=mt.sent,mt.next=5,He.current.validate();case 5:return N=mt.sent,mt.next=8,xe.current.validate();case 8:return je=mt.sent,Ce=ce.pipline,U=x.headers,Ee=x.devel,se=x.hotfix_install,Zt=x.scripts,Pt=x.kernel,bt=x.build_config,St=x.build_machine,At=x.code_branch,Ht=x.code_repo,Bt=x.kernel_packages,Wt=x.commit_id,nn=x.compile_branch,Pe=x.cpu_arch,Or=x.product_name,Tr=(0,L.Z)(x,Ia),Dr=N.base_group_job,wr=N.base_group_stage,Ir=(0,L.Z)(N,Fa),rn=N.group_method,Lt=(0,o.Z)({},Ir),rn==="job"&&(an=(0,C.Z)(Dr,2),Fr=an[0],Lr=an[1],Lt=Object.assign(Lt,{stage_id:Fr,base_group:Lr})),rn==="stage"&&(Lt=Object.assign(Lt,{base_group:wr})),mt.abrupt("return",(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},Tr),{},{kernel_info:{headers:U,devel:Ee,hotfix_install:se,scripts:Zt,kernel:Pt,kernel_packages:Bt},build_pkg_info:{build_config:bt,build_machine:St,code_branch:At,code_repo:Ht,commit_id:Wt,compile_branch:nn,cpu_arch:Pe,name:Or}},Lt),je),{},{cron_info:(R=je==null?void 0:je.cron_info)!==null&&R!==void 0?R:ce==null?void 0:ce.cron_info},Ce));case 17:case"end":return mt.stop()}},ae)}));return function(){return de.apply(this,arguments)}}(),Ma=function(){var de=(0,$.Z)((0,g.Z)().mark(function ae(){var R,x,N,je,Ce;return(0,g.Z)().wrap(function(Ee){for(;;)switch(Ee.prev=Ee.next){case 0:if(!F){Ee.next=2;break}return Ee.abrupt("return");case 2:return H(!0),Ee.next=5,dt();case 5:return R=Ee.sent,Ee.next=8,(0,Mt.lY)((0,o.Z)((0,o.Z)({},R),{},{ws_id:be}));case 8:if(x=Ee.sent,N=x.code,je=x.msg,Ce=x.data,N===200){Ee.next=16;break}return(0,Rt.EV)(N,je),H(!1),Ee.abrupt("return");case 16:ft(Ce),Ae(!1);case 18:case"end":return Ee.stop()}},ae)}));return function(){return de.apply(this,arguments)}}(),tn=function(){var de=(0,$.Z)((0,g.Z)().mark(function ae(){var R,x,N,je,Ce,U=arguments;return(0,g.Z)().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:if(R=U.length>0&&U[0]!==void 0?U[0]:!1,!F){se.next=3;break}return se.abrupt("return");case 3:return H(!0),se.prev=4,se.next=7,dt();case 7:return x=se.sent,se.next=10,(0,Mt.g3)((0,o.Z)((0,o.Z)({},x),{},{is_save:R,ws_id:be,plan_id:A}));case 10:if(N=se.sent,je=N.code,Ce=N.msg,je===200){se.next=17;break}return(0,Rt.EV)(je,Ce),H(!1),se.abrupt("return");case 17:n.m8.push("/ws/".concat(be,"/test_plan?").concat((0,Vt.stringify)(_e))),se.next=25;break;case 20:se.prev=20,se.t0=se.catch(4),console.log(se.t0),H(!1),Nt(se.t0);case 25:case"end":return se.stop()}},ae,null,[[4,20]])}));return function(){return de.apply(this,arguments)}}(),Ra=function(){return n.m8.push("/ws/".concat(be,"/test_plan?").concat((0,Vt.stringify)(_e)))},Na=function(){var de=(0,$.Z)((0,g.Z)().mark(function ae(){var R,x,N,je;return(0,g.Z)().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:if(!F){U.next=2;break}return U.abrupt("return");case 2:return H(!0),U.prev=3,U.next=6,dt();case 6:return R=U.sent,U.next=9,(0,Mt.qW)((0,o.Z)((0,o.Z)({},R),{},{ws_id:be,plan_id:A}));case 9:if(x=U.sent,N=x.code,je=x.msg,N===200){U.next=16;break}return(0,Rt.EV)(N,je),H(!1),U.abrupt("return");case 16:n.m8.push("/ws/".concat(be,"/test_plan?").concat((0,Vt.stringify)(_e))),U.next=24;break;case 19:U.prev=19,U.t0=U.catch(3),console.log(U.t0),H(!1),Nt(U.t0);case 24:case"end":return U.stop()}},ae,null,[[3,19]])}));return function(){return de.apply(this,arguments)}}();return(0,e.jsx)(T.Z,{spinning:De,children:(0,e.jsxs)(Ca,{height:ke,children:[(0,e.jsx)(Oa,{align:"middle",children:(0,e.jsxs)(pt.Z,{children:[(0,e.jsx)(pt.Z.Item,{onClick:Ra,children:(0,e.jsx)("span",{style:{cursor:"pointer"},children:(0,e.jsx)(n._H,{id:"menu.Workspace.TestPlan.Manage"})})}),(0,e.jsx)(pt.Z.Item,{children:(0,e.jsx)(n._H,{id:"Workspace.TestPlan.".concat(he.name)})})]})}),(0,e.jsx)(ya,{height:ke,children:Ne?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(_a,{state:he.name!=="Create",enLocale:f,children:(0,e.jsxs)(qe.Z,{current:Y,direction:"vertical",style:{height:201},onChange:rt,children:[(0,e.jsx)(qe.Z.Step,{title:(0,e.jsx)(n._H,{id:"plan.basic.configuration"}),className:Kt()[["Run","Edit"].includes(he.name)?"stepsWrapper_1":"stepsWrapper"]},0),(0,e.jsx)(qe.Z.Step,{title:(0,e.jsx)(n._H,{id:"plan.test.configuration"}),className:Kt()[["Run","Edit"].includes(he.name)?"stepsWrapper_2":"stepsWrapper"]},1),(0,e.jsx)(qe.Z.Step,{title:(0,e.jsx)(n._H,{id:"plan.report.configuration"})},2),(0,e.jsx)(qe.Z.Step,{title:(0,e.jsx)(n._H,{id:"plan.trigger.configuration"})},3)]})}),(0,e.jsxs)(Pa,{enLocale:f,children:[(0,e.jsx)(Sa,{children:(0,e.jsxs)(J.Z,{justify:"space-between",align:"middle",children:[(0,e.jsx)("div",{className:Kt().plan_step_btn,onClick:X,children:Y===0?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Za.Z,{}),(0,e.jsx)("span",{children:(0,e.jsx)(n._H,{id:"operation.previous"})})]})}),(0,e.jsxs)(ne.Z,{children:[he.name==="Run"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(j.Z,{onClick:function(){return tn()},children:(0,e.jsx)(n._H,{id:"plan.run.only"})}),(0,e.jsx)(n.Nv,{accessible:v.WsTourist(),children:(0,e.jsx)(n.Nv,{accessible:v.WsMemberOperateSelf(h==null?void 0:h.creator),fallback:(0,e.jsx)(j.Z,{onClick:function(){return(0,Rt.WR)()},type:"primary",children:(0,e.jsx)(n._H,{id:"plan.run.and.save"})}),children:(0,e.jsx)(j.Z,{onClick:function(){return tn(!0)},type:"primary",children:(0,e.jsx)(n._H,{id:"plan.run.and.save"})})})})]}),he.name==="Edit"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(j.Z,{onClick:Na,type:"primary",children:(0,e.jsx)(n._H,{id:"plan.save"})}),(0,e.jsx)(n.Nv,{accessible:v.WsTourist(),children:(0,e.jsx)(n.Nv,{accessible:v.WsMemberOperateSelf(h==null?void 0:h.creator),fallback:(0,e.jsx)(j.Z,{onClick:function(){return(0,Rt.WR)()},children:(0,e.jsx)(n._H,{id:"plan.save.and.run"})}),children:(0,e.jsx)(j.Z,{onClick:function(){return tn(!0)},children:(0,e.jsx)(n._H,{id:"plan.save.and.run"})})})})]}),(0,e.jsx)("div",{className:Kt().plan_step_btn,onClick:function(){return Ie("NextStep")},children:Y<3&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{style:{fontSize:14},children:(0,e.jsx)(n._H,{id:"operation.next"})}),(0,e.jsx)(ba.Z,{})]})}),Y===3&&(0,e.jsx)(e.Fragment,{children:he.name==="Create"&&(0,e.jsx)(j.Z,{type:"primary",onClick:Ma,children:(0,e.jsx)(n._H,{id:"plan.release"})})})]})]})}),(0,e.jsxs)(Ea,{children:[(0,e.jsx)(I,{show:Y===0?"block":"none",ref:Q,template:h}),(0,e.jsx)(ua,{show:Y===1?"block":"none",template:h,onChange:jt}),(0,e.jsx)(fa,(0,o.Z)((0,o.Z)({},u),{},{show:Y===2?"block":"none",ref:He,template:h})),(0,e.jsx)(ja,{ref:xe,template:h,show:Y===3?"block":"none"})]})]})]}):(0,e.jsxs)("div",{style:{width:"100%"},children:[(0,e.jsx)(Se.ZP,{status:"success",style:{margin:"0 auto"},title:(0,e.jsx)(n._H,{id:"plan.created.success"}),subTitle:(0,e.jsx)(n._H,{id:"plan.the.test.plan.can"}),extra:[(0,e.jsx)(j.Z,{type:"primary",onClick:function(){return n.m8.push("/ws/".concat(be,"/test_plan?").concat((0,Vt.stringify)(_e)))},children:(0,e.jsx)(n._H,{id:"plan.return.management"})},"console")]}),(0,e.jsxs)(Ta,{children:[(0,e.jsx)(Fe.Z,{span:24,children:(0,e.jsx)("b",{children:(0,e.jsx)(n._H,{id:"plan.configuration.information"})})}),(0,e.jsx)(Fe.Z,{span:24,children:(0,e.jsxs)(J.Z,{children:[(M==null?void 0:M.name)&&(0,e.jsx)(Fe.Z,{span:12,children:(0,e.jsxs)(ne.Z,{children:[(0,e.jsxs)("span",{children:[(0,e.jsx)(n._H,{id:"plan.table.name"}),"\uFF1A"]}),(0,e.jsx)("span",{children:M==null?void 0:M.name})]})}),(M==null?void 0:M.cron_info)&&(0,e.jsx)(Fe.Z,{span:12,children:(0,e.jsxs)(ne.Z,{children:[(0,e.jsxs)("span",{children:[(0,e.jsx)(n._H,{id:"plan.table.cron_info"}),"\uFF1A"]}),(0,e.jsx)("span",{children:M==null?void 0:M.cron_info})]})}),(M==null?void 0:M.enable)&&(0,e.jsx)(Fe.Z,{span:12,children:(0,e.jsxs)(ne.Z,{children:[(0,e.jsxs)("span",{children:[(0,e.jsx)(n._H,{id:"plan.table.enable"}),"\uFF1A"]}),(0,e.jsx)("span",{children:M!=null&&M.enable?(0,e.jsx)(Xe.Z,{status:"processing",text:(0,e.jsx)(n._H,{id:"operation.yes"})}):(0,e.jsx)(Xe.Z,{status:"default",text:(0,e.jsx)(n._H,{id:"operation.no"})})})]})}),(M==null?void 0:M.next_time)&&(0,e.jsx)(Fe.Z,{span:12,children:(0,e.jsxs)(ne.Z,{children:[(0,e.jsxs)("span",{children:[(0,e.jsx)(n._H,{id:"plan.next_time"}),"\uFF1A"]}),(0,e.jsx)("span",{children:M==null?void 0:M.next_time})]})})]})})]})]})})]})})},ka=La},68176:function(Ke,Ve,t){"use strict";t.d(Ve,{d3:function(){return T},lY:function(){return ot},g3:function(){return Xe},NH:function(){return te},jW:function(){return Fe},qW:function(){return ct},uy:function(){return Se},Nm:function(){return ut}});var ue=t(22812),T=function(Ze){return(0,ue.WY)("/api/plan/list/",{params:Ze})},ot=function(Ze){return(0,ue.WY)("/api/plan/list/",{data:Ze,method:"post"})},Xe=function(Ze){return(0,ue.WY)("/api/plan/run/",{data:Ze,method:"post"})},te=function(Ze){return(0,ue.WY)("/api/plan/detail/",{data:Ze,method:"delete"})},Fe=function(Ze){return(0,ue.WY)("/api/plan/detail/",{params:Ze})},ct=function(Ze){return(0,ue.WY)("/api/plan/detail/",{data:Ze,method:"put"})},Se=function(Ze){return(0,ue.WY)("/api/plan/check/cron_expression/",{data:Ze,method:"post"})},ut=function(Ze){return(0,ue.WY)("/api/plan/copy/",{data:Ze,method:"post"})}},78358:function(Ke,Ve,t){"use strict";t.d(Ve,{gN:function(){return K},tZ:function(){return P},yQ:function(){return w},Pc:function(){return i},cQ:function(){return y},YV:function(){return G},Nq:function(){return ye},JQ:function(){return e},iK:function(){return Qe},fD:function(){return Be},QN:function(){return Je}});var ue=t(57359),T=t(34423),ot=t(13059),Xe=t(53676),te=t(20418),Fe=t(51937),ct=t(34516),Se=t(41428),ut=t(70772),J=t(6701),Ze=t(14320),ne=t(53479),Et=t(79625),j=t(96584),kt=t(89963),qe=t(70077),Ct=t(22374),pt=t(86252),o=t.n(pt),L=t(93329),st=t(74066),ie=t(24812),g=t(22812),$=t(97939),C=t(39935),s=t(526),vt=t(6130),r=t(52454),gt,D=new Map([["success","#81BF84"],["pass","#81BF84"],["running","#649FF6"],["fail","#C84C5A"]]),K=function(l){var I=(0,ie.UO)(),B=I.ws_id;return(0,r.jsxs)(qe.Z,{style:{marginBottom:l.bottomHeight},children:[(0,r.jsx)(qe.Z.Item,{children:(0,r.jsx)("span",{style:{cursor:"pointer"},onClick:function(){return g.m8.push("/ws/".concat(B,"/test_result"))},children:(0,r.jsx)(g._H,{id:"ws.result.details.test.result"})})}),(0,r.jsx)(qe.Z.Item,{children:(0,r.jsx)(g._H,{id:"ws.result.details.result.details"})})]})},P=function(l){return l==="success"||l===!0?(0,r.jsx)("span",{style:{fontWeight:500,color:"#81BF84"},children:"Success"}):l==="fail"||l===!1?(0,r.jsx)("span",{style:{fontWeight:500,color:"#C84C5A"},children:"Fail"}):l==="running"?(0,r.jsx)("span",{style:{fontWeight:500,color:"#649FF6"},children:"Running"}):l==="stop"?(0,r.jsx)("span",{style:{fontWeight:500,color:"#1D1D1D"},children:"Stop"}):l==="pending"?(0,r.jsx)("span",{style:{fontWeight:500,color:"#1D1D1D"},children:"Pending"}):l==="skip"?(0,r.jsx)("span",{style:{fontWeight:500,color:"#1D1D1D"},children:"Skip"}):(0,r.jsx)(r.Fragment,{})},w=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"-";return{ellipsis:{showTitle:!1},render:function(B){return B?(0,r.jsx)(vt.K,{ellipsis:{tooltip:!0},children:B}):l}}},i=function(l){var I=l.title,B=l.width,W=B===void 0?"100%":B,We=l.onEdit,tt=l.access,$e=(0,Ct.useRef)(),nt=tt?(0,r.jsx)(L.Z,{style:{marginLeft:6,cursor:"pointer"},onClick:We}):(0,r.jsx)(L.Z,{style:{marginLeft:6,cursor:"pointer"},onClick:function(){return(0,C.WR)()}});return(0,r.jsx)("div",{ref:$e,style:{width:W},children:(0,r.jsxs)(ne.Z,{style:{width:W},justify:"start",align:"middle",children:[(0,r.jsx)(j.Z,{placement:"topLeft",title:I,children:(0,r.jsx)("span",{style:{maxWidth:54,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:I||"-"})}),nt]})})},a=function(l){return D.get(l)||"#D9D9D9"},n=function(l){var I=l.text,B=(0,g.YB)(),W=(0,s.oM)(B.formatMessage({id:"request.copy.success"}));return(0,r.jsx)("span",{style:{cursor:"pointer",color:"#1890ff"},onClick:function(){return W(I)},children:B.formatMessage({id:"operation.copy",defaultMessage:"\u590D\u5236"})})},y=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"-";return{ellipsis:{showTitle:!1},render:function(B){return B?(0,r.jsx)(j.Z,{overlayClassName:o().tootip_overflow,placement:"topLeft",title:(0,r.jsxs)(ne.Z,{children:[(0,r.jsx)(J.Z,{span:24,children:B}),(0,r.jsx)(J.Z,{span:24,children:(0,r.jsx)(ne.Z,{justify:"center",children:(0,r.jsx)(n,{text:B})})})]}),children:B}):l}}},G=function(l){return l==="decline"?"#C84C5A":l==="normal"?"#000000":l==="increase"?"#81BF84":""},ye=function(l,I,B){return l==="decline"?(0,r.jsx)("span",{style:{color:"#C84C5A"},children:B({id:"ws.result.details.".concat(l)})}):l==="normal"?(0,r.jsx)("span",{style:{color:"#000000"},children:B({id:"ws.result.details.".concat(l)})}):l==="increase"?(0,r.jsx)("span",{style:{color:"#81BF84"},children:B({id:"ws.result.details.".concat(l)})}):I||"-"},q=(0,$.ZP)(ct.Z)(gt||(gt=(0,Se.Z)([`
    font-weight: 500;
    width: 72px;
    text-align: center;
    `,`
    text-transform: capitalize;
`])),function(z){var l=z.no_margin;return l?"margin-right: 0;":""}),Ye=function(l){return(0,r.jsx)(q,(0,te.Z)({},l))},et=function(l){var I=(0,g.YB)(),B=I.formatMessage;return(0,r.jsx)(j.Z,{title:B({id:"ws.result.details.job_state"}),placement:"bottom",children:(0,r.jsx)(q,(0,te.Z)({},l))})},ge=function(l){var I=l.title;return(0,r.jsx)(Xe.Z,{title:I,placement:"right",trigger:"hover",overlayClassName:o().tag_popover_style,children:(0,r.jsx)(st.Z,{style:{color:"rgba(0, 0, 0, 0.65)",verticalAlign:"middle"}})})},re=function(l){var I=l.state;return(0,r.jsx)(Ye,(0,te.Z)((0,te.Z)({},l),{},{color:a(I),style:!D.get(I)&&{color:"#1d1d1d"},children:I==="success"?"complete":I}))},d=function(l){var I=l.state;return(0,r.jsx)(et,(0,te.Z)((0,te.Z)({},l),{},{color:a(I),style:!D.get(I)&&{color:"#1d1d1d"},children:I==="success"?"complete":I}))},e=function(l){var I=(0,g.YB)(),B=I.formatMessage,W=l.state,We=l.run_state,tt=We===void 0?"":We,$e=l.state_desc,nt=(0,ie.UO)(),at=nt.ws_id;return W==="running"?$e?(0,r.jsxs)(T.Z,{size:0,children:[(0,r.jsx)(re,(0,te.Z)((0,te.Z)({},l),{},{children:W})),(0,r.jsx)(ge,{title:(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:$e.replace(/(\d+)/g,'<a href="/ws/'.concat(at,'/test_result/$1" target="_blank">$1</a>'))}})})]}):tt?(0,r.jsxs)(T.Z,{size:0,children:[(0,r.jsx)(re,(0,te.Z)((0,te.Z)({},l),{},{children:W})),(0,r.jsx)(ge,{title:B({id:"ws.result.details.not.assigned.server"})})]}):(0,r.jsxs)(T.Z,{size:0,children:[(0,r.jsx)(re,(0,te.Z)((0,te.Z)({},l),{},{children:W})),(0,r.jsx)(ge,{title:B({id:"ws.result.details.running,please.wait"})})]}):W==="pending"&&$e?(0,r.jsxs)(T.Z,{size:0,children:[(0,r.jsx)(re,(0,te.Z)((0,te.Z)({},l),{},{children:W})),(0,r.jsx)(ge,{title:(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:$e.replace(/(\d+)/g,'<a href="/ws/'.concat(at,'/test_result/$1" target="_blank">$1</a>'))}})})]}):(0,r.jsx)(re,(0,te.Z)({},l))},Qe=function(l){return(0,r.jsx)(d,(0,te.Z)((0,te.Z)({},l),{},{no_margin:1}))},Be=function(l){var I=l.title,B=l.desc,W=l.placement,We=W===void 0?"bottom":W;return(0,r.jsxs)(T.Z,{children:[(0,r.jsx)("span",{style:{color:"rgba(0, 0, 0, 0.85)"},children:I}),(0,r.jsx)(j.Z,{overlayClassName:o().table_question_tooltip,placement:We,arrowPointAtCenter:!0,title:B,color:"#fff",children:(0,r.jsx)(st.Z,{style:{color:"rgba(0, 0, 0, 0.65)"}})})]})},Je=function(l){var I=l.title,B=l.test_value,W=l.value_list,We=l.cv_value,tt=l.max_value,$e=l.min_value,nt=l.metric,at=l.result,Le=(0,g.YB)(),Ot=Le.formatMessage,it=(0,s.oM)(Ot({id:"request.copy.success"})),lt=function(xt){return xt?new Number(xt).toFixed(2):null},Tt=lt(tt),$t=lt($e),Dt=We,wt=lt(B),It=W.map(function(ht){return lt(ht)}),yt="".concat(nt," ").concat(I,`:
Avg: `).concat(wt,`
CV:  `).concat(Dt);yt+=Tt?`
Max: `.concat(Tt):"",yt+=$t?`
Min: `.concat($t):"",yt+=It.length?`
Test Record
`:"",yt+=It.reduce(function(ht,xt,Yt){return ht.concat("(".concat(Yt+1,") ").concat(xt,`
`))},"");var Ft="".concat(wt,"\xB1").concat(Dt),_t=function(){return at==="decline"?(0,r.jsx)("span",{className:o().result_popover_span,style:{color:"#C84C5A"},children:Ft}):at==="increase"?(0,r.jsx)("span",{className:o().result_popover_span,style:{color:"#81BF84"},children:Ft}):(0,r.jsx)("span",{className:o().result_popover_span,style:{color:"rgba(0, 0, 0, 0.65)"},children:Ft})};return(0,r.jsx)(Xe.Z,{overlayClassName:o().metric_list_copy,title:(0,r.jsxs)(ne.Z,{justify:"space-between",children:[(0,r.jsx)("b",{children:I}),(0,r.jsx)("span",{onClick:function(){return it(yt)},style:{color:"#1890FF",cursor:"pointer",marginLeft:"8px"},children:(0,r.jsx)(g._H,{id:"operation.copy"})})]}),content:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(ne.Z,{children:[(0,r.jsx)("b",{children:"Avg\uFF1A"}),(0,r.jsx)("span",{children:wt})]}),(0,r.jsxs)(ne.Z,{children:[(0,r.jsx)("b",{children:"CV\uFF1A"}),(0,r.jsx)("span",{children:Dt})]}),(0,r.jsxs)(ne.Z,{children:[(0,r.jsx)("b",{children:"Max\uFF1A"}),(0,r.jsx)("span",{children:Tt})]}),(0,r.jsxs)(ne.Z,{children:[(0,r.jsx)("b",{children:"Min\uFF1A"}),(0,r.jsx)("span",{children:$t})]}),It.length>0&&(0,r.jsx)(ne.Z,{style:{marginTop:16},children:(0,r.jsx)("b",{children:"Test Record"})}),It.map(function(ht,xt){return(0,r.jsx)(ne.Z,{children:"(".concat(xt+1,")").concat(ht)},xt)})]}),children:_t()})}},71924:function(Ke,Ve,t){"use strict";t.d(Ve,{Z:function(){return gt}});var ue=t(29700),T=t(77335),ot=t(60061),Xe=t(53770),te=t(68591),Fe=t.n(te),ct=t(45972),Se=t(10929),ut=t(52318),J=t(31279),Ze=t(65284),ne=t(31762),Et=t(51129),j=t(22374),kt=["className","prefixCls","style","active","status","iconPrefix","icon","wrapperStyle","stepNumber","disabled","description","title","subTitle","progressDot","stepIcon","tailContent","icons","stepIndex","onStepClick","onClick"];function qe(D){return typeof D=="string"}var Ct=function(D){(0,ne.Z)(P,D);var K=(0,Et.Z)(P);function P(){var w;(0,ut.Z)(this,P);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return w=K.call.apply(K,[this].concat(a)),(0,T.Z)((0,Ze.Z)(w),"onClick",function(){var y=w.props,G=y.onClick,ye=y.onStepClick,q=y.stepIndex;G&&G.apply(void 0,arguments),ye(q)}),w}return(0,J.Z)(P,[{key:"renderIconNode",value:function(){var i,a=this.props,n=a.prefixCls,y=a.progressDot,G=a.stepIcon,ye=a.stepNumber,q=a.status,Ye=a.title,et=a.description,ge=a.icon,re=a.iconPrefix,d=a.icons,e,Qe=Fe()("".concat(n,"-icon"),"".concat(re,"icon"),(i={},(0,T.Z)(i,"".concat(re,"icon-").concat(ge),ge&&qe(ge)),(0,T.Z)(i,"".concat(re,"icon-check"),!ge&&q==="finish"&&(d&&!d.finish||!d)),(0,T.Z)(i,"".concat(re,"icon-cross"),!ge&&q==="error"&&(d&&!d.error||!d)),i)),Be=j.createElement("span",{className:"".concat(n,"-icon-dot")});return y?typeof y=="function"?e=j.createElement("span",{className:"".concat(n,"-icon")},y(Be,{index:ye-1,status:q,title:Ye,description:et})):e=j.createElement("span",{className:"".concat(n,"-icon")},Be):ge&&!qe(ge)?e=j.createElement("span",{className:"".concat(n,"-icon")},ge):d&&d.finish&&q==="finish"?e=j.createElement("span",{className:"".concat(n,"-icon")},d.finish):d&&d.error&&q==="error"?e=j.createElement("span",{className:"".concat(n,"-icon")},d.error):ge||q==="finish"||q==="error"?e=j.createElement("span",{className:Qe}):e=j.createElement("span",{className:"".concat(n,"-icon")},ye),G&&(e=G({index:ye-1,status:q,title:Ye,description:et,node:e})),e}},{key:"render",value:function(){var i,a=this.props,n=a.className,y=a.prefixCls,G=a.style,ye=a.active,q=a.status,Ye=q===void 0?"wait":q,et=a.iconPrefix,ge=a.icon,re=a.wrapperStyle,d=a.stepNumber,e=a.disabled,Qe=a.description,Be=a.title,Je=a.subTitle,z=a.progressDot,l=a.stepIcon,I=a.tailContent,B=a.icons,W=a.stepIndex,We=a.onStepClick,tt=a.onClick,$e=(0,Se.Z)(a,kt),nt=Fe()("".concat(y,"-item"),"".concat(y,"-item-").concat(Ye),n,(i={},(0,T.Z)(i,"".concat(y,"-item-custom"),ge),(0,T.Z)(i,"".concat(y,"-item-active"),ye),(0,T.Z)(i,"".concat(y,"-item-disabled"),e===!0),i)),at=(0,ct.Z)({},G),Le={};return We&&!e&&(Le.role="button",Le.tabIndex=0,Le.onClick=this.onClick),j.createElement("div",(0,ue.Z)({},$e,{className:nt,style:at}),j.createElement("div",(0,ue.Z)({onClick:tt},Le,{className:"".concat(y,"-item-container")}),j.createElement("div",{className:"".concat(y,"-item-tail")},I),j.createElement("div",{className:"".concat(y,"-item-icon")},this.renderIconNode()),j.createElement("div",{className:"".concat(y,"-item-content")},j.createElement("div",{className:"".concat(y,"-item-title")},Be,Je&&j.createElement("div",{title:typeof Je=="string"?Je:void 0,className:"".concat(y,"-item-subtitle")},Je)),Qe&&j.createElement("div",{className:"".concat(y,"-item-description")},Qe))))}}]),P}(j.Component),pt=["prefixCls","style","className","children","direction","type","labelPlacement","iconPrefix","status","size","current","progressDot","stepIcon","initial","icons","onChange","items"],o=function(D){(0,ne.Z)(P,D);var K=(0,Et.Z)(P);function P(){var w;(0,ut.Z)(this,P);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return w=K.call.apply(K,[this].concat(a)),(0,T.Z)((0,Ze.Z)(w),"onStepClick",function(y){var G=w.props,ye=G.onChange,q=G.current;ye&&q!==y&&ye(y)}),w}return(0,J.Z)(P,[{key:"render",value:function(){var i,a=this,n=this.props,y=n.prefixCls,G=n.style,ye=G===void 0?{}:G,q=n.className,Ye=n.children,et=n.direction,ge=n.type,re=n.labelPlacement,d=n.iconPrefix,e=n.status,Qe=n.size,Be=n.current,Je=n.progressDot,z=n.stepIcon,l=n.initial,I=n.icons,B=n.onChange,W=n.items,We=W===void 0?[]:W,tt=(0,Se.Z)(n,pt),$e=ge==="navigation",nt=Je?"vertical":re,at=Fe()(y,"".concat(y,"-").concat(et),q,(i={},(0,T.Z)(i,"".concat(y,"-").concat(Qe),Qe),(0,T.Z)(i,"".concat(y,"-label-").concat(nt),et==="horizontal"),(0,T.Z)(i,"".concat(y,"-dot"),!!Je),(0,T.Z)(i,"".concat(y,"-navigation"),$e),i));return j.createElement("div",(0,ue.Z)({className:at,style:ye},tt),We.filter(function(Le){return Le}).map(function(Le,Ot){var it=(0,ct.Z)({},Le),lt=l+Ot;return e==="error"&&Ot===Be-1&&(it.className="".concat(y,"-next-error")),it.status||(lt===Be?it.status=e:lt<Be?it.status="finish":it.status="wait"),j.createElement(Ct,(0,ue.Z)({},it,{active:lt===Be,stepNumber:lt+1,stepIndex:lt,key:lt,prefixCls:y,iconPrefix:d,wrapperStyle:ye,progressDot:Je,stepIcon:z,icons:I,onStepClick:B&&a.onStepClick}))}))}}]),P}(j.Component);(0,T.Z)(o,"Step",Ct),(0,T.Z)(o,"defaultProps",{type:"default",prefixCls:"rc-steps",iconPrefix:"rc",direction:"horizontal",labelPlacement:"horizontal",initial:0,current:0,status:"process",size:"",progressDot:!1});var L=o,st=t(53532),ie=t(57605),g=t(95327),$=t(1155);function C(D){return D.filter(function(K){return K})}function s(D,K){if(D)return D;var P=(0,$.Z)(K).map(function(w){if(j.isValidElement(w)){var i=w.props,a=(0,ue.Z)({},i);return a}return null});return C(P)}var vt=function(D,K){var P={};for(var w in D)Object.prototype.hasOwnProperty.call(D,w)&&K.indexOf(w)<0&&(P[w]=D[w]);if(D!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,w=Object.getOwnPropertySymbols(D);i<w.length;i++)K.indexOf(w[i])<0&&Object.prototype.propertyIsEnumerable.call(D,w[i])&&(P[w[i]]=D[w[i]]);return P},r=function(K){var P,w=K.percent,i=K.size,a=K.className,n=K.direction,y=K.items,G=K.responsive,ye=G===void 0?!0:G,q=K.current,Ye=q===void 0?0:q,et=K.children,ge=vt(K,["percent","size","className","direction","items","responsive","current","children"]),re=(0,ie.Z)(ye),d=re.xs,e=j.useContext(st.E_),Qe=e.getPrefixCls,Be=e.direction,Je=j.useCallback(function(){return ye&&d?"vertical":n},[d,n]),z=Qe("steps",K.prefixCls),l=Qe("",K.iconPrefix),I=s(y,et),B=Fe()((P={},(0,T.Z)(P,"".concat(z,"-rtl"),Be==="rtl"),(0,T.Z)(P,"".concat(z,"-with-progress"),w!==void 0),P),a),W={finish:j.createElement(ot.Z,{className:"".concat(z,"-finish-icon")}),error:j.createElement(Xe.Z,{className:"".concat(z,"-error-icon")})},We=function($e){var nt=$e.node,at=$e.status;if(at==="process"&&w!==void 0){var Le=i==="small"?32:40;return j.createElement("div",{className:"".concat(z,"-progress-icon")},j.createElement(g.Z,{type:"circle",percent:w,width:Le,strokeWidth:4,format:function(){return null}}),nt)}return nt};return j.createElement(L,(0,ue.Z)({icons:W},ge,{current:Ye,size:i,items:I,direction:Je(),stepIcon:We,prefixCls:z,iconPrefix:l,className:B}))};r.Step=L.Step;var gt=r},79716:function(Ke,Ve,t){"use strict";var ue=t(49132),T=t.n(ue),ot=t(67808),Xe=t.n(ot),te=t(81830)},83396:function(Ke,Ve,t){"use strict";t.d(Ve,{Z:function(){return o}});var ue=t(29700),T=t(77335),ot=t(57556),Xe=t(68591),te=t.n(Xe),Fe=t(85628),ct=t(10929),Se=t(22374),ut=t(41140),J=t(39448),Ze=Se.forwardRef(function(L,st){var ie,g=L.prefixCls,$=g===void 0?"rc-switch":g,C=L.className,s=L.checked,vt=L.defaultChecked,r=L.disabled,gt=L.loadingIcon,D=L.checkedChildren,K=L.unCheckedChildren,P=L.onClick,w=L.onChange,i=L.onKeyDown,a=(0,ct.Z)(L,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),n=(0,ut.Z)(!1,{value:s,defaultValue:vt}),y=(0,Fe.Z)(n,2),G=y[0],ye=y[1];function q(re,d){var e=G;return r||(e=re,ye(e),w==null||w(e,d)),e}function Ye(re){re.which===J.Z.LEFT?q(!1,re):re.which===J.Z.RIGHT&&q(!0,re),i==null||i(re)}function et(re){var d=q(!G,re);P==null||P(d,re)}var ge=te()($,C,(ie={},(0,T.Z)(ie,"".concat($,"-checked"),G),(0,T.Z)(ie,"".concat($,"-disabled"),r),ie));return Se.createElement("button",Object.assign({},a,{type:"button",role:"switch","aria-checked":G,disabled:r,className:ge,ref:st,onKeyDown:Ye,onClick:et}),gt,Se.createElement("span",{className:"".concat($,"-inner")},G?D:K))});Ze.displayName="Switch";var ne=Ze,Et=t(53532),j=t(4631),kt=t(19245),qe=t(65526),Ct=function(L,st){var ie={};for(var g in L)Object.prototype.hasOwnProperty.call(L,g)&&st.indexOf(g)<0&&(ie[g]=L[g]);if(L!=null&&typeof Object.getOwnPropertySymbols=="function")for(var $=0,g=Object.getOwnPropertySymbols(L);$<g.length;$++)st.indexOf(g[$])<0&&Object.prototype.propertyIsEnumerable.call(L,g[$])&&(ie[g[$]]=L[g[$]]);return ie},pt=Se.forwardRef(function(L,st){var ie,g=L.prefixCls,$=L.size,C=L.disabled,s=L.loading,vt=L.className,r=vt===void 0?"":vt,gt=Ct(L,["prefixCls","size","disabled","loading","className"]),D=Se.useContext(Et.E_),K=D.getPrefixCls,P=D.direction,w=Se.useContext(kt.Z),i=Se.useContext(j.Z),a=(C!=null?C:i)||s,n=K("switch",g),y=Se.createElement("div",{className:"".concat(n,"-handle")},s&&Se.createElement(ot.Z,{className:"".concat(n,"-loading-icon")})),G=te()((ie={},(0,T.Z)(ie,"".concat(n,"-small"),($||w)==="small"),(0,T.Z)(ie,"".concat(n,"-loading"),s),(0,T.Z)(ie,"".concat(n,"-rtl"),P==="rtl"),ie),r);return Se.createElement(qe.Z,{insertExtraNode:!0},Se.createElement(ne,(0,ue.Z)({},gt,{prefixCls:n,className:G,disabled:a,ref:st,loadingIcon:y})))});pt.__ANT_SWITCH=!0;var o=pt}}]);
